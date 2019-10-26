# Das Theme

Das Modul `webapp-theme-crick` dient zum Styling von DATEV-Webanwendungen mit einem Theme basierend auf der [**DATEV Design DNA**](https://go/dna). Dieses Theme beinhaltet alle in im Styleguide [**go/MAP**](https://go/map) dargestellten visuellen Eigenschaften und Merkmale. Es besteht aus mehreren SCSS-Dateien und Assets und ist mit Hilfe zentraler Variaben und semantischer Klassen erstellt worden.

Das Theme basiert ab Version 3 auf dem Oberflächen-Framework [**Bootstrap 4**](https://i/getbootstrap.com)

&nbsp;</br>  


# Wiki

Alle Informationen findest du im [**Wiki** von webapp-theme-crick](https://git.zd.datev.de/webappcommunity/frontend/webapp-theme-crick/wikis/home)

Inhalte dort sind unter anderem:

* [Migration von Bootstrap 3 zu 4](https://git.zd.datev.de/webappcommunity/frontend/webapp-theme-crick/wikis/v3/Migration-Guide)
* [Passende ngx-ui-component-Version](https://git.zd.datev.de/webappcommunity/frontend/webapp-theme-crick/wikis/home)
* [SVGs](https://git.zd.datev.de/webappcommunity/frontend/webapp-theme-crick/wikis/how-to/SVGs)

&nbsp;</br> 

# Webapp-Theme Modul verwenden

Dieses npm-Paket beinhaltet das DATEV Design DNA-Theme basierend auf Bootstrap und externen UI-Komponenten, das vorher Teil des @datev-ria-Pakets war.

## Installation
Zur Installation der NPM Moduls muss folgender Befehl in der CommandLine verwendet werden.

```
npm install @datev/webapp-theme-crick --save
```

## Verwendung
Ist das Modul im Projekt installiert, können die verschiedenen Dateien für das Styling verwendet werden. Soll lediglich das dna-theme angebunden werden muss dies entsprechend importiert werden:

In den Projekt-eigenen CSS/SCSS-Dateien (z.B. `custom.less`)
```css
@import "../../../node_modules/@datev/webapp-theme-crick/assets/css/dna-theme.css";
```

Wenn die Variables des dna-theme verwendet werden sollen, so ist die Einbindung dieser mittels folgendem Befehl möglich.

```scss
@import "../../../node_modules/@datev/webapp-theme-crick/assets/scss/variables";
```
  
&nbsp;</br> 

# Webapp-Theme Modul anpassen & bearbeiten

## Einrichten des Projekts
* Abrufen der Sourcen: `git clone https://git.zd.datev.de/webappcommunity/frontend/webapp-theme-crick.git`
* **Zur Installation der npm-Module eine Kommandozeile im Root-Verzeichnis öffnen und folgenden Befehl in der Kommandozeile ausführen:** `npm install`

<!-- ### Bauen des webapp-theme-Projekts
* Kommandozeile im Root der Anwendung öffnen (via IDE oder Windows Explorer)
* Anwendung in der gewünschten Konfiguration bauen: `npm run build` -->

## Build

Zum Bauen der Pakete steht folgendes npm-Skript zur Verfügung:

```
npm run build
```

## Spriting von Icons

Zum Spriting der Icons steht folgendes npm-Skript zur Verfügung.

```
npm run sprite:svgs
```

&nbsp;</br> 

# Support
 Du brauchst Hilfe? Gerne kannst Du uns über folgenden E-Mail-Verteiler kontaktieren: <mailto:WebTechnology@DATEV.DE>
