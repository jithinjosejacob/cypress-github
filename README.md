Repo to support Cypress Article - https://www.linkedin.com/pulse/run-cypress-tests-azure-pipelines-jithin-jose-jacob

**Prerequisites**
Nodejs stable version should be installed on your machine

**Steps to run in local**

1) Clone repo to local
2) Navigate to cypress-github directory
3) Run command ```npm ci``` to install dependancies including cypress
4) Run command ```npm run one``` to run sample test


**Note**: Repo contains a buildspec.yaml which can be used to trigger AWS CodePipeline CI.
