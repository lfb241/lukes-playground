# React
- HTML: Gibt Struktur vor
- CSS: Fügt HTML-Elementen Style hinzu
- Javascript: Reagiert auf User-Interaktionen mit HTML
- `App.tsx` ist die Hauptkomponente, `index.html` ist das statische HTML-Template, in das die React-App eingebunden wird (`<div id="root">`)
- HTTP-Anfragen über asynchrone API 
- DOM (Document Object Model): Interface für HTML/XML, erlaubt die Struktur/Layout eines Dokuments zu verändern, React arbeitet mit einem **Virtual DOM**, das Änderungen effizient vergleicht und nur nötige Updates im echten DOM macht.

## Funktionalitäten
### state/props

- **State** speichert interne Daten einer Komponente.
  - In function Components nutzbar via Hooks: `const [count, setCount] = useState(0)`
  - Werte ändern durch `setCount(newValue)`
- **Props** sind Daten, die von außen an Komponenten übergeben werden (wie HTML-Attribute).
  - Zugriff in der Funktion direkt: `props.name` oder via Destrukturierung: `{ name }`

#### References
| refs                                                                                  | state                                                                                                                                                    |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useRef(initialValue)` returns `{ current: initialValue }`                            | `useState(initialValue)` returns the current value of a state variable and a state setter function ( `[value, setValue]`)                                |
| **Doesn’t trigger re-render when you change it.**                                     | Triggers re-render when you change it.                                                                                                                   |
| Mutable—you can modify and update `current`’s value outside of the rendering process. | ”Immutable”—you must use the state setting function to modify state variables to queue a re-render.                                                      |
| You shouldn’t read (or write) the `current` value during rendering.                   | You can read state at any time. However, each render has its own [snapshot](https://react.dev/learn/state-as-a-snapshot) of state which does not change. |
- used when working with external systems/API

### Die wichtigsten Hooks

| Hook         | Zweck                                                    | Beispiel                                                       |
| ------------ | -------------------------------------------------------- | -------------------------------------------------------------- |
| `useState`   | State in funktionalen Komponenten verwenden              | `const [count, setCount] = useState(0);`                       |
| `useEffect`  | Nebeneffekte (z. B. Datenladen, Subscriptions) ausführen | `useEffect(() => { fetchData(); }, []);`                       |
| `useContext` | Zugriff auf React Context (globaler State)               | `const theme = useContext(ThemeContext);`                      |
| `useRef`     | Referenz auf DOM-Elemente oder speicherbare Werte        | `const inputRef = useRef();`                                   |
| `useReducer` | Komplexes State-Management (ähnlich wie Redux)           | `const [state, dispatch] = useReducer(reducer, initialState);` |
###  Conditional Rendering

- **JSX-Ausdrücke mit `{}`** – innerhalb JSX können JS-Ausdrücke verwendet werden.
- **`if`-Statements**: außerhalb von JSX in der Funktion verwenden.
- **Logisches UND (`&&`)**: Nur rendern, wenn Bedingung wahr ist:

  ```jsx
  {isLoggedIn && <p>Willkommen!</p>}
  ```
- **Ternary Operator**: `{isDark ? <DarkMode /> : <LightMode />}`

### Lifecycle
Jede Komponente durchläuft einen Lebenszyklus der verschiedene Phasen hat und in denen React Methoden (Lifecycle-Methoden) aufruft, die du überwachen oder nutzen kannst:

#### Mounting
Komponente wird ins DOM geladen und initialisiert
- `constructor()` - Initialisierung von State und Bindings
- `getDerivedStateFromProps()` - State basierend auf Props aktualisieren 
- `render()` - JSX wird erzeugt und ins DOM gemountet
- `componentDidMount()` - wird **nach** dem ersten Rendern aufgerufen (z. B. für Datenladen)

#### Updating
Komponente reagiert auf Änderungen in `props` oder `state`.
- `getDerivedStateFromProps()` - State ggf. an Props anpassen
- `shouldComponentUpdate()` - entscheidet, ob ein Re-Render stattfinden soll (Performance)
- `render()` - aktualisiertes JSX generieren
- `getSnapshotBeforeUpdate()` - erfasst Infos vor dem Update (z. B. Scrollposition)
- `componentDidUpdate()` - nach dem Update, z. B. um DOM zu manipulieren oder Daten nachzuladen

#### Unmounting
Komponente wird aus dem DOM entfernt
- `componentWillUnmount()` - Cleanup durchführen, z. B. Event-Listener entfernen oder Timer stoppen, bevor die Komponente entfernt wird
