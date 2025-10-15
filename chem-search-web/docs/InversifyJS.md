# InversifyJS

Dependency Injection Framework

### Decorators
*Decorator*: Syntax zum Hinzufügen von Metadaten zu Klassen, Methoden, Parametern, Eigenschaften


`@injectable`: verfügbar für Dependency Container (macht Klasse instanziierbar durch Container)

`@inject`: Enthält Daten über Dependencies


*Container*: Verwaltet Dependencies und stellt sie bereit

*Symbole:* Symbole sind eindeutige Werte, die als Schlüssel für Bindings verwendet werden. `const ninjaServiceId = Symbol.for('NinjaServiceId');`

*Binding:* verbindet Klasse/Symbol mit konkreter Implementierung/Instanz

| Methode               | Verhalten                                                   |
| --------------------- | ----------------------------------------------------------- |
| `.inSingletonScope()` | Eine einzige Instanz wird wiederverwendet                   |
| `.inTransientScope()` | Bei jedem Zugriff wird eine neue Instanz erstellt           |
| `.inRequestScope()`   | Eine Instanz pro "Anfrage" (nur in Webanwendungen relevant) |



```
const container = new Container();

container.bind(Ninja).toSelf();   // Wenn jemand einen Ninja will, erzeuge ein Ninja
container.bind(Katana).toSelf(); // Wenn jemand ein Katana will, erzeuge ein Katana

// Objekt anfordern
const ninja = container.get(Ninja);
```
