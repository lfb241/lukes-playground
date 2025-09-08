### To Do
- [ ] Zugriff auf Geodaten
- [ ] Submit Picture
- [ ] 2 Branches und auf einem sicherheitskritische Deps und dann Dependabot auf beide Branches loslassen (dependabot.yaml)
- [ ] DB-Dump
- [ ] https://www.youtube.com/watch?v=sm5Y7Vtuihg
- [x] Documentation
- [x] Local building action
    - [x] add gh release create to actions

### Funktionen
- Suchfunktion mit fetch von PuchChem API
- Kamerafunktion mit Flip-Button
- local building with github release

### How to get it started

#### Prerequisites
- Node.js
- npm/Yarn
- Expo-Cli: `npm install -g expo-cli`
- ExpoGo-App on your mobile device
#### Install deps
`npm install` / `yarn install`


To start development server, run `expo start`

Follow the instructions on terminal

#### USB-Tunnel
If you want to use ExpoGo offline with usb:

`adb devices` to check if device is connected

`adb reverse tcp:8081 tcp:8081` for USB-Tunneling 
