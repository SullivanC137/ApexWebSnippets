# CodeMirror 5 gebruiken in Oracle APEX voor XML syntax highlighting #

Dit document beschrijft hoe CodeMirror 5 wordt toegepast binnen Oracle APEX om XML read-only weer te geven met syntax highlighting. De focus ligt expliciet op weergave (kleurtjes) en niet op editing, linting of autocomplete.
Deze aanpak werkt zonder bundling, zonder ES-modules en is volledig compatibel met Oracle APEX.

## Waarom CodeMirror 5 ##
CodeMirror 6 is ES-module based en vereist bundling (bijvoorbeeld met Vite, Rollup of esbuild). Oracle APEX ondersteunt dit niet standaard.
CodeMirror 5:
- werkt met losse JavaScript- en CSS-bestanden
- gebruikt geen import of export statements
- integreert probleemloos met Oracle APEX
- is zeer geschikt voor read-only XML, JSON en log-weergave

Voor dit gebruiksdoel is CodeMirror 5 de juiste en meest pragmatische keuze.

## Benodigde bestanden ##
Gebruik uitsluitend CodeMirror 5 bestanden uit de officiële distributie.
Bron: https://codemirror.net/5/
De benodigde bestanden komen uit twee specifieke mappen in de CodeMirror 5 distributie.
Uit de lib map:
- lib/codemirror.js
- lib/codemirror.css
Uit de mode/xml map:
- mode/xml/xml.js

Controleer codemirror.js vooraf. Als het bestand import statements bevat, is het niet geschikt voor APEX.

## Uploaden in Oracle APEX ##

Ga in Oracle APEX naar Shared Components → Static Application Files.
Upload de volgende bestanden, bij voorkeur in een codemirror map en niet in de root:
- codemirror.js
- codemirror.css
- xml.js

Bestanden laden op de pagina
Onder Page → JavaScript → File URLs:
- #APP_FILES#codemirror/codemirror.js
- #APP_FILES#codemirror/xml.js

Onder Page → CSS → File URLs:
- #APP_FILES#codemirror/codemirror.css

## Textarea configuratie ##
Gebruik een standaard APEX Textarea item.
Voorbeeld:
Item name: P1018_XML
Type: Textarea

CodeMirror initialiseren

Plaats de volgende code onder Page → Execute when Page Loads:
``` javascript
var cm = CodeMirror.fromTextArea(
  document.getElementById('P1018_XML'),
  {
    mode: "application/xml",
    lineNumbers: true,
    readOnly: true,
    viewportMargin: Infinity
  }
);
```
Deze code vervangt de APEX textarea door een CodeMirror viewer met XML syntax highlighting.

Hoogte en breedte instellen
Zodra CodeMirror.fromTextArea() is aangeroepen, wordt de originele APEX textarea verborgen. Hierdoor werken APEX-instellingen zoals Height, Width, Rows en Cols niet meer.
De grootte van de editor moet daarom via CodeMirror zelf worden ingesteld.
Voorbeeld: vaste hoogte instellen in pixels:
cm.setSize(null, 500);

Hierbij betekent:
null: automatische breedte
500: hoogte in pixels
Voor automatisch meegroeien met de inhoud:
cm.setSize(null, "auto");

## Belangrijke APEX-notitie ##
Na initialisatie van CodeMirror:
- werken APEX height- en width-instellingen niet meer
- hebben rows en cols geen effect
- moet sizing via CodeMirror of via CSS op .CodeMirror gebeuren

Dit is verwacht gedrag en geen bug.
Deze aanpak is geschikt voor:
- XML en JSON payloads
- REST responses
- configuratie-overzichten
- logging en technische admin-schermen
- read-only viewers in pagina’s en dialogs

CodeMirror is open source en beschikbaar onder de MIT-licentie.
Officiële documentatie en downloads zijn te vinden op https://codemirror.net/5/
