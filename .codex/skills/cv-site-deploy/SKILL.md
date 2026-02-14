---
name: cv-site-deploy
description: Deploy the CV website to AWS using the repo's CDK stack (S3 + CloudFront + Route53) and verify the live site response. Use when the user asks to deploy/redeploy/publish the site, promote latest frontend changes, or validate deployment health after a release.
---

# Deploy CV Site to AWS

## Run the deployment

From repo root:

```bash
bash .codex/skills/cv-site-deploy/scripts/deploy_site.sh
```

## What the script does

1. Verifies AWS auth with `aws sts get-caller-identity` using profile `cc` (or override).
2. Builds the frontend via `npm run build`.
3. Deploys CDK stack `CvSiteStack` from `infra` with `--require-approval never`.
4. Verifies the live site returns an HTTP success response.

## Environment overrides

- `CV_DEPLOY_PROFILE`: AWS profile (default `cc`).
- `CV_DEPLOY_STACK`: CDK stack name (default `CvSiteStack`).
- `CV_DEPLOY_INFRA_DIR`: infra directory relative to repo root (default `infra`).
- `CV_DEPLOY_SITE_URL`: URL to verify after deploy (default `https://armitage.cloud`).
- `CV_DEPLOY_REQUIRE_APPROVAL`: CDK approval mode (default `never`).
- `CV_DEPLOY_SKIP_INFRA_INSTALL`: set to `1` to skip `npm install` inside `infra`.
- `CV_DEPLOY_SKIP_VERIFY`: set to `1` to skip post-deploy URL check.

Example:

```bash
CV_DEPLOY_PROFILE=cc \
CV_DEPLOY_STACK=CvSiteStack \
CV_DEPLOY_SITE_URL=https://armitage.cloud \
bash .codex/skills/cv-site-deploy/scripts/deploy_site.sh
```
