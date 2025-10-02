# Dokumentation Projekt

## JS/TS Funktionalitäten

- **Arrow Functions**
```
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}

```

- **Variablen**

| Merkmal                 | `var`          | `let`    | `const`  |
| ----------------------- | -------------- | -------- | -------- |
| Scope                   | Function       | Block    | Block    |
| Hoisting                | Ja (undefined) | Ja (TDZ) | Ja (TDZ) |
| Wiederzuweisbar         | Ja             | Ja       | Nein     |
| Mutierbarkeit (Objekte) | Ja             | Ja       | Ja       |
| Mehrfachdeklaration     | Ja             | Nein     | Nein     |


- **Spread-Operator** `...` erlaubt schnelles kopieren von Arrays

- **Modules** erlauben die Separierung des Codes
    - `export` inline oder am Ende zum exportieren einer Fkt. oder Variable von bel. Datei
    - `export default`
    - named imports z.B: `import { name, age } from "./person.js";`
    - default imports z.B: `import message from "./message.js";`

- `.map(fct)`: Funktion läuft über jedes Element, Ausgabe eines neues Arrays
    - in React zum Listen generieren

- Destructuring möglich, also z.B:
        
        const vehicles = ['mustang', 'f-150', 'expedition'];
        const [car, truck, suv] = vehicles;

    - auch bei Objekten möglich


### Asynchronität (Async await)
Bei der Asynchronität wird die weitere Ausführung nicht blockiert, während ein oder mehrere Vorgänge ausgeführt werden:

Rückrufe sind Funktionen, die als Argumente an andere Funktionen übergeben werden, die später ausgeführt werden sollen.

Promises Stellen Sie einen Wert dar, der jetzt oder in der Zukunft verfügbar sein kann, sodass Sie asynchrone Vorgänge sauberer handhaben können.

Async / warten baut auf Promises auf und bietet eine lesbarere und einfachere Möglichkeit, asynchronen Code zu schreiben.

## React
- DOM (Document Object Model): Interface für HTML/XML, erlaubt die Struktur/Layout eines Dokuments zu verändern

### state/props

- **state** speichert Properties lokal in einer Komponente, wird im Konstruktor initialisiert, Zugriff über `const [state, setState] = useState()`, referieren über `this.state.propertyname`, ändern über `this.setState()` Z.B.: `changeColor = ( => {this.setState({volor: "blue"});`
- **Props** werden von außen in die Komponenten übergeben (wie HTML Attribute)
    - immer an Konstruktor/super() passen
    - Zugriff auf Argument über `props.name`

###  Conditional Rendering
- in {}
- `if`-statements um konditionell zu rendern (außerhalb von JSX in Fkt.)
- `&&` Bedingung vor `&&`, wenn wahr rendern der folgenden Expression
- **Ternary Operator** Syntax: `condition ? <expression if true> : <expression if false>`

### Forms

| Thema                        | Beschreibung                                                                 |
| ---------------------------- | ---------------------------------------------------------------------------- |
| **Zweck**                    | Ermöglichen Interaktion mit dem Benutzer (z. B. Eingaben, Auswahl, Senden)   |
| **Kontrollierte Komponente** | Input-Wert wird durch React State gesteuert (`value` + `onChange`)           |
| **`useState` Hook**          | Dient zur Speicherung und Aktualisierung von Eingabewerten                   |
| **`onChange`**               | Event-Handler zum Aktualisieren des States bei Eingaben                      |
| **`onSubmit`**               | Wird auf `<form>` gesetzt, um Reaktion auf Formular-Abschicken zu definieren |
| **Form-Elemente**            | `<input>`, `<textarea>`, `<select>`, `<checkbox>`, `<radio>` usw.            |
| **`event.preventDefault()`** | Wird in `onSubmit` genutzt, um Standard-Formularverhalten zu unterdrücken    |
| **Mehrere Inputs**           | State als Objekt nutzen, z. B. `{ name: '', email: '' }`                     |



### Lifecycle
Jede Komponente hat einen Lebenszyklus der überwacht/manipuliert werden kann:

#### Mounting
- Elemente werden in DOM geladen
- `constructor()`
- `getDerivedStateFromProps()` state object placen 
- `render()`
- `componentDidMount()` wird nach Rendern aufgerufen

#### Updating
- Change in `state` oder `props`
- `getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()` Zugang zu props/state vor dem Update
- `componentDidUpdate()`

#### Unmounting
Komponente wird aus DOM removed
- `componentWillUnmount()` called bevor Komp removed wird

## CSS Styling
- inline sytling: value muss JS Objekt sein {{}}, camelCase
- stylesheets: seperate .css file
- modules: convenient für components in versch. Files .module.css; dann importieren und aufrufen
- SASS? .scss

## HTML

- HTML wird gerendert durch Fkt. `createRoot()` und seine Methode `render()`
    - `createRoot()` nimmt ein HTML-Argument
    - `render()` definiert React-Komponente die in `index.html` gerendert werden soll 

- `<!DOCTYPE html>` = Deklarierung über Art des Dokumentes (aktuell 5)
- `<html lang="">` = Sprache des Seiteninhalt, schließen hinter Body
- `<head>` = Informationen über die Seite
    - `<title>` = Titel
    - `<meta charset="">` = Zeichencodierung ("utf-8")
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">`= ermöglicht Anpassung an Viewprt und Skalierung auf Mobilgeräten
- `<body>` = Sichtbarer Dokumentinhalt
    - `<div>` = hier wird die React-App gerendert
    - `<p>` = Absatz
    - `<ol>/<ul>` = ungeordnete/geordnete Liste
        - `<li>` = Objekte der Liste (Verschachtelung möglich)
    - `<table>` = Tabelle
        - `<tr>` = Row, `<td>` = Cell


https://www.w3schools.com/tags/default.asp

**Beispiel:**

```
<table>
    <thead>
        <tr>
          <th>Kopf</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Inhalt</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
          <td>Fuß</td>
        </tr>
    </tfoot>
</table>

```