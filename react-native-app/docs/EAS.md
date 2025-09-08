# Expo Application Services
Cloud services for Expo-Apps to build and submit 

Run: `eas build --platform android --profile development` (build variations in `eas.json`)

local building with `--local`, needs sign in and counts as eas build (only limited free builds)

## Local Workflow without EAS 


1. `npx expo prebuild` => expo project turns in normal react native project, flag `--clean` deletes any existing native directories before regenerating
2. Local production building in Android Studio / Xcode or using CLI with `./gradlew assembleDebug`/`./gradlew assembleRelease`


### Attention!: 

Could be that some expo-plugins or configurations from app.json/app.config.js have to be configured manually for the native project

Release version is not signed yet, this takes further steps:
- create keystore (save decrypted or add to .gitignore )
- adjust gradle.properties and eventually build.gradle

## Workflow without EAS using GitHub

For this repo, there are **GitHub Workflows** managing the building using CI/CD, adjustments are to be made for custom configurations.

The workflow is also **not using signing**, following steps have to be made:
- add keystore to GitHub Secrets
- add the following steps to the workflow:
    - create keystore (save in GitHub Secrets)
    - adjust gradle.properties
    - cleanup keystore
