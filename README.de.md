[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Preiskalkulator für individuell bedruckte Etiketten & Parametrisches Kalkulations-Excel-Template
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/328f1d5d-4596-4724-a13a-7e4818e30d4f" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346)
![Category](https://img.shields.io/badge/Tool-Print%20Estimating%20%26%20CPQ-2251FF)

**Ein interaktiver Preiskalkulator für individuell bedruckte Etiketten und ein parametrisches Excel-Template zur Kostenkalkulation. Entwickelt für Etikettenverarbeiter, Kalkulatoren im kommerziellen Druck und Verpackungseinkäufer, um B2B-Angebote automatisiert zu erstellen, mengenabhängige Staffelrabatte zu modellieren, Substratkosten pro Quadratzoll zu berechnen und Preise mit konkurrierenden Druckdienstleistern zu vergleichen — verfügbar als kostenloser Browser-basierter Web-Kalkulator (keine Registrierung erforderlich) und als herunterladbare Microsoft-Excel-Arbeitsmappe.**

> **Zugang zu den Tools für Etikettenpreise und Angebotskalkulation**
>
> - 🌐 **[Kostenlosen Browser-basierten Preiskalkulator für individuelle Etiketten starten](https://hyvoid.github.io/custom-label-pricing-calculator/)** — Führen Sie sofortige Angebotssimulationen durch, testen Sie die Kostensensitivität gegenüber Abmessungen und zeigen Sie Stückpreise an Mengengrenzen direkt im Browser an – ohne Softwareinstallation oder Kontoerstellung.
> - 📥 **[Parametrische Excel-Arbeitsmappe zur Etikettenkalkulation herunterladen (.xlsx)](https://theseusworkshop.com/l/whpeug?utm_source=github&utm_medium=GitHub%20README)** — Erhalten Sie die vollständige Tabellenkalkulationsvorlage für die Offline-Kalkulation von Druckkosten, zentrales CPQ-Parametermanagement, Wettbewerber-Preiskalibrierung und wiederholbare Handelsmargenanalysen.



---

## Zentrale Kalkulationsmetriken für Etiketten und Gelöste Herausforderungen der Druckkalkulation

Statt verstreuter Tabellen strukturiert diese parametrische Preismaschine Ihren Workflow von den Kosten bis zum Angebot in prüfbaren Variablen. So ordnet das Modell häufige **Schmerzpunkte bei der Preisgestaltung individueller Etiketten** automatisierten **Metriken der Druckkalkulation** zu:

| Kommerzieller Schmerzpunkt bei Angeboten | Parametrische Lösung & Preismechanismus | Verfolgte Schlüsselmetriken für Kosten & Marge |
| :--- | :--- | :--- |
| **Dimensionale Preissensitivität & Substratverschnitt** | Berechnet die exakte Etikettenfläche in Quadratzoll aus individuellen Breiten- und Höheneingaben mithilfe eines konfigurierbaren Flächenselastizitätskoeffizienten. | Etikettenfläche ($\text{in}^2$), Substratkosten pro Quadratzoll, dimensional skaliertes Preisfaktor |
| **Unrentable Angebote für Kurzauflagen & Mindestmengen** | Trennt feste Vorstufen-/Druckplatteneinrichtungsgebühren und Mindestmengenzuschläge von variablen Auflag- und Materialkosten. | Basis-Einrichtungsgebühr, Mindestmengenzuschlag (MOC), Verhältnis von Einrichtungs- zu Auflagkosten |
| **Unregelmäßige Mengenstaffeln & Volumenrabattgrenzen** | Modelliert den Stückpreisverfall über 6 anpassbare Volumenstaffeln (von Kurzauflagen bis zu über 10.000 Etiketten) mit automatisierten Monotonieprüfungen. | Gesamtauftragsangebot, Stückpreis pro Etikett ($/unit), Staffelrabatt in Prozent (%) |
| **Blinder Abgleich mit Wettbewerberpreisen** | Vergleicht intern berechnete Angebote mit beobachteten Marktpreisen (z. B. Wizard Labels, Consolidated Label) anhand gewichteter Abweichungsregeln. | Wettbewerberpreisabstand ($ / %), Zielpositionierungsfaktor, Toleranz für Referenzabweichungen |
| **Getrennte Logik von Kosten & Verkaufspreis** | Verknüpft Rohannahmen der Fertigungskosten (MSI, Maschinendurchsatz pro 1.000 Auflage) direkt mit handelsüblichem Aufschlag und Zielpositionierung. | Produktionskosten pro 1.000 Auflagen, Bruttomargenpuffer, kommerzieller Mindestpreis |
| **Gesamtpreisumkehrungen an Staffelgrenzen** | Prüft Grenzübergänge (z. B. 100 vs. 101 Etiketten), um zu verhindern, dass aggressive Volumenrabatte bei größeren Aufträgen zu niedrigeren Gesamtumsätzen führen. | Kennzeichen für Preiskontinuität an Staffelgrenzen, Grenzerlös-Delta an Sprungstellen |

---

## Schritt-für-Schritt-Anleitung: Wie Sie Individuelle Etikettenangebote Erstellen und Preise Kalibrieren

Der Kalkulationsworkflow folgt einer schlanken Configure-Price-Quote-Logik (CPQ): **Kalibrieren Sie Ihre Fertigungskostenparameter einmal, geben Sie die Etikettenspezifikationen des Kunden ein, und erzeugen Sie ein sofortiges, validiertes Handelsangebot.**

### Schritt 1: Produktionskostenparameter & Rabattstaffeln Konfigurieren
Öffnen Sie den dedizierten Tab `Parameter Configuration`, um die Grundökonomie Ihrer Druckerei und Ihre Handelsregeln festzulegen:

- **Fester Auftragsmindestpreis:** Mindestmengenzuschlag (MOC) und Basis-Vorstufen-/Einrichtungsgebühr.
- **Variable Material- & Auflagkosten:** Substratmaterialkosten pro Quadratzoll und Produktionsauflagkosten pro 1.000 Auflage.
- **Skalierungs- & Volumenlogik:** Flächenselastizitätskoeffizient und sechs anpassbare Mengenstaffel-Rabattsätze.
- **Marktpositionierung:** Zielpositionierungsfaktor für den Wettbewerb, Gewichte des Wettbewerbervergleichs, Abweichungstoleranz und Währungssymbol.

*Hinweis: Die Standardwerte sind illustrative Platzhalter. Ersetzen Sie sie durch die verifizierten Maschinenstundensätze Ihrer Druckerei, die Substrat-MSI-Kosten und freigegebene Margenziele, bevor Sie echte Aufträge kalkulieren.*

### Schritt 2: Etikettenabmessungen & Auftragsmenge Eingeben
Navigieren Sie zur Ansicht `Quotation Calculator` und geben Sie die RFQ-Spezifikationen (Angebotsanfrage) des Kunden ein:

| Spezifikationseingabe | Unterstützter Parameterbereich | Kalkulationsfunktion |
| :--- | ---: | :--- |
| **Etikettenbreite** | `0.5 – 24.0 inches` | Steuert die Bahnbreitenausnutzung & die Flächenberechnung in Quadratzoll |
| **Etikettenhöhe** | `0.5 – 12.0 inches` | Bestimmt die Wiederhollänge & den Gesamtsubstratverbrauch |
| **Auftragsmenge** | `1 – 1,000,000 labels` | Aktiviert die Volumenrabattstaffel & amortisiert die Basis-Einrichtungsgebühr |

Die Preismaschine berechnet automatisch die gesamte Etikettenfläche, weist die aktive Volumenstaffel zu und ermittelt sowohl das **Gesamtauftragsangebot** als auch den **Stückpreis pro Etikett**.

### Schritt 3: Stückökonomie & Wettbewerberpreisvergleiche Analysieren
Prüfen Sie das erzeugte Angebotsdashboard, um die wirtschaftliche Tragfähigkeit zu bewerten, bevor Sie das Angebot versenden:

- **Wichtigste Angebotsergebnisse:** Endverkaufspreis des Auftrags, Stückpreis pro Etikett und aktive Rabattstaffel.
- **Wettbewerbsintelligenz:** Direkter Preisabweichungsvergleich gegenüber den konfigurierten Branchenreferenzen (wie Wizard Labels und Consolidated Label).
- **Mengen-Multi-Preismatrix:** Sofortiger Vergleich indikativer Stückpreise über Standardvolumengrenzen, um Vertriebsmitarbeitern beim Up-Selling höherer Mengenstaffeln zu helfen.

### Schritt 4: Preisregeln Auditieren & in die Wiederverwendbare Excel-Vorlage Exportieren
Wenn sich Rohmaterialkosten ändern oder die Marktpositionierung sich verschiebt, aktualisieren Sie Ihre zentralen Annahmen und prüfen Sie das `Model Validation Sheet`, um Folgendes zu verifizieren:
1. **Mengen-Preis-Monotonie:** Bestätigen Sie, dass eine höhere Auftragsmenge niemals zu einem niedrigeren Gesamtauftragspreis führt.
2. **Dimensionale Sensitivität:** Verifizieren Sie, dass die Quadratzoll-Preisskalierung den Realitäten von Stanzform und Materialeinklang entspricht.
3. **Wettbewerber-Abweichungsalarme:** Identifizieren Sie Angebote, die über Ihre akzeptierte Toleranzbandbreite hinaus abweichen.

> 🚀 **Bereit, Ihren Etiketten-Angebotsworkflow zu operationalisieren?** 
> Nach dem Testen schneller Szenarien im **[Kostenlosen Browser-basierten Etiketten-Preiskalkulator](https://hyvoid.github.io/custom-label-pricing-calculator/)** laden Sie die **[Vollständige Parametrische Excel-Preisarbeitsmappe](https://theseusworkshop.com/l/whpeug?utm_source=github&utm_medium=GitHub%20README)** herunter, um Ihre individuellen Maschinensätze zu speichern, proprietäre Wettbewerberpreistabellen abzulegen und wiederholbare Offline-Angebote für Ihr Kalkulationsteam zu erstellen.

---

## Warum Ich Dieses Parametrische Etikettenkalkulationsmodell Gebaut Habe

Im kommerziellen Druck und in der Etikettenverarbeitung ist eine präzise Kalkulation weitaus komplexer als die Multiplikation von `width × height × quantity`.

Ein Kurzauflagen-Auftrag für digitale oder Flexo-Etiketten trägt Vorstufen- und Einrichtungsgebühren, die die Stückkosten dominieren. Ein größeres individuelles Etikett verbraucht mehr selbtklebendes Substrat, doch seine effektiven Kosten pro Quadratzoll skalieren selten linear – bedingt durch Bahnlayout, Stanzform-Verschnitt und Druckmaschinen-Effizienz. Zudem senken Volumenrabatte zwar die Stückkosten bei Langauflagen, aber unkalibrierte Staffelpläne lösen häufig unbeabsichtigte Preisanomalien aus.

### Die Staffelgrenzen-Falle „100 vs. 101 Etiketten“
Betrachten Sie zwei nahezu identische Kunden-RFQs: **100 individuelle Etiketten** gegenüber **101 individuelle Etiketten**.

In einer starren, unvalidierten Lookup-Tabelle kann das Überschreiten der 100er-Schwelle einen steileren Volumenrabatt für die gesamte Bestellung auslösen. Ohne Kontinuitätssicherungen kann der 101er-Auftrag am Ende einen **niedrigeren Gesamtrechnungsbetrag** aufweisen als der 100er-Auftrag. Die Tabellenformeln laufen ohne Syntaxfehler ab – doch das resultierende Handelsangebot vernichtet Marge und verwirrt Käufer.

Dieselbe Anfälligkeit betrifft den **wettbewerbsorientierten Preisabgleich**. Der Versuch, „10 % unter Online-Etikettenwettbewerbern“ zu preisen, schützt die Rentabilität nur, wenn die Referenzspezifikationen Ihren Substratannahmen entsprechen, Ihr Mindestmengenzuschlag intakt bleibt und Ihre Mengenökonomie über alle Staffeln trägt.

Ich habe dieses Werkzeug als **produktifiziertes Preisdenken** entworfen – ein transparentes, prüffähiges Configure-Price-Quote-Framework (CPQ), das drucktechnische Kostentreiber, Volumenrabattierung, Wettbewerberbenchmarking und mathematische Validierungsregeln miteinander verbindet. Es ersetzt nicht das kommerzielle Urteilsvermögen eines erfahrenen Druckkalkulators; stattdessen macht es Kostenannahmen explizit, Berechnungen wiederholbar und Preisgrenzfälle sichtbar, bevor ein Angebot je einen Kunden erreicht.

---

## Manuelle Druckkalkulation vs. Parametrische Etiketten-Preismaschine

| Kalkulations- & Angebotsdimension | Traditionelle Manuelle Tabellen & Ad-Hoc-Angebote | Parametrische Preismaschine für individuelle Etiketten (Dieses Tool) |
| :--- | :--- | :--- |
| **Dimensionale Flächen- & Substratkalkulation** | Kalkulatoren passen Quadratzoll-Sätze pro RFQ manuell an, was zu inkonsistenten Preisen bei übergroßen oder ungewöhnlich geformten Etiketten führt. | Wendet eine einheitliche Quadratzoll-Kostenformel mit konfigurierbarem **Flächenselastizitätskoeffizienten** über alle Etikettenabmessungen an. |
| **Mengengrenzen & Staffelrabatte** | Volumenrabattprozentsätze werden isoliert angepasst, was häufig **klippenartige Gesamtpreisumkehrungen** an Staffelschwellen verursacht (z. B. 500 vs. 501 Einheiten). | Erzwingt eine automatisierte **Validierung der Kontinuität an Staffelgrenzen**, damit größere Etikettenaufträge niemals niedrigere Gesamtumsätze erzeugen. |
| **Einrichtungsgebühren-Amortisation & Stückpreisbildung** | Vertriebsmitarbeiter vergleichen pauschale Gesamtpreise, ohne feste Vorstufen-/Druckplattengebühren von variablen Kosten pro Tausend Auflage zu trennen. | Trennt dynamisch **Basis-Einrichtungsgebühren**, Mindestmengengrenzen und Auflagsätze, um genaue Gesamt- und Stückökonomie pro Etikett anzuzeigen. |
| **Wettbewerber-Preisbenchmarking** | Wettbewerberangebote von Online-Druckereien werden blind als isolierte Ziele abgeglichen – mit Risiko negativer Margen bei Sonderformaten. | Kombiniert Bottom-up-Kostenparameter mit einem **konfigurierbaren Wettbewerbspositionierungsfaktor** und Abweichungstoleranzregeln. |
| **Kalibrierung der Marktintelligenz** | Historische Wettbewerberpreisbeobachtungen liegen in statischen PDFs oder verstreuten E-Mails, was eine systematische Preiskalibrierung unmöglich macht. | Strukturiert Benchmark-Datensätze (z. B. Wizard Labels, Consolidated Label) nach **Breite, Höhe, Menge und beobachtetem Satz** für die Modellabstimmung. |
| **Governance & Audit der Preispolitik** | Die Aktualisierung eines Substrat-MSI-Satzes oder einer Einrichtungsgebühr erfordert die Bearbeitung fragiler Zellformeln über mehrere Tabs – mit stillen Rechenfehlern. | Zentralisiert alle Kostentreiber und Rabattregeln in einem **einzelnen Parameterkonfigurationsblatt** mit automatisierten Diagnoseprüfungen. |

---

## Für Wen Dieses Werkzeug Gebaut Ist: Rollen, Anwendungsfälle & Workflows

Dieser parametrische Preiskalkulator und das Excel-Template wurden für Fachleute in den Ökosystemen Verpackung, kommerzieller Druck und B2B-E-Commerce entwickelt:

- **Hersteller individueller Etiketten & Flexo/Digital-Verarbeiter:** Standardisieren Sie Ihren Inside-Sales- und Kalkulationsworkflow. Nutzen Sie den **Etikettendruck-Kostenschätzer**, um schnell und konsistent Angebote über individuelle Stanzformate und Auflaglängen zu erstellen – ohne Warten auf Senior-Engineering-Reviews bei Routineanfragen.
- **Druckerei-Kalkulatoren & Inside-Sales-Teams:** Eliminieren Sie den manuellen Formelneuaufbau während Live-Kundengesprächen. Nutzen Sie den **interaktiven B2B-Angebotskalkulator**, um Stückpreise sofort über 6 Mengengrenzen zu vergleichen und Käufern die genauen Stückkosteneinsparungen einer größeren Auftragsmenge aufzuzeigen.
- **Preismanager, Vertriebsleiter & Druckereibesitzer:** Zentralisieren Sie Ihre Preisgovernance. Passen Sie Vorstufeneinrichtungsgebühren, Materialkosten pro Quadratzoll, Volumenrabattpläne und Wettbewerbspositionierungsfaktoren aus einer einzigen **CPQ-Parametermanagement-Arbeitsmappe** an – mit Margenwirkungs-Audit vor dem Rollout.
- **Verpackungsbeschaffungsspezialisten & Markeneinkäufer:** Analysieren Sie Lieferantenangebote rückwärts mit einem transparenten **Should-Cost-Modellierungswerkzeug**. Trennen Sie feste Einrichtungsgebühren von variablen Substrat- und Auflagkosten, um faire Mengenstaffeln mit kommerziellen Etikettenlieferanten zu verhandeln.
- **Tabellen-Ingenieure, CPQ-Analysten & Webentwickler:** Untersuchen Sie eine saubere, dokumentierte **parametrische Preisspezifikation**. Nutzen Sie die Validierungsregeln, Elastizitätsformeln und Benchmark-Architektur der Excel-Arbeitsmappe als Blaupause für den Aufbau individueller Web-to-Print-Angebotsmaschinen für Print-on-Demand.

---

## Branchenanwendungsfälle & Nischen-Preisszenarien

Ob Sie eine digitale Boutique-Etikettenpresse betreiben oder einen Online-Web-to-Print-Shop aufbauen – dieses Modell passt sich spezifischen kommerziellen Kalkulationsszenarien an:

### 1. Angebotsmodellierung: Kurzauflagen-Digital vs. Hochvolumen-Flexo
Kalibrieren Sie Ihre **Basis-Einrichtungsgebühr** und Ihren **Auflagsatz pro 1.000 Auflage**, um den ökonomischen Schnittpunkt zwischen Kurzauflagen-Digital-Etikettendruck (niedrige Einrichtung, höhere Stückauflagkosten) und Langauflagen-Flexodruck (höhere Platten-/Vorstufeneinrichtung, steiler Stückkostenverfall ab 10.000+ Etiketten) abzubilden.

### 2. Prototyping Sofortiger B2B-Web-to-Print-Angebote
Bevor Sie Tausende Dollar in individuelle ERP- oder E-Commerce-Angebots-Plugins investieren, nutzen Sie den **Browser-basierten Kalkulator und das Excel-Modell** als Sandkasten. Testen Sie, wie sich Ihre Flächenselastizitätskoeffizienten und Rabattstaffeln an Grenzabmessungen verhalten (`0.5" × 0.5"` Mikroetiketten bis hin zu `24" × 12"` Zylindernetiketten).

### 3. Wettbewerbsorientierte Preiskalibrierung gegenüber Online-Etikettendruckereien
Hören Sie auf zu raten, wie Online-Wettbewerber ihre Kataloge preisen. Protokollieren Sie beobachtete Marktangebote nach Abmessung und Menge, legen Sie Ihren **Zielpositionierungsfaktor für den Wettbewerb** fest (z. B. Angleichung innerhalb von $\pm 5\%$ oder Unterbieten um $8\%$), und lassen Sie das Validierungsblatt exakt hervorheben, welche Etikettengrößen und Auflaglängen zu Ihrer Kostenstruktur passen.

---

### Geltungsbereich & Operativer Haftungsausschluss
*Dieses Werkzeug ist ein parametrisches Entscheidungsunterstützungsmodell und ein kommerzieller Angebotskalkulator – kein Shopfloor-ERP, kein Produktionsplanungssystem und kein Live-Scraper für Wettbewerberwebsites. Es ruft keine Echtzeit-Substrat-MSI-Preise, Maschinendurchsätze, Stanzverschnittprozentsätze oder Nettogewinnzahlen des Unternehmens ab. Nutzer müssen den Konfigurationstab mit eigenen verifizierten Fertigungskostenstudien und Marktbeobachtungen befüllen.*

## Über

Ich baue leichte analytische Werkzeuge für wiederkehrende Geschäftsentscheidungen, die schwierig werden, wenn zu viele Annahmen, Zahlen und Ausnahmen über verschiedene Orte verstreut sind.

Die zentrale Frage ist pragmatisch: **Welche Informationen müssen an einem Ort zusammenkommen, um die nächste Entscheidung konsistenter zu machen?**

Die Parametrische Wettbewerbs-Preismaschine wendet diesen Ansatz auf die Preisgestaltung individueller Etiketten an. Sie vereint Auftragsspezifikationen, Produktionskostenannahmen, Mengenrabatte, Wettbewerbsbenchmarks und Preisvalidierung in einem wiederverwendbaren Framework. Ziel ist es, eine komplexe Preisentscheidung leichter überprüfbar und wartbar zu machen – ohne eine vollständige Softwareimplementierung zu erfordern.

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitwirkende</summary>

### Arbeitsmappen-Architektur

Die Arbeitsmappe trennt den benutzerorientierten Angebotsworkflow von Preisparametern, Berechnungslogik, Wettbewerberdaten und Modellvalidierung. Diese Trennung erleichtert die Prüfung und Wartung von Preisannahmen, ohne dass Routinebenutzer Formeln bearbeiten müssen.

| Arbeitsblatt | Zuständigkeit | Primäre Eingaben | Hauptausgaben |
|---|---|---|---|
| `01_报价计算器` — Angebotskalkulator | Front-End-Angebotsworkflow | Etikettenbreite, -höhe und Auftragsmenge | Gesamtpreis, Stückpreis, anwendbare Mengenstaffel, Wettbewerbervergleich |
| `02_参数配置表` — Parameterkonfiguration | Single Source of Truth für Preisannahmen | Kostensätze, Einrichtungskosten, Flächenselastizität, Staffelgrenzen, Staffelrabatte, Wettbewerbs-Zielfaktor | Geteilte Parameter, die von Preis- und Angebotslogik genutzt werden |
| `03_定价引擎` — Preismaschine | Kernberechnungsschicht | Auftragsspezifikationen und konfigurierte Parameter | Engineering-Kosten, mengenadjustierter Preis, kalibrierter Preis, Endpreis |
| `04_竞品对标库` — Wettbewerber-Benchmark | Benchmark-Datenverwaltung | Referenzpreise von Wizard Labels und Consolidated Label | Vergleichspreisreferenzen und Kalibrierungseingaben für das Modell |
| `05_模型压力测试` — Modellvalidierung | Grenz- und Konsistenzprüfungen | Testabmessungen, Mengen, Staffelgrenzen und konfigurierte Annahmen | Validierungskennzahlen für Preismonotonie, Stückpreisverhalten und Benchmark-Passung |

#### Berechnung und Datenfluss

```text
Parameter Configuration
          │
          ├───────────────┐
          ▼               ▼
Quotation Calculator   Pricing Engine ◄── Competitor Benchmark
          │               ▲
          └───────────────┘
                          │
                          ▼
                    Model Validation
                          │
                          ▼
                 Review before quoting
```

Der vorgesehene Fluss ist unidirektional: Konfigurierte Annahmen speisen das Berechnungsmodell, Auftragsspezifikationen lösen die Berechnungen aus, Benchmark-Einträge liefern Kalibrierungsreferenzen, und Validierungsprüfungen helfen, potenzielle Modellprobleme zu identifizieren.

Das Konfigurationsblatt fungiert als **Single Source of Truth (SSOT)**. Die Preislogik sollte auf geteilte Parameter verweisen, statt Kostensätze oder Rabatannahmen über mehrere Formeln hinweg zu duplizieren. Dies verringert das Risiko inkonsistenter Preise nach einem Strategiewechsel.

Das Benchmark-Blatt ist ein gepflegter Referenzdatensatz, keine Live-Verbindung zu Wettbewerberwebsites. Sein Nutzen hängt von der Genauigkeit, Aktualität und Vergleichbarkeit der erfassten Angebote ab.

#### Parametermanagement

Die Konfigurationsschicht zentralisiert die Annahmen, die das Ergebnis beeinflussen, darunter:

- Währungssymbol und Darstellungseinstellungen.
- Einrichtungs- und Mindestgebührenannahmen.
- Flächenbasierter Kostensatz und Flächenselastizität.
- Produktionsauflagsatz-Annahmen.
- Sechs Mengenstaffeln, deren Grenzen und zugehörige Rabattsätze.
- Der Zielpositionierungsfaktor für den Wettbewerb.
- Interne Prüfungen der Staffelkonfiguration und des Mengenverhaltens.

Das Ändern des Zielpositionierungsfaktors kann das modellierte Preisniveau relativ zur Engineering-Kostenbasis verschieben. Das darf nicht als Beweis dafür gelten, dass das Geschäft nachhaltig zu diesem Preis verkaufen kann: Tatsächliche Produktionskosten, Margenanforderungen und kommerzielle Restriktionen müssen weiterhin geprüft werden.

### Drei Fallen, in die Sogar Erfahrene Preisteams Tappen

#### 1. Die Etikettenfläche als das gesamte Kostenmodell behandeln

Zwei Etiketten mit gleicher Fläche haben bei unterschiedlichen Auftragsmengen nicht zwangsläufig dieselben handelsrelevanten Auswirkungen. Ein Angebot kann Einrichtungskosten, flächensensitive Materialkosten und Produktionsauflaggebühren enthalten. Eine einfache Formel aus Fläche mal Menge kann verschleiern, wie sich fixe und variable Kosten verhalten.

**Designantwort:** Trennen Sie Einrichtungskosten, flächenbezogene Kosten und auflagbezogene Kosten, bevor Sie Mengenstaffel-Adjustierungen anwenden. Die Parameter bleiben editierbar, damit das Modell an die tatsächliche Produktionsökonomie des Geschäfts kalibriert werden kann.

#### 2. Einen niedrigeren Stückpreis mit einem gültigen Mengenrabatt verwechseln

Ein größerer Auftrag verteilt Fixkosten normalerweise auf mehr Einheiten und kann einen niedrigeren Stückpreis rechtfertigen. Aber eine diskrete Rabatttabelle kann an einer Staffelgrenze unbeabsichtigtes Verhalten einführen. Beispielsweise könnte der berechnete Gesamtbetrag für 101 Etiketten unter dem für 100 Etiketten liegen, wenn der neue Staffelrabatt zu aggressiv ist.

**Designantwort:** Prüfen Sie das Gesamt- und Stückpreisverhalten rund um Staffelgrenzen. Das Modell enthält einen Grenzschutzmechanismus, der Gesamtpreisumkehrungen beim Übergang in eine höhere Mengenstaffel verhindern soll. Die Validierungsprüfungen der Arbeitsmappe sollten nach Änderungen an Staffellimits oder Rabatten überprüft werden.

#### 3. Wettbewerberpreise als Ersatz für kostenbasierte Preisgestaltung behandeln

Ein Wettbewerberangebot ist nützlicher Marktbeweis, offenbart aber weder die Produktionskosten des Wettbewerbers noch seine Marge, seinen Serviceumfang, seine Materialspezifikation oder seine Handelsbedingungen. Ein Referenzpreis ohne Verständnis dieser Unterschiede abzugleichen kann ein optisch attraktives Angebot erzeugen, das wirtschaftlich nicht tragfähig ist.

**Designantwort:** Etablieren Sie zuerst eine interne Engineering-Preiskurve und passen Sie dann das modellierte Ergebnis mit einem konfigurierbaren Wettbewerbspositionierungsfaktor an. Vergleichen Sie nur Angebote mit ausreichend vergleichbaren Spezifikationen, Mengen und Bedingungen. Benchmark-Daten sollten aktualisiert und geprüft werden, bevor sie für Geschäftsentscheidungen genutzt werden.

### Beispielszenario

Betrachten Sie einen Kunden, der individuell bedruckte Etiketten mit folgenden Spezifikationen anfordert:

| Eingabe | Beispielwert |
|---|---:|
| Etikettenbreite | 4 Zoll |
| Etikettenhöhe | 6 Zoll |
| Auftragsmenge | 2.500 Etiketten |
| Wettbewerbs-Zielpositionierungsfaktor | 0.90 |
| Mengenstaffeln | Sechs konfigurierte Staffeln |

Abmessungen und Menge bestimmen die physische Arbeitslast und die anwendbare Mengenstaffel. Die Preismaschine kombiniert dann die konfigurierten Einrichtungskosten, die flächenbezogenen Kosten, die Auflagsatzannahme, den Staffelrabatt und den Wettbewerbspositionierungsfaktor.

Der Angebotsworkflow ist so gestaltet, dass der resultierende Gesamtpreis und Stückpreis zusammen mit der anwendbaren Staffel und der verfügbaren Wettbewerbsreferenz dargestellt werden. Der Vertriebsbenutzer kann dann bewerten, ob der vorgeschlagene Preis zur beabsichtigten Positionierung passt und ob eine größere Menge einen aussagekräftigen Stückpreisvorteil bietet.

Ein sinnvoller Folgeschritt ist der Vergleich der angeforderten Menge mit der nächsthöheren konfigurierten Staffel. Dies hilft dem Verkäufer, den Trade-off zwischen höherer Auftragsbindung und niedrigerem Stückpreis zu diskutieren, statt einen willkürlichen Rabatt anzubieten.

Das Beispiel beschreibt den Berechnungsworkflow, kein verifiziertes Marktangebot. Tatsächliche Preise hängen von den konfigurierten Annahmen der Arbeitsmappe und der Qualität der Benchmark-Einträge ab. Die illustrativen Werte in dieser README-Datei dürfen nicht als aktuelle Preise von Wizard Labels oder Consolidated Label interpretiert werden.

### Implementierungshinweise

#### Formelarchitektur

Das Modell ist in distincte Berechnungsstufen gegliedert:

1. **Engineering-Basislinie:** Berechnung des modellierten Auftragspreises aus Einrichtungskosten, flächensensitiven Kosten und auflagbezogenen Kosten.
2. **Mengenstaffel-Adjustierung:** Anwendung des Rabatts, der dem konfigurierten Mengenbereich zugeordnet ist.
3. **Wettbewerbliche Kalibrierung:** Anwendung des Zielpositionierungsfaktors auf den berechneten Preis.
4. **Grenzschutz:** Vergleich des Kandidatenpreises mit der anwendbaren Referenz der vorherigen Staffelgrenze und der konfigurierten Mindestpreisbeschränkung.
5. **Validierung:** Prüfung des Mengenverhaltens und der Modellchecks, bevor das Ergebnis für Angebote herangezogen wird.

Diese stufenweise Architektur erleichtert das Nachvollziehen, warum sich ein Preis ändert, wenn eine Annahme aktualisiert wird. Sie bietet auch einen klareren Migrationspfad, falls die Berechnungslogik später in einer Webanwendung oder einer anderen Programmierumgebung implementiert wird.

#### Excel-Kompatibilität

Die Arbeitsmappe ist für Microsoft 365 oder Excel 2021 und höher ausgelegt, einschließlich unterstützter Browser-basierter Excel-Umgebungen. Sie stützt sich auf moderne Formelfunktionen wie `LET`, `LAMBDA`, `MAP`, `XLOOKUP`, `FILTER`, `VSTACK`, `TAKE` und `DROP`.

Ältere Excel-Versionen, die diese Funktionen nicht unterstützen, können Formelfehler zurückgeben oder die Arbeitsmappe nicht korrekt berechnen. Die Implementierung ist auf native Excel-Formeln ausgelegt und erfordert keine VBA-Makros.

#### Operative Grenzen

- **Benchmark-Pflege:** Wettbewerberpreise müssen vom Bediener eingepflegt und gepflegt werden; das Modell stellt keinen Live-Feed für Wettbewerberpreise bereit.
- **Parametereigentümerschaft:** Weisen Sie die Verantwortung für die Freigabe von Kostensätzen, Staffelschwellen, Rabatten und Wettbewerbspositionierungsänderungen zu.
- **Gleichzeitige Nutzung:** Der Front-End-Kalkulator verwendet gemeinsame Eingabezellen. Mehrere Benutzer, die denselben Kalkulator gleichzeitig bearbeiten, können sich gegenseitig die Eingaben überschreiben; verwenden Sie einen kontrollierten Angebotsworkflow für gemeinsame Dateien.
- **Modellskalierung:** Der Quellentwurf empfiehlt, den Datensatz der Preismaschine auf etwa 100.000 Zeilen zu begrenzen und größere Datensätze zu archivieren oder in Batches zu verarbeiten. Die tatsächliche Reaktionsfähigkeit hängt vom Arbeitsmappendesign, der Hardware und der Formelkomplexität ab.
- **Produktionsvalidierung:** Testen Sie vor dem operativen Einsatz das Modell mit repräsentativen Aufträgen, bestätigten Kostenannahmen, aktuellen vergleichbaren Benchmark-Einträgen sowie den eigenen Margen- und Mindestpreisanforderungen des Geschäfts.

Die Formeln der Arbeitsmappe können als Spezifikation für einen zukünftigen Python-, Node.js- oder PHP-Preisdienst dienen, aber jede Migration sollte Formeläquivalenz, Eingabevalidierung, Grenzverhalten und Ausgaben vor dem Deployment unabhängig verifizieren.

</details>

### Formelreferenz

Die folgenden Formeln beschreiben die Berechnungsstufen des Modells. Exakte Zellbezüge und Formelimplementierungen sollten gegen die jeweils verteilte Arbeitsmappenversion geprüft werden.

<details>
<summary>1. Flächenbasierter Kosten- und Dimensionssensitivität</summary>

Die Etikettenfläche wird aus Breite und Höhe berechnet:

\[
A = W \times H
\]

wobei:

- \(A\) = Etikettenfläche in Quadratzoll.
- \(W\) = Etikettenbreite in Zoll.
- \(H\) = Etikettenhöhe in Zoll.

Das Modell verwendet eine flächenbasierte Potenzbeziehung zur Darstellung der Dimensionssensitivität. In allgemeiner Form:

\[
C_{\text{area}} = r_A \times A^\alpha
\]

wobei:

- \(r_A\) = konfigurierter flächenbezogener Kostenkoeffizient.
- \(\alpha\) = Flächenselastizitätsparameter.
- \(C_{\text{area}}\) = modellierte flächenbezogene Kosten.

Bei \(\alpha=1\) skaliert die Flächenkomponente proportional mit der Fläche. Ein anderer Wert ändert die modellierte Größensensitivität. Der Parameter sollte anhand des tatsächlichen Kostenverhaltens des Geschäfts kalibriert werden – nicht allein gewählt werden, um einen Wettbewerberpreis zu matchen.

</details>

<details>
<summary>2. Produktionskosten und Einrichtungskosten</summary>

Die Engineering-Basislinie kombiniert die fixen und variablen Kostenkomponenten des Modells:

\[
C_{\text{base}} =
C_{\text{setup}} +
C_{\text{area}} +
C_{\text{run}}
\]

wobei:

- \(C_{\text{setup}}\) die konfigurierten einrichtungsbezogenen Kosten darstellt.
- \(C_{\text{area}}\) die dimensionssensitive Komponente darstellt.
- \(C_{\text{run}}\) die auflagbezogenen Produktionskosten gemäß den konfigurierten Annahmen der Arbeitsmappe darstellt.

Die genaue Definition der auflagbezogenen Komponente hängt von den Satz- und Mengenkonventionen der Arbeitsmappe ab. Bevor Sie das Modell für kommerzielle Preisgestaltung nutzen, bestätigen Sie, ob jede Eingabe einen Stück-, Flächen-, Auflag- oder Festbetrag darstellt. Das Vermischen dieser Basen kann das Ergebnis erheblich verzerren.

</details>

<details>
<summary>3. Mengenstaffel-Preisgestaltung</summary>

Das Modell verwendet sechs konfigurierbare Mengenstaffeln. Jede Staffel hat eine Mengengrenze und eine zugehörige Rabatannahme.

Eine vereinfachte Darstellung der Staffel-Adjustierung ist:

\[
P_{\text{tier}} = P_{\text{base}} \times (1-d_q)
\]

wobei:

- \(P_{\text{base}}\) der anwendbare Preis vor der Staffel ist.
- \(d_q\) der konfigurierte Rabattsatz für die gewählte Mengenstaffel ist.
- \(P_{\text{tier}}\) der Preis nach der Staffel-Adjustierung ist.

Dieser Ausdruck veranschaulicht den Rabattmechanismus; er ist kein Ersatz für die vollständige Formelimplementierung der Arbeitsmappe. Die exakte Preisbasis, auf die der Rabatt angewendet wird, muss mit der tatsächlichen Arbeitsmappe übereinstimmen.

Mengenstaffelgrenzen und Rabattsätze sollten gemeinsam geprüft werden. Ein Rabattplan, der bei der Betrachtung einzelner Sätze vernünftig erscheint, kann dennoch an einer Grenze eine unerwünschte Gesamtpreisunstetigkeit erzeugen.

</details>

<details>
<summary>4. Wettbewerbspositionierungsfaktor</summary>

Das Modell enthält einen konfigurierbaren Wettbewerbspositionierungsfaktor, um den modellierten Preis relativ zu seiner internen Basislinie anzupassen.

Eine vereinfachte Darstellung ist:

\[
P_{\text{positioned}} =
P_{\text{tier}} \times k_c
\]

wobei:

- \(P_{\text{tier}}\) der staffeladjustierte Preis ist.
- \(k_c\) der konfigurierte Wettbewerbspositionierungsfaktor ist.
- \(P_{\text{positioned}}\) der Preis nach der wettbewerblichen Kalibrierung ist.

Ein Faktor von \(0.90\) bedeutet beispielsweise eine 10%ige Reduktion relativ zu dem Preis, auf den der Faktor angewendet wird. Dies garantiert keinen 10%-Vorteil gegenüber einem Wettbewerber: Diese Schlussfolgerung hängt von vergleichbaren Benchmark-Daten und der tatsächlichen Preisbasis des Modells ab.

Die wettbewerbliche Kalibrierung darf Mindestpreis-, Margen- oder Kostendeckungsanforderungen nicht außer Kraft setzen.

</details>

<details>
<summary>5. Mengengrenzschutz</summary>

Das Modell enthält einen Grenzschutzmechanismus, der verhindern soll, dass eine höhere Auftragsmenge an einem Staffelübergang einen unerwartet niedrigeren Gesamtpreis erzeugt.

Auf hoher Ebene bewertet das Modell den Kandidatenpreis vor der Darstellung des Ergebnisses gegen relevante Grenzbeschränkungen. Das gewünschte Verhalten ist, dass eine Mengenerhöhung keine unbeabsichtigte Umkehrung des Gesamtauftragspreises erzeugt.

Die genaue Schutzformel und ihre Interaktion mit Mindestpreisbeschränkungen müssen gegen die tatsächlichen Formeln der Arbeitsmappe verifiziert werden. Eine allgemeine Monotonieprüfung lässt sich ausdrücken als:

\[
P_{\text{total}}(q+1) \geq P_{\text{total}}(q)
\]

wobei \(q\) die Auftragsmenge ist. Dies ist ein Validierungsziel, keine Garantie, dass jede denkbare Parameterkonfiguration es automatisch erfüllt.

</details>

<details>
<summary>6. Stückpreis und Wettbewerbervergleich</summary>

Der Stückpreis wird wie folgt berechnet:

\[
P_{\text{unit}} = \frac{P_{\text{total}}}{q}
\]

wobei \(P_{\text{total}}\) der Auftragsgesamtbetrag und \(q\) die Auftragsmenge ist.

Ein sinkender Stückpreis bei steigender Menge ist oft mit Einrichtungskostenabsorption und Mengenrabatten vereinbar, sollte aber validiert statt angenommen werden. Wettbewerbervergleiche erfordern ebenfalls äquivalente Spezifikationen, Mengen, Materialien, Druckanforderungen und Handelsbedingungen.

Die Benchmark-Einträge für Wizard Labels und Consolidated Label sind in der Arbeitsmappe gepflegte Referenzeingaben. Sie sollten nicht als aktuelle Live-Preise interpretiert werden, sofern sie nicht unabhängig verifiziert wurden.

</details>

### Validierungsregeln

Die Arbeitsmappe enthält ein Modell-Stresstestblatt, das repräsentative Szenarien und Preisverhalten prüfen soll. Der Quellentwurf beschreibt 36 Testfälle. Tatsächliche Testergebnisse sollten in der freigegebenen Arbeitsmappe bestätigt werden, statt allein aus der Existenz des Testblatts abgeleitet zu werden.

| Validierungsbereich | Was zu Prüfen Ist | Erwartetes Verhalten | Maßnahme bei Validierungsfehler |
|---|---|---|---|
| Dimensionsgrenzen | Breite und Höhe innerhalb der unterstützten Eingabebereiche | Akzeptierte Werte bleiben innerhalb der konfigurierten Grenzen | Eingabe korrigieren oder unterstützten Bereich prüfen |
| Mengengrenzen | Menge von 1 bis 1.000.000 | Gültige Mengen werden dem vorgesehenen Berechnungspfad zugeordnet | Menge korrigieren oder Eingabevalidierung prüfen |
| Staffelkonfiguration | Sechs Staffeln mit gültigen, geordneten Grenzen | Jede unterstützte Menge wird der vorgesehenen Staffel zugeordnet | Fehlende, überlappende oder inkonsistente Grenzen auflösen |
| Staffelrabattsätze | Rabattwerte numerisch und kommerziell freigegeben | Sätze folgen der vorgesehenen Preispolitik | Annahmen prüfen und Stresstests erneut ausführen |
| Gesamtpreismonotonie | Adjazente Mengen vergleichen, besonders an Staffelgrenzen | Keine unbeabsichtigte Gesamtpreisumkehrung | Rabattsätze und Grenzschutzlogik inspizieren |
| Stückpreisverhalten | Stückpreise über Mengenniveaus vergleichen | Änderungen entsprechen der vorgesehenen Mengenstrategie | Staffelrabatte, Einrichtungskostenbehandlung und Formelbezüge prüfen |
| Kostenintegrität | Einrichtungs-, Flächen- und auflagbezogene Kostenannahmen prüfen | Kostenkomponenten verwenden konsistente Einheiten und Basen | Parameterdefinitionen und Quelldaten korrigieren |
| Wettbewerbervergleichbarkeit | Abmessungen, Mengen, Spezifikationen und Angebotsdaten prüfen | Vergleiche verwenden ausreichend äquivalente Angebote | Nicht vergleichbare Benchmark-Einträge aktualisieren oder ausschließen |
| Mindestpreisbeschränkungen | Niedrige Mengen und aggressive Wettbewerbsfaktoren testen | Preise bleiben innerhalb der konfigurierten kommerziellen Beschränkungen | Mindestpreislogik und Positionierungsannahmen prüfen |
| Formelintegrität | Formelausgaben nach Parameteränderungen prüfen | Berechnungen bleiben gültig und mit der Konfigurationsquelle verknüpft | Formelfehler, Bezüge und Excel-Kompatibilität inspizieren |
| Stresstestergebnisse | Alle konfigurierten Testszenarien prüfen | Ergebnisse erfüllen die dokumentierten Abnahmekriterien des Modells | Fehler vor dem operativen Release untersuchen |

#### Empfohlene Release-Prüfungen

Vor der Verteilung der Arbeitsmappe:

1. Öffnen Sie sie in einer unterstützten Excel-Version und bestätigen Sie, dass alle modernen Formelfunktionen korrekt berechnen.
2. Testen Sie minimale und maximale Abmessungen und Mengen.
3. Testen Sie Mengen unmittelbar unterhalb, an und oberhalb jeder Staffelgrenze.
4. Ändern Sie einen repräsentativen Kostenparameter und bestätigen Sie, dass abhängige Ausgaben wie erwartet reagieren.
5. Verifizieren Sie Wettbewerberreferenzeinträge gegen aktuelle, vergleichbare Angebote.
6. Prüfen Sie alle 36 konfigurierten Stresstestfälle und dokumentieren Sie die tatsächlichen Ergebnisse.
7. Bestätigen Sie, dass Eingabehinweise, Formelschutz und Ausgabebezeichnungen der Arbeitsmappe der freigegebenen Implementierung entsprechen.

</details>

## Geschäftslogik & Methodik

Die Preisgestaltung individueller Etiketten ist ein Abwägungsproblem zwischen Produktionsökonomie, Auftragsgröße und Marktpositionierung. Ein Preis, der nur die physische Fläche des Etiketts widerspiegelt, kann die Einrichtungs- und Produktionskosten übersehen. Ein Preis, der sich nur auf das Angebot eines Wettbewerbers stützt, kann Unterschiede bei Spezifikationen, Serviceumfang und der eigenen Kostenstruktur des Verkäufers übersehen.

Dieses Toolkit trennt diese Entscheidungen in eine wiederholbare Sequenz. Zuerst legen Etikettenabmessungen und Auftragsmenge die zu preisenden Spezifikationen fest. Anschließend erzeugen konfigurierbare Produktionsannahmen eine interne kostenbasierte Referenz. Mengenstaffeln drücken dann die beabsichtigte Ökonomie größerer Aufträge aus. Schließlich liefern Wettbewerbsbenchmarks den Marktkontext, um zu bewerten, ob der vorgeschlagene Preis angemessen positioniert ist.

Die Trennung ist wichtig, weil sich diese Eingaben aus unterschiedlichen Gründen ändern. Produktionskosten können sich ändern, wenn Material- oder Betriebsannahmen sich ändern. Mengenrabatte spiegeln eine kommerzielle Politik wider. Die Wettbewerbspositionierung reagiert auf Marktbeweise. Sie getrennt zu halten erleichtert es zu identifizieren, welche Entscheidung eine Preisänderung verursacht hat und ob diese Änderung kommerziell akzeptabel bleibt.

Das Modell behandelt auch Preiskonsistenz als Teil des Entscheidungsprozesses. Ein Rabattplan sollte keine unbeabsichtigte Gesamtpreisumkehrung erzeugen, nur weil ein Auftrag eine Staffelgrenze überschreitet. Grenztests helfen, diese Probleme aufzudecken, bevor sie in Kundenangeboten auftauchen.

Das Ergebnis ist keine automatische Garantie für den besten Preis. Es ist ein strukturierter Weg, Preisannahmen sichtbar zu machen, Szenarien konsistent zu vergleichen und prüfungsbedürftige Fälle zu identifizieren. Die Qualität seiner Entscheidungen hängt von der Qualität der Kostenannahmen, Benchmark-Daten und der vom Unternehmen durchgeführten Validierung ab.

## Weitere Tools Dieser Serie

Entdecken Sie weitere leichte Werkzeuge zur Geschäftsentscheidungsunterstützung von Theseus Workshop in den GitHub-Repositorys des Projekts. Jedes Tool konzentriert sich auf eine bestimmte wiederkehrende operative oder finanzielle Entscheidung.

## Lizenz

Dieses Projekt ist unter der Apache License 2.0 lizenziert. Den vollständigen Lizenztext finden Sie in der Datei `LICENSE`.
