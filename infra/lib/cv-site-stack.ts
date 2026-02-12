import * as path from 'path'
import { CfnOutput, Duration, Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as route53 from 'aws-cdk-lib/aws-route53'
import * as targets from 'aws-cdk-lib/aws-route53-targets'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment'

export interface CvSiteStackProps extends StackProps {
  rootDomain: string
  includeWww?: boolean
  hostedZoneId: string
  certificateArn: string
}

export class CvSiteStack extends Stack {
  constructor(scope: Construct, id: string, props: CvSiteStackProps) {
    super(scope, id, props)

    const rootDomain = props.rootDomain
    const includeWww = props.includeWww ?? true
    const domainNames = includeWww
      ? [rootDomain, `www.${rootDomain}`]
      : [rootDomain]

    const zone = route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId: props.hostedZoneId,
      zoneName: rootDomain,
    })

    if (!props.certificateArn) {
      throw new Error('certificateArn is required and must be in us-east-1.')
    }

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'SiteCertificate',
      props.certificateArn
    )

    const bucket = new s3.Bucket(this, 'SiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
    })

    const responseHeadersPolicy = new cloudfront.ResponseHeadersPolicy(
      this,
      'NoIndexSecurityHeadersPolicy',
      {
        comment:
          'Security headers plus X-Robots-Tag to prevent indexing while site stays live',
        customHeadersBehavior: {
          customHeaders: [
            {
              header: 'X-Robots-Tag',
              value: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
              override: true,
            },
          ],
        },
        securityHeadersBehavior: {
          contentTypeOptions: { override: true },
          frameOptions: {
            frameOption: cloudfront.HeadersFrameOption.SAMEORIGIN,
            override: true,
          },
          referrerPolicy: {
            referrerPolicy:
              cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
            override: true,
          },
          strictTransportSecurity: {
            accessControlMaxAge: Duration.seconds(31536000),
            override: true,
          },
          xssProtection: {
            protection: true,
            modeBlock: true,
            override: true,
          },
        },
      }
    )

    const distribution = new cloudfront.Distribution(
      this,
      'SiteDistribution',
      {
        defaultRootObject: 'index.html',
        domainNames,
        certificate,
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessControl(bucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
          responseHeadersPolicy,
        },
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
            ttl: Duration.minutes(5),
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
            ttl: Duration.minutes(5),
          },
        ],
      }
    )

    const siteDistPath = path.resolve(__dirname, '..', '..', 'dist')

    new s3deploy.BucketDeployment(this, 'DeploySite', {
      sources: [s3deploy.Source.asset(siteDistPath)],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ['/*'],
    })

    new route53.ARecord(this, 'AliasRoot', {
      zone,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    })

    new route53.AaaaRecord(this, 'AliasRootAAAA', {
      zone,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    })

    if (includeWww) {
      new route53.ARecord(this, 'AliasWww', {
        zone,
        recordName: 'www',
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
      })

      new route53.AaaaRecord(this, 'AliasWwwAAAA', {
        zone,
        recordName: 'www',
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
      })
    }

    new CfnOutput(this, 'DistributionDomain', {
      value: distribution.domainName,
    })

    new CfnOutput(this, 'SiteUrl', {
      value: `https://${rootDomain}`,
    })
  }
}
