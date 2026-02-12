import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import * as route53 from 'aws-cdk-lib/aws-route53'

export interface CvSiteCertStackProps extends StackProps {
  rootDomain: string
  includeWww?: boolean
  hostedZoneId: string
}

export class CvSiteCertStack extends Stack {
  readonly certificateArn: string

  constructor(scope: Construct, id: string, props: CvSiteCertStackProps) {
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

    const certificate = new acm.Certificate(this, 'SiteCertificate', {
      domainName: rootDomain,
      subjectAlternativeNames: domainNames.filter((name) => name !== rootDomain),
      validation: acm.CertificateValidation.fromDns(zone),
    })

    this.certificateArn = certificate.certificateArn

    new CfnOutput(this, 'CertificateArn', {
      value: this.certificateArn,
    })
  }
}
