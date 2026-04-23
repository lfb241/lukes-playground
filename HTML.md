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


Minimales Grundgerüst:
HTML-5-Dokument nach W3C-Standard enthält folgende Elemente:
- html ist Wurzelelement (DOCTYPE, lang)
- head: enthält Informationen über die Seite (mind. Title, zusätzl. meta charset, viewport, description, icon ... )
- title: darzustellende Informationen
- body: enthält Block-Elemente und Inline-Elemente:
	- Inline: bold, span, button
	- Block: div (keine semantische Bedeutung), Listen, Absätze p

Semantische Blockelemente:
- header enthält Logo, Titel, Navigationselemente (nav), auch in einzelnen Teilen der Internetseite
- footer enthält Kontakt, Impressum, Copyright ...
- main enthält Hauptinhalt
- article in sich geschlossener Artikel
- section enthält Abschnitte
- aside enthält Informationen zum Inhalt, die nicht Teil des Inhalts sind

### Einfaches Beispiel 
```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML5-Seite mit Grundstruktur</title>
</head>

<body>
  <header>
    <img src="logo.gif" alt="logo">
    <h1>Titel</h1>
    <nav>
      <ul>
        <li><a href="#link_1.html">Startseite</a></li>
        <li><a href="#link_2.html">Unterseite 1</a></li>
        <li><a href="#link_3.html">Unterseite 2</a></li>    
        <li><a href="#link_4.html">Kontakt</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>CSS-basierte Layouts</h2>
      <h3>HTML-Struktur ohne CSS</h3>
      <p>Diese Seite enthält zunächst nur die Struktur und den Inhalt.
         Das Aussehen wird erst in folgenden Beispielen über CSS definiert.
      </p>
      <p>Dennoch ist diese Seite schon nutzbar und wird vom Browser
         entsprechend dessen Voreinstellungen bereits sinnvoll angezeigt.
      </p>
    </article>

    <aside>
      <h2>Weiterführende Links</h2>
      <ul>
        <li><a href="#link_1.html">Wiki</a></li>
        <li><a href="#link_2.html">Blog</a></li>
        <li><a href="#link_3.html">Forum</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <a href="#kontakt.html">Kontakt</a>
    <p>© 2014 by selfHTML</p>
  </footer>
</body>
</html>
```


### REST-Technologie
Schnittstelle für Webdienste
Basiert auf HTTP, bereitstellen der Daten in Java

### REST-API
Schnittstelle, die es Anwendungen ermöglicht, über ein Netzwerk zu kommunizieren, indem sie dem REST-Architekturstil folgt, nutzt Standard HTTP-Methoden um Daten abzurufen/manipulieren und gibt Daten in Formaten wie JSON/XML zurück

Eine Anwendung (der Client) sendet eine Anfrage an einen Server, der die angefragte Ressource bereitstellt.

Die Anfrage nutzt HTTP-Methoden, um eine Operation durchzuführen: 

- **GET:** Daten abrufen. 

- **POST:** Neue Daten erstellen. 

- **PUT:** Eine Ressource aktualisieren oder ersetzen. 

- **DELETE:** Eine Ressource löschen.

**Ressourcen:**

Alles, was über die API angefordert wird – Daten, Objekte oder Funktionen – wird als Ressource betrachtet. 
**Endpunkte:**

Jede Ressource hat eine eindeutige URL, den sogenannten Endpunkt, über den sie angesprochen wird.


### Build System
- kompiliert
- testet
- lädt Dependencies
- erstellt Packages
### Bootstrapping
Ein System wird durch ein einfaches, bereits vorhandenes System gestartet und aktiviert
### Proxy
- Vermittler innerhalb eines Netzwerkes
- Sicherheit/Schnelligkeit

| Proxy-Typ         | Wer steht wo?                                | Hauptzweck                                       |
| ----------------- | -------------------------------------------- | ------------------------------------------------ |
| **Forward Proxy** | Client  →  Proxy  →  Internet  →  Server<br> | Verbirgt den **Client** (z. B. im Firmennetz)    |
| **Reverse Proxy** | Client  →  Internet  →  Proxy  →  Server<br> | Verbirgt die **Server** (z. B. im Rechenzentrum) |

#### Reverse Proxy
Server der zwischen Client (z.B. Webbrowsern) und Backend-Server(n) steht, nimmt Anfragen entgegen, leitet sie an passenden Server weiter und anschließend Rückgabe an Client

**Aufgaben:**
- Load Balancing
- Caching
- Sicherheit (SSL/TLS-Verschlüsselung)

### Ports 
- Virtueller Punkt, an dem Netzwerkverbindungen enden/beginnen
- Verschiedene Ports für verschiedene Protokolle:
	- 80 -> HTTP
- ermöglicht Adressierung an Server/Client, über die IP werden Geräte indentifiziert
- TCP gibt an, an welchen Port Paket gehen soll

### DNS
Rechner stellen über Domains Anfrage auf Übermittlung der IP-Adresse, die über DNS-Server verarbeitet werden

### Kernel
Zentrales Modul des Betriebssystems, Schnittstelle zwischen Soft- und Hardware.
- verwaltet Systemressourcen wie Prozessorzeit, Speicher und Geräte
- besteht aus verschiedenen Layern 

### SSL-Verschlüsselung
Verschlüsselt Datenkommunikation zwischen Webserver und Webbrowser (TLS ist Weiterentwicklung von SSL)
- Durch eine asymmetrische Verschlüsselung wird eine Ende-zu-Ende-Datenübertragung zwischen dem Webserver und -browser sichergestellt.
- Mithilfe eines symmetrischen Verschlüsselungsverfahrens wird die Integrität der transportierten Daten gewährleistet.
- S in HTTPS steht für Verschlüsselung mit SSL


### CSS-Begriffe
| Begriff                         | Beschreibung                                                                            |
| ------------------------------- | --------------------------------------------------------------------------------------- |
| **padding**                     | Innenabstand zwischen Inhalt und Rand eines Elements (innen um den Inhalt herum).       |
| **margin**                      | Außenabstand zwischen dem Element und anderen Elementen (der Abstand nach außen).       |
| **border**                      | Rahmen um ein Element, z.B. dicke, Farbe, Stil (solid, dashed, etc.).                   |
| **width / height**              | Breite und Höhe eines Elements.                                                         |
| **display**                     | Legt fest, wie ein Element angezeigt wird (z.B. `block`, `inline`, `flex`).             |
| **position**                    | Steuerung der Position eines Elements (z.B. `static`, `relative`, `absolute`, `fixed`). |
| **top / right / bottom / left** | Gibt die Position eines Elements an, wenn `position` nicht `static` ist.                |
| **float**                       | Lässt ein Element nach links oder rechts „floaten“, sodass Text darum fließt.           |
| **clear**                       | Verhindert, dass Elemente neben einem gefloateten Element stehen.                       |
| **z-index**                     | Bestimmt die Stapelreihenfolge von überlappenden Elementen (höher = weiter vorne).      |
| **overflow**                    | Steuerung, wie überlaufender Inhalt behandelt wird (`visible`, `hidden`, `scroll`).     |
| **font-family**                 | Legt die Schriftart fest.                                                               |
| **font-size**                   | Schriftgröße.                                                                           |
| **color**                       | Textfarbe.                                                                              |
| **background-color**            | Hintergrundfarbe eines Elements.                                                        |
| **text-align**                  | Textausrichtung (`left`, `center`, `right`, `justify`).                                 |
| **opacity**                     | Transparenz eines Elements (Wert zwischen 0 und 1).                                     |
| **box-shadow**                  | Schatten um ein Element herum.                                                          |

### Selektoren
Man unterscheidet Typen- und Klassenselektoren (.blabla.bla) sowie ID-Selektoren(#id oder h1#heading), universeller Selektor **

### Flexbox

Gut für:
- Responsive Menüs
- Zentrieren von Elementen (horizontal und vertikal)
- Gleichmäßiges Verteilen von Buttons, Bildern oder Karten
- Reihen oder Spalten, die sich dynamisch anpassen sollen
#### Eigenschaften
CSS-Modul ermöglicht Elemente innerhalb eines Containers flexibel und effizient anzuordnen:

Ein Container wird **Flex-Container**:
- `display: flex;` — aktiviert Flexbox.

- `flex-direction` — bestimmt die Hauptachse (Richtung der Items).
    - `row` (Standard): Items werden in einer Reihe von links nach rechts angeordnet.
    - `column`: Items werden in einer Spalte von oben nach unten angeordnet.
    - `row-reverse` oder `column-reverse` kehren die Reihenfolge um.

- `justify-content` — richtet die Items entlang der Hauptachse aus.
    - `flex-start` (Standard): am Anfang.
    - `center`: zentriert.
    - `flex-end`: am Ende.
    - `space-between`: gleichmäßiger Abstand zwischen Items.
    - `space-around`: gleicher Abstand um die Items herum.

- `align-items` — richtet die Items entlang der Querachse aus.
    - `stretch` (Standard): Items werden gedehnt, um Containerhöhe auszufüllen.
    - `flex-start`, `center`, `flex-end`, `baseline` (Ausrichtung an Textgrundlinie).

- `flex-wrap` — bestimmt, ob die Items in eine neue Zeile umbrechen.
    - `nowrap` (Standard): alles in einer Reihe.
    - `wrap`: Items umbrechen auf nächste Zeile.

Seine Kinder sind **Flex-Items**:

- `flex-grow` — wie stark ein Item wachsen kann (Standard 0).
    
- `flex-shrink` — wie stark ein Item schrumpfen kann (Standard 1).
    
- `flex-basis` — Startgröße eines Items.
    
- Kurzform: `flex: grow shrink basis;` z.B. `flex: 1 0 100px;`


### SCSS

- **@import** holt andere Dateien oder Bibliotheken.

- **.classname** definiert Styles für Elemente mit dieser Klasse.
	- Klassen werden in SCSS-Dateien definiert, in CSS kompiliert und dann mit `class` ([[HTML]]) oder `classname` ([[React]]) in Komponenten eingebunden


- **Pseudo-Elemente (::after, ::before)** fügen Inhalt hinzu.

- **!important** überschreibt andere Regeln (sparsam benutzen!).

- **Variablen ($app-border-color)** kommen aus eigenen SCSS-Dateien.

- Bibliotheken haben eigene Komponenten dessen Klassen man gezielt in SCSS-Dateien stylen kann

**Klassen:**
```SCSS
.asterisk-mark::after {
    content: '*';
    color: red;
}
```
`::after` ist ein **Pseudo-Element**.

### Asynchronität

Bei der Asynchronität wird die weitere Ausführung nicht blockiert, während ein oder mehrere Vorgänge ausgeführt werden:

Rückrufe sind Funktionen, die als Argumente an andere Funktionen übergeben werden, die später ausgeführt werden sollen.

Promises stellen einen Wert dar, der jetzt oder in der Zukunft verfügbar sein kann, sodass Sie asynchrone Vorgänge sauberer handhaben können.

Async await baut auf Promises auf und bietet eine lesbarere und einfachere Möglichkeit, asynchronen Code zu schreiben.

```js
async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
  } catch (err) {
    console.error(err);
  }
}
```

https://developer.mozilla.org/de/docs/Learn_web_development/Core/Styling_basics


https://developer.mozilla.org/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills


https://connect.jobteaser.com/?client_id=e500827d-07fc-4766-97b4-4f960a2835e7&entity_cc_name=Career+Center&entity_color=%23a2c52e&entity_logo=https%3A%2F%2Fd1guu6n8gz71j.cloudfront.net%2Fsystem%2Fasset%2Flogos%2F2464701%2Flogo.png%3F1572962116&entity_name=MLU&nonce=fa1a9ff7e633e41fd2043e3981c20d92&organization_domain=uni-halle&redirect_uri=https%3A%2F%2Fwww.jobteaser.com%2Fusers%2Fauth%2Fconnect%2Fcallback%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.jobteaser.com%252Fusers%252Fauth%252Fconnect%252Fcallback&response_type=code&scope=openid+email+profile+groups+urn%3Aconnect%3Ajobteaser%3Acom%3Aorganization+urn%3Aconnect%3Ajobteaser%3Acom%3Aextra_attributes&state=edcbe5ca9b7c010a4a7d57578a4e012d&ui_locales=de