# Expo/React-Native
Framework für React Native
- verarbeitet nativen Code
- viele Tools
- kein XCode/Android Studio
- ExpoGo

## Wichtige Komponenten

| Komponente                       | Beschreibung                                            |
| -------------------------------- | ------------------------------------------------------- |
| `View`                           | Container-Komponente (vergleichbar mit `<div>` in HTML) |
| `Text`                           | Darstellung von Text                                    |
| `Image`                          | Bilder anzeigen                                         |
| `ScrollView`                     | Scrollbarer Container                                   |
| `TextInput`                      | Eingabefeld                                             |
| `Button`                         | Einfacher Button                                        |
| `Pressable` / `TouchableOpacity` | Für benutzerdefinierte Buttons / Interaktionen          |
| `SafeAreaView`                   | Vermeidet Überlappung mit Notch/Statusbar               |
| `StatusBar`                      | Steuerung der Statusbar-Farbe etc.                      |
| **Expo-spezifisch:**             |                                                         |
| `expo-camera`                    | Zugriff auf Kamera                                      |
| `expo-image-picker`              | Zugriff auf Medienbibliothek/Kamera                     |
| `expo-location`                  | Standortdaten                                           |
| `expo-av`                        | Audio/Video-Funktionalitäten                            |
| `expo-notifications`             | Push-Benachrichtigungen                                 |
| `expo-constants`                 | App-bezogene Systeminfos (z. B. App-Version)            |
## Routing
Navigation über `expo-router` über das Dateisystem:
- Layout definiert in `_layout.tsx`

### Stack Navigation
Seiten übereinander stapeln (klassisches Navigieren)
- auch Gruppen ansprechbar, jede Gruppe braucht eigenes Layout mit Slot

### Tab Navigation
Tabs unten für Hauptbereiche der App
## List Views
Es gibt FlatLists und SectionLists mit Scrolling
## State Management

| Feature        | `useState`                     | `useContext`                               |
| -------------- | ------------------------------ | ------------------------------------------ |
| Speicherort    | Nur innerhalb einer Komponente | Global (über mehrere Komponenten hinweg)   |
| Zweck          | Lokale UI-Logik                | Gemeinsamer Zustand, z. B. Benutzer, Theme |
| Kombiniert mit | –                              | `useState`, `useReducer` usw.              |
| Beispiel       | Zähler, Formular-Input         | Aktueller Nutzer, Sprache, Dark Mode       |

Wichtig `useContext`:

| Begriff                    | Bedeutung                                                    |
| -------------------------- | ------------------------------------------------------------ |
| `createContext()`          | Erstellt einen neuen „globalen Speicherort“                  |
| `useContext()`             | Zugriff auf die aktuellen Werte aus dem Kontext              |
| `Provider`                 | Gibt Werte (State + Funktionen) an Kinder weiter             |
| Kombination mit `useState` | Ermöglicht es, **veränderbaren Zustand** global zu speichern |


## Best Practises
- funktionale Komponenten mit Hooks
- `state` minimal halten
- Für Lifecycle-ähnliche Logik wie Datenladen, Event-Listener oder Cleanup ist `useEffect` das Mittel der Wahl. Achte auf die Abhängigkeiten im Dependency-Array, um unnötige Effekte zu vermeiden.

## Zugriff auf Kamera/Geodaten
[expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/) und [expo-location](https://docs.expo.dev/versions/latest/sdk/location/) ermöglichen einfachen Zugriff

[react-native-maps](https://github.com/react-native-maps/react-native-maps) bietet cross platform Map-Komponenten

Lokale Speicherung mit AsyncStorage
