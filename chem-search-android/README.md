# Project Documentation

## Tech Stack
- React Native (Expo Framework)
- GitHub Actions

## To Do
- [ ] Geodata processing
- [ ] Submit Picture (Database storage)

## Features
- Search function with PubChem API
- Camera function with flip button
- Local .apk building with automated release in GitHub Actions

## How to Get Started

### Prerequisites
- Node.js
- npm/Yarn
- Expo CLI: `npm install -g expo-cli`
- Expo Go app on your mobile device

### Install Dependencies
`npm install` / `yarn install`

To start the development server, run `expo start`

Follow the instructions in the terminal

### USB Tunneling
If you want to use Expo Go offline with a USB-connected Android phone:

`adb devices` to check if the device is connected

`adb reverse tcp:8081 tcp:8081` for USB tunneling