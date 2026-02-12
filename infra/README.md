# CV Infrastructure

This CDK app deploys the CV site to S3 + CloudFront and configures Route 53
aliases for `armitage.cloud` and `www.armitage.cloud`.

## Prereqs
- The hosted zone for `armitage.cloud` exists in the AWS account tied to the
  `cc` profile.
- The static site has been built (`npm run build` at repo root).

## Deploy
```bash
npm run build
cd infra
npm install
npx cdk bootstrap --profile cc
npx cdk bootstrap --profile cc aws://<account-id>/us-east-1
npx cdk deploy --profile cc CvSiteCertStack
npx cdk deploy --profile cc CvSiteStack
```

## Optional context overrides
```bash
npx cdk deploy --profile cc -c rootDomain=armitage.cloud -c includeWww=false
```

`hostedZoneId` is configured in `cdk.json` context and can be overridden with
`-c hostedZoneId=<zone-id>` when needed.
