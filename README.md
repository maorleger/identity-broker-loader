# identity-broker-loader

Uses the approach in https://github.com/Azure/azure-sdk-for-js/pull/34015 in both CJS and ESM context.

Two commits:

## Setup and failure

- https://github.com/maorleger/identity-broker-loader/commit/3698bde92da20ccf9e6d789dce1f0e3312c899ee

Sets up the various files and fails to load the `identity-broker-loader` package since we have not installed it yet.

## Install and success

- https://github.com/maorleger/identity-broker-loader/commit/90ca8a77aa3abac701acdf1829f14f2428a9a4f7

Installs the `@azure/identity-broker` package and loads it successfully.

## How to run

1. Clone the repo
2. Run `npm install`
3. Run `npm run start:cjs` to run the CJS version
4. Run `npm run start:esm` to run the ESM version

## How to repro failure

1. Delete `@azure/identity-broker` from `package.json`
2. Delete node_modules and package-lock.json
3. Run `npm install`
4. Run `npm run start:cjs` to run the CJS version
5. Run `npm run start:esm` to run the ESM version
6. You should see the error `Error: Cannot find module '@azure/identity-broker'` in both cases.
