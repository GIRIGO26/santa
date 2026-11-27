# Schneeball-Gruß

Ein Weihnachtsgruß als kleine Geschichte im Browser: Die Schachtel wirft einen Schneeball auf den Bildschirm,
dann folgt eine Schneeballschlacht gegen das Team und am Ende der Gruß.

Adresse: https://girigo26.github.io/santa/

## Der Link

| Was | Link |
|---|---|
| Standard-Firma, Name des Empfängers | `https://girigo26.github.io/santa/#Anna-Becker` |
| Andere Firma, Name des Empfängers | `https://girigo26.github.io/santa/?beispiel#Anna-Becker` |

- Hinter `?` steht der Name der Firmen-Datei, hinter `#` der Empfänger.
- Ein Bindestrich ist ein Leerzeichen: `#Anna-Becker` wird zu „Anna Becker“.
- Zwei Bindestriche sind ein echter Bindestrich: `#Anna--Lena-Becker` wird zu „Anna-Lena Becker“.
- Ohne Namen bleibt der Gruß allgemein.

## Eine neue Firma anlegen

Dafür muss nichts neu gebaut werden. Es braucht zwei Dateien im Ordner `firmen`:

1. **Logo hochladen.** Im Ordner `firmen` auf „Add file“ und „Upload files“ klicken. Am besten SVG oder PNG mit
   durchsichtigem Hintergrund. Dateiname klein und ohne Leerzeichen, zum Beispiel `mueller-logo.svg`.
2. **Firmen-Datei anlegen.** `firmen/beispiel.json` öffnen, den Inhalt kopieren, im Ordner `firmen` auf
   „Add file“ und „Create new file“ klicken, als `mueller.json` speichern und anpassen.
3. **Etwa eine Minute warten.** Dann läuft die Firma unter `https://girigo26.github.io/santa/?mueller#Anna-Becker`.

### Was in der Firmen-Datei steht

```json
{
  "firma": "Müller GmbH",
  "logo": "mueller-logo.svg",
  "farbe": "#7a1422",
  "team": [
    { "name": "Thomas", "rolle": "Chef" },
    { "name": "Sabine", "rolle": "Vertrieb" },
    { "name": "Emre", "rolle": "Service" }
  ],
  "titel": "Frohe Weihnachten",
  "text": "Guten Tag {name},\n\nvielen Dank für die gute Zusammenarbeit.",
  "unterschrift": "Ihr Team von Müller GmbH"
}
```

- `firma`: steht im Gruß und auf der Startkarte.
- `logo`: Dateiname des Logos im Ordner `firmen`. Es erscheint oben und in Gold auf der Kugel.
- `farbe`: Farbe von Schachtel, Schals und Kugel als Farbwert mit `#`.
- `team`: bis zu drei Schneemänner. Der erste ist der Chef mit Zylinder. `rolle` darf leer sein.
- `text`: der Gruß. `{name}` steht für den Empfänger aus dem Link, `\n\n` beginnt einen neuen Absatz.
- Was fehlt, wird aus der Standard-Firma übernommen.

### Die Standard-Firma ändern

Die Firma ohne `?` im Link steht in `firmen/standard.json`. Diese Datei bearbeiten und speichern.

## Werkstatt

Unter https://girigo26.github.io/santa/werkstatt/ lassen sich Logo, Farbe, Team und Texte ausprobieren
(„Anpassen“ oben rechts). „Als Firmen-Datei zeigen“ gibt die Einstellungen als fertige Firmen-Datei aus.
Das Logo selbst muss trotzdem in den Ordner `firmen` hochgeladen werden.

## Auf dem eigenen Tisch

Auf dem Handy gibt es zwei Knöpfe: „Jetzt auspacken“ und „Auf dem eigenen Tisch auspacken“. Der zweite
öffnet die Kamera. Dafür Bewegungssensor und Kamera erlauben und das Handy auf den Tisch richten.
