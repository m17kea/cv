#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { CvSiteStack } from '../lib/cv-site-stack'
import { CvSiteCertStack } from '../lib/cv-site-cert-stack'

const app = new cdk.App()

const rootDomain = app.node.tryGetContext('rootDomain') ?? 'armitage.cloud'
const includeWww = (app.node.tryGetContext('includeWww') ?? 'true') !== 'false'
const account = process.env.CDK_DEFAULT_ACCOUNT
const region = process.env.CDK_DEFAULT_REGION

const certStack = new CvSiteCertStack(app, 'CvSiteCertStack', {
  env: {
    account,
    region: 'us-east-1',
  },
  rootDomain,
  includeWww,
})

new CvSiteStack(app, 'CvSiteStack', {
  env: {
    account,
    region,
  },
  crossRegionReferences: true,
  rootDomain,
  includeWww,
  certificateArn: certStack.certificateArn,
})
