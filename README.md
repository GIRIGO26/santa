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

## Das Spiel

- **Vorstellung:** Wer zum ersten Mal da ist, lernt die drei Schneemänner kennen, bevor es losgeht. Das dauert
  knapp zehn Sekunden und lässt sich überspringen. Die erste Schlacht wartet dann auf den ersten Treffer.
- **Drei Typen:** der Chef mit Zylinder in der Schachtel (zählt dreifach), ein langer Dünner mit Brille und
  Ohrenschützern, ein kleiner Runder mit Blecheimer auf dem Kopf.
- **Lange Nase:** Jeder Treffer lässt die Karotte wachsen, der dritte gibt Bonus.
- **Revanche:** Wer den Spieler trifft, plustert sich auf. Der Gegentreffer gibt Bonus.
- **Serie:** Treffer in Folge werden gezählt („Läuft!“, „Schneesturm!“, „Lawine!“). Mit jeder Stufe werden die
  Schneebälle größer und golden, die Treffer wuchtiger, der Raum wärmer.
- **Mitgenommen:** Mit jedem Treffer rutscht der Hut weiter, Schneeklumpen bleiben kleben.
- **Runden:** 40 Sekunden, bis zu drei Sterne. Ein Stern reicht für die nächste Runde.
- **Freischaltungen:** Runde 2 bringt die Schneeschaufel, Runde 3 den Farbeimer in der Firmenfarbe, Runde 4
  den Zimtstern für doppelte Punkte. Das Spielzeug fliegt aus der Schachtel und wird angetippt.
- **Rekord:** Runde und Rekord merkt sich der Browser des Empfängers, getrennt je Firma.

Zum Vorführen gibt es zwei Zusätze im Link. Sie sind zum Zeigen gedacht, nicht zum Verschicken:

| Was | Link |
|---|---|
| Wieder bei Runde 1 beginnen, Rekord löschen | `https://girigo26.github.io/santa/?neu#Anna-Becker` |
| Direkt in eine Runde springen | `https://girigo26.github.io/santa/?runde=4#Anna-Becker` |
| Andere Firma, von vorn | `https://girigo26.github.io/santa/?beispiel&neu#Anna-Becker` |

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
- `farbe`: Farbe von Schachtel, Schals, Kugel und Farbeimer als Farbwert mit `#`.
- `team`: bis zu drei Schneemänner. Der erste ist der Chef mit Zylinder, der zweite der Lange mit
  Ohrenschützern, der dritte der Runde mit Blecheimer. `rolle` darf leer sein.
- Der Chef trägt einen Schnurrbart. Ohne: `{ "name": "Claudia", "rolle": "Chefin", "bart": false }`.
- `text`: der Gruß. `{name}` steht für den Empfänger aus dem Link, `\n\n` beginnt einen neuen Absatz.
- Was fehlt, wird aus der Standard-Firma übernommen.

### Die Standard-Firma ändern

Die Firma ohne `?` im Link steht in `firmen/standard.json`. Diese Datei bearbeiten und speichern.

## Werkstatt

Unter https://girigo26.github.io/santa/werkstatt/ lassen sich Logo, Farbe, Team und Texte ausprobieren
(„Anpassen“ oben rechts). „Als Firmen-Datei zeigen“ gibt die Einstellungen als fertige Firmen-Datei aus.
Das Logo selbst muss trotzdem in den Ordner `firmen` hochgeladen werden.

## Auf dem Tisch

Auf dem Handy ist „Jetzt auf dem Tisch auspacken“ der Hauptknopf, darunter steht „Auf dem Handy auspacken“.
Der Hauptknopf öffnet die Kamera (Kamera und Bewegungssensor erlauben) und packt dann von selbst aus. Das
Geschenk steht immer im Bild: Wer sich wegdreht, zieht es mit. Ohne Kamera-Erlaubnis geht es normal weiter.
