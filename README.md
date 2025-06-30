# Welcome to Animystic!

This is a demo project I developed using Expo.
## In order to run my demo in your environment, you will need to contact me for the API keys

## APIs Used
 - Api Ninjas
   - Utilized `/animals` endpoint to search user input
 - Unsplash Images API
   - To complement animal info, I use unsplash to append a related image
  
## Tech
- Expo
- Typescript
- Maestro (E2E)
- Jest (Unit Testing)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Run the app

   ```bash
   npm run ios
   ```
   or
      ```bash
   npm run android
   ```

In the output, you'll find options to open the app in a
- #### If you're having trouble with the development build on Android, please use the Expo Go build.

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Running Unit Tests
- In your terminal
   ```
   npm run test
   ``` 

## Running E2E Tests
1. Make sure you have `maestro` installed on your system ([Installation Guide](https://docs.maestro.dev/getting-started/installing-maestro))
   ```
   brew tap mobile-dev-inc/tap
   brew install maestro
   ```
2. This is testing with live data, so you will need to run the following before running e2e
   ```
   npx expo start
   ```
3. In a separate terminal tab, make sure you are in the project's directory, and run the following
   ```
   maestro test .maestro/search_animal.yml
   ``` 

