[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Prijscalculator voor Gepersonaliseerde Bedrukte Etiketten & Parametrisch Excel-sjabloon voor Kostenschatting
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/328f1d5d-4596-4724-a13a-7e4818e30d4f" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
![Platform](https://img.shields.io/badge/Platform-Browser%20%7C%20Excel-217346)
![Category](https://img.shields.io/badge/Tool-Print%20Estimating%20%26%20CPQ-2251FF)

**Een interactieve prijscalculator voor gepersonaliseerde bedrukte etiketten en een parametrisch Excel-sjabloon voor kostenraming. Ontworpen voor etikettenverwerkers, calculatoren in de commerciële drukkerij en verpakkingsinkopers om B2B-offertes geautomatiseerd op te stellen, kwantumstaffelkortingen te modelleren, substratkosten per vierkante inch te berekenen en prijzen te vergelijken met concurrerende drukkerijen — beschikbaar als gratis webcalculator in de browser (geen registratie vereist) en als downloadbaar Microsoft Excel-werkboek.**

> **Toegang tot de tools voor etikettenprijzen en offerteopmaak**
>
> - 🌐 **[Open de gratis webgebaseerde prijscalculator voor gepersonaliseerde etiketten](https://hyvoid.github.io/custom-label-pricing-calculator/)** — Voer direct offerte-simulaties uit, test de kostengevoeligheid voor afmetingen en bekijk stukprijzen bij kwantumgrenzen rechtstreeks in je browser, zonder software te installeren of een account aan te maken.
> - 📥 **[Download het parametrische Excel-werkboek voor etikettenraming (.xlsx)](https://theseusworkshop.com/l/whpeug?utm_source=github&utm_medium=GitHub%20README)** — Ontvang de volledige spreadsheet-sjabloon voor offline drukkostenraming, centraal CPQ-parameterbeheer, kalibratie van concurrentieprijzen en herhaalbare analyse van commerciële marges.



---

## Kernmetriken voor Etikettenoffertes & Opgeloste Uitdagingen in Drukkostenraming

In plaats van verspreide spreadsheets te beheren, structureert deze parametrische prijsmachine je workflow van kosten tot offerte in controleerbare variabelen. Zo koppelt het model veelvoorkomende **pijnpunten in de prijsstelling van gepersonaliseerde etiketten** aan geautomatiseerde **metrieken voor drukraming**:

| Commercieel Pijnpunt bij Offertes | Parametrische Oplossing & Prijsmechanisme | Gevolgde Kernmetrieken voor Kosten & Marge |
| :--- | :--- | :--- |
| **Dimensionale Prijsgevoeligheid & Substratverspilling** | Berekent de exacte etikettenoppervlakte in vierkante inch op basis van aangepaste breedte- en hoogteinvoeren met een configureerbare oppervlakte-elasticiteitscoëfficiënt. | Etikettenoppervlakte ($\text{in}^2$), substratkosten per vierkante inch, dimensionale prijsschaalfactor |
| **Onrendabele Offertes voor Korte Runs & Minimale Bestellingen** | Scheidt vaste prepress-/drukplaat-opstartkosten en minimumafname-toeslagen van variabele druk- en materiaalkosten. | Basisopstartkosten, minimumafname-toeslag (MOC), verhouding opstart- naar drukkosten |
| **Onregelmatige Kwantumstaffels & Volume­kortingsgrenzen** | Modelleert het verval van de stukprijs over 6 aanpasbare volumestaffels (van korte runs tot meer dan 10.000 etiketten) met automatische monotoniecontroles. | Totaalorderprijs, stukprijs per etiket ($/unit), staffelkortingspercentage (%) |
| **Blind Afstemmen op Concurrentieprijzen** | Vergelijkt intern berekende offertes met waargenomen markttarieven (bijv. Wizard Labels, Consolidated Label) met gewogen afwijkingsregels. | Concurrentieprijsverschil ($ / %), doelpositioneringsfactor, tolerantie voor referentieafwijking |
| **Verbroken Logica tussen Kost & Verkoopprijs** | Koppelt ruwe productiekostenveronderstellingen (MSI, machineprintsnelheid per 1.000 afdrukken) direct aan commerciële opslag en doelpositionering. | Productiekosten per 1.000 afdrukken, brutomargebuffer, commerciële minimumprijs |
| **Totale Prijsomkeringen bij Staffelgrenzen** | Controleert grensovergangen (bijv. 100 versus 101 etiketten) om te voorkomen dat agressieve volumekortingen leiden tot lagere totale omzet bij grotere bestellingen. | Indicator voor prijscontinuïteit bij staffelgrenzen, marginale omzetdelta bij sprongpunten |

---

## Stap-voor-Stap Handleiding: Hoe Je Gepersonaliseerde Etikettenoffertes Opstelt & Prijzen Kalibreert

De ramingworkflow volgt een gestroomlijnde Configure-Price-Quote (CPQ)-logica: **kalibreer je productiekostenparameters eenmalig, voer de etikettspecificaties van de klant in en genereer direct een gevalideerde commerciële offerte.**

### Stap 1: Productiekostenparameters & Kortingsstaffels Configureren
Open het speciale tabblad `Parameter Configuration` om de basiseconomie van je drukkerij en commerciële regels vast te leggen:

- **Vaste orderondergrens:** minimumafname-toeslag (MOC) en basisprepress-/opstartkosten.
- **Variabele materiaal- & runcosten:** substratmateriaalkosten per vierkante inch en productierunkosten per 1.000 afdrukken.
- **Schaal- & volumelogica:** oppervlakte-elasticiteitscoëfficiënt en zes aanpasbare kortingspercentages per kwantumstaffel.
- **Marktpositionering:** doelpositioneringsfactor voor concurrentie, wegingsfactoren voor concurrentievergelijking, afwijkingstolerantie en valutasymbool.

*Noot: De standaardwaarden zijn illustratieve plaatshouders. Vervang ze door de geverifieerde machine-uurtarieven van je drukkerij, de substrat-MSI-kosten en goedgekeurde marge-doelstellingen voordat je echte opdrachten offertueert.*

### Stap 2: Etikettdimensies & Bestelhoeveelheid Invoeren
Ga naar de weergave `Quotation Calculator` en voer de RFQ-specificaties (Request for Quotation) van de klant in:

| Specificatie-invoer | Ondersteund Parameterbereik | Ramingsfunctie |
| :--- | ---: | :--- |
| **Etikettbreedte** | `0.5 – 24.0 inches` | Bepaalt het baanbreedtegebruik & de oppervlakteberekening in vierkante inch |
| **Etiketthoogte** | `0.5 – 12.0 inches` | Bepaalt de herhaallengte & het totale substratverbruik |
| **Bestelhoeveelheid** | `1 – 1,000,000 labels` | Activeert de volumekortingsstaffel & amortiseert de basisopstartkosten |

De prijsmachine berekent automatisch de totale etikettenoppervlakte, wijst de actieve volumestaffel toe en berekent zowel de **totale orderprijs** als de **stukprijs per etiket**.

### Stap 3: Stukeconomie & Concurrentieprijsbenchmarks Analyseren
Bekijk het gegenereerde offerte-dashboard om de commerciële levensvatbaarheid te beoordelen voordat je het voorstel verstuurt:

- **Belangrijkste offerteaangeduidingen:** uiteindelijke verkoopprijs van de order, stukprijs per etiket en actieve kortingsstaffel.
- **Concurrentie-informatie:** directe prijsvariantvergelijking met de geconfigureerde sectorbenchmarks (zoals Wizard Labels en Consolidated Label).
- **Prijsmatrix voor meerdere hoeveelheden:** directe vergelijking van indicatieve stukprijzen over standaardvolumegrenzen om vertegenwoordigers te helpen klanten te upseln naar hogere kwantumstaffels.

### Stap 4: Prijsregels Auditen & Exporteren naar het Herbruikbare Excel-sjabloon
Wanneer grondstofkosten schommelen of de marktpositionering verschuift, werk je je centrale aannames bij en controleer je het `Model Validation Sheet` om te verifiëren:
1. **Kwantum-prijs-monotonie:** bevestig dat een grotere bestelhoeveelheid nooit leidt tot een lager totaalorderbedrag.
2. **Dimensionale gevoeligheid:** verifieer dat de prijsopslag per vierkante inch overeenkomt met de realiteit van stanswerk en materiaalrendement.
3. **Concurrentieafwijingsalarmeren:** identificeer offertes die buiten je acceptabele tolerantieband vallen.

> 🚀 **Klaar om je etikettenofferte-workflow operationeel te maken?** 
> Nadat je snelle scenario's hebt getest in de **[Gratis Webgebaseerde Prijscalculator voor Etiketten](https://hyvoid.github.io/custom-label-pricing-calculator/)**, download je het **[Volledige Parametrische Excel-prijs Werkboek](https://theseusworkshop.com/l/whpeug?utm_source=github&utm_medium=GitHub%20README)** om je eigen machinestarieven op te slaan, proprietaire concurrentieprijslijsten te bewaren en herhaalbare offline offertes te draaien voor je ramingsteam.

---

## Waarom Ik Dit Parametrische Etikettenramingsmodel Heb Gebouwd

In commercieel drukwerk en etikettenverwerking is nauwkeurige prijsstelling veel complexer dan het vermenigvuldigen van `width × height × quantity`.

Een korte-run digitale of flexo-etikettenorder heeft prepress- en opstartkosten die de stukprijs domineren. Een groter gepersonaliseerd etikett verbruikt meer zelfklevend substraat, maar de effectieve kosten per vierkante inch schalen zelden lineair door baanindeling, stanverspilling en drukmachine-efficiëntie. Bovendien verlagen volumekortingen weliswaar de stukprijs bij lange runs, maar ongekalibreerde staffelschema's veroorzaken vaak onbedoelde prijsafwijkingen.

### De Staffelgrens-val "100 vs. 101 Etiketten"
Beschouw twee vrijwel identieke klant-RFQ's: **100 gepersonaliseerde etiketten** versus **101 gepersonaliseerde etiketten**.

In een rigide, ongevalideerd opzoekspreadsheet kan het overschrijden van de grens van 100 stuks een steilere volumekortingsstaffel activeren voor de hele bestelling. Zonder continuïteitswaarborgen kan de bestelling van 101 etiketten eindigen met een **lagere totaalfactuurprijs** dan de bestelling van 100 etiketten. De spreadsheetformules worden zonder syntaxisfouten uitgevoerd, maar de resulterende commerciële offerte vernietigt marge en verwardt kopers.

Dezelfde kwetsbaarheid treft **concurrerende prijsafstemming**. Prijzen "10% onder online etikettenconcurrenten" beschermt de winstgevendheid alleen als de benchmarkspecificaties overeenkomen met je substratveronderstellingen, je minimumafname-toeslag intact blijft en je kwantumeconomie over de staffels heen standhoudt.

Ik heb deze tool ontworpen als **geproduceerd prijsredeneren** — een transparant, controleerbaar Configure-Price-Quote (CPQ)-kader dat druktechnische kostendrijvers, volumekortingen, concurrentiebenchmarking en wiskundige validatieregels met elkaar verbindt. Het vervangt het commerciële oordeel van een ervaren drukcalculator niet; het maakt kostenveronderstellingen expliciet, berekeningen herhaalbaar en prijsgrenssituaties zichtbaar voordat een ooit een offerte een klant bereikt.

---

## Handmatige Drukraming vs. Parametrische Etikettenprijsmachine

| Ramings- & Offertedimensie | Traditionele Handmatige Spreadsheets & Ad-hocoffertes | Parametrische Prijsmachine voor Gepersonaliseerde Etiketten (Deze Tool) |
| :--- | :--- | :--- |
| **Dimensionale Oppervlakte- & Substratkostprijs** | Calculatoren passen vierkante inch-tarieven per RFQ handmatig aan, wat leidt tot inconsistente prijzen voor oversized of afwijkend gevormde etiketten. | Past een uniforme vierkante inch-kostenformule toe met een configureerbare **oppervlakte-elasticiteitscoëfficiënt** over alle etikettdimensies. |
| **Kwantumgrenzen & Staffelkortingen** | Volumekortingspercentages worden afzonderlijk bijgesteld, wat vaak **klifachtige totaalprijsomkeringen** veroorzaakt bij staffeldrempels (bijv. 500 vs. 501 stuks). | Handhaaft een automatische **validatie van continuïteit bij staffelgrenzen** zodat grotere etikettenbestellingen nooit lagere totale omzet genereren. |
| **Amortisatie van Opstartkosten & Stukprijs** | Vertegenwoordigers vergelijken vaste totaalprijzen zonder vaste prepress-/plaatopstartkosten te scheiden van variabele kosten per duizend afdrukken. | Scheidt dynamisch **basisopstartkosten**, minimumafname-ondergrenzen en runtarieven om accurate totale en stuk-ecoonomie per etikett te tonen. |
| **Concurrentieprijsbenchmarking** | Offertes van online drukkerijen worden blind afgestemd als geïsoleerde doelen, met risico op negatieve marges bij aangepaste formaten. | Combineert bottom-up kostenparameters met een **configureerbare concurrentiepositioneringsfactor** en afwijkingsregels. |
| **Kalibratie van Marktinformatie** | Historische waarnemingen van concurrentieprijzen blijven in statische PDF's of verspreide e-mails, waardoor systematische prijscalibratie onmogelijk is. | Structureert benchmarkgegevenssets (bijv. Wizard Labels, Consolidated Label) naar **breedte, hoogte, hoeveelheid en waargenomen tarief** voor modelafstemming. |
| **Governance & Audit van Prijsbeleid** | Het bijwerken van een substrat-MSI-tarief of opstartkosten vereist het bewerken van fragiele celformules over meerdere tabbladen, met stille rekenfouten tot gevolg. | Centraliseert alle kostendrijvers en kortingsregels in een **één parameterconfiguratieblad** ondersteund door automatische diagnostische controles. |

---

## Voor Wie Deze Tool Is Gebouwd: Rollen, Gebruiksscenario's & Workflows

Deze parametrische prijscalculator en het Excel-sjabloon zijn gebouwd voor professionals in de ecosysteem van verpakkingen, commercieel drukwerk en B2B-e-commerce:

- **Fabrikanten van gepersonaliseerde etiketten & flexo/digitale verwerkers:** Standaardiseer je inside sales- en ramingworkflow. Gebruik de **etiketdruk-kostenschatter** om snelle, consistente offertes te genereren over aangepaste stanformaten en runlengtes, zonder wachten op senior-engineeringbeoordeling voor routinevragen.
- **Drukkerijcalculatoren & inside sales-teams:** Elimineer handmatig herbouwen van formules tijdens live klantgesprekken. Gebruik de **interactieve B2B-offertecalculator** om stukprijzen direct over 6 kwantumgrenzen te vergelijken en kopers de exacte stukprijsbesparing van een groter ordervolume te tonen.
- **Prijsmanagers, commerciële directeuren & drukkerijeigenaren:** Centraliseer je prijsgovernance. Pas prepress-opstartkosten, materiaalkosten per vierkante inch, volumekortingsschema's en concurrentiepositioneringsfactoren aan vanuit één **CPQ-parameterbeheer werkboek**, met marge-impactaudit vóór uitrol.
- **Verpakkingsinkoopspecialisten & merkinkopers:** Ontleed leveranciersoffertes met een transparante **should-cost modelleertool**. Scheid vaste opstartkosten van variabele substrat- en drukkosten om eerlijkere kwantumstaffels te onderhandelen met commerciële etikettenleveranciers.
- **Spreadsheet-engineers, CPQ-analisten & webontwikkelaars:** Bestudeer een schone, gedocumenteerde **parametrische prijsspecificatie**. Gebruik de validatieregels, elasticiteitsformules en benchmarkarchitectuur van het Excel-werkboek als blauwdruk voor het bouwen van aangepaste e-commerce print-on-demand (Web-to-Print)-offertemachines.

---

## Branchespecifieke Gebruiksscenario's & Langstaart-Prijsscenario's

Of je nu een boetiek digitale etikettenpers runt of een online Web-to-Print-winkelarchitectuur ontwerpt, dit model past zich aan specifieke commerciële offertescenario's aan:

### 1. Offerte­modellering: Korte-run digitaal vs. hoogvolume flexo
Kalibreer je **basisopstartkosten** en je **runtarief per 1.000 afdrukken** om het economische snijpunt weer te geven tussen korterun digitaal etikettendrukken (lage opstart, hogere stukrunkosten) en langrun flexodruk (hogere plaat-/prepress-opstart, steil stukprijsverval vanaf 10.000+ etiketten).

### 2. Prototyping van directe B2B Web-to-Print-offertes
Voordat je duizenden dollars investeert in aangepaste ERP- of e-commerce-offerteplugins, gebruik je de **browsergebaseerde calculator en het Excel-model** als zandbak. Test hoe je oppervlakte-elasticiteitscoëfficiënten en kortingsstaffels zich gedragen bij grensafmetingen (`0.5" × 0.5"` microetiketten tot `24" × 12"` trommeletiketten).

### 3. Concurrentieprijscalibratie versus online etikettendrukkerijen
Stop met gissen hoe online concurrenten hun catalogus prijzen. Leg waargenomen marktoffertes vast per afmeting en hoeveelheid, stel je **doelconcurrentiepositioneringsfactor** in (bijv. afstemmen binnen $\pm 5\%$ of $8\%$ onderbieden) en laat het validatieblad exact aangeven welke etiketformaten en runlengtes passen bij jouw kostenstructuur.

---

### Reikwijdte & Operationele Disclaimer
*Deze tool is een parametrisch beslissingsondersteunend model en een commerciële offertecalculator — geen shopfloor-ERP, productieplanningssysteem of live webscraper van concurrenten. Het haalt niet automatisch realtime substrat-MSI-prijzen op, drukpersdoorvoersnelheden, stansverspillingspercentages of de nettowinstgevendheid van het bedrijf. Gebruikers moeten het configuratietabblad vullen met hun eigen geverifieerde productiekostenstudies en marktwaarnemingen.*

## Over

Ik bouw lichtgewicht analytische tools voor terugkerende zakelijke beslissingen die moeilijk worden wanneer te veel aannames, cijfers en uitzonderingen over verschillende plaatsen verspreid zijn.

De centrale vraag is praktisch: **Welke informatie moet op één plek samenkomen om de volgende beslissing consistenter te maken?**

De Parametrische Concurrentieprijsmachine past deze aanpak toe op de prijsstelling van gepersonaliseerde etiketten. Het brengt orderspecificaties, productiekostenveronderstellingen, kwantumkortingen, concurrentiebenchmarks en prijsvalidatie samen in één herbruikbaar kader. Het doel is om een complexe prijsbeslissing makkelijker inspecteerbaar en onderhoudbaar te maken zonder dat een volledige software-implementatie nodig is.

## Technische Details

<details>
<summary>Voor technische beoordelaars, Excel-praktijkgroepen en medewerkers</summary>

### Werkboekarchitectuur

Het werkboek scheidt de gebruikersgerichte offerteworkflow van prijsparameters, berekeningslogica, concurrentiegegevens en modelvalidatie. Deze scheiding maakt prijsveronderstellingen makkelijker te beoordelen en te onderhouden zonder dat routinegebruikers formules hoeven te bewerken.

| Werkblad | Verantwoordelijkheid | Primaire Invoeren | Hoofduitvoeren |
|---|---|---|---|
| `01_报价计算器` — Offertecalculator | Frontend-offerteworkflow | Etiketbreedte, -hoogte en bestelhoeveelheid | Totale prijs, stukprijs, van toepassing zijnde kwantumstaffel, concurrentievergelijking |
| `02_参数配置表` — Parameterconfiguratie | Single source of truth voor prijsaannames | Kostentarieven, opstartkosten, oppervlakte-elasticiteit, staffelgrenzen, staffelkortingen, concurrentiedoelfactor | Gedeelde parameters die door prijs- en offertelogica worden verbruikt |
| `03_定价引擎` — Prijsmachine | Kernberekeningslaag | Orderspecificaties en geconfigureerde parameters | Engineeringkosten, kwantum-aangepaste prijs, gekalibreerde prijs, eindprijs |
| `04_竞品对标库` — Concurrentiebenchmark | Benchmarkgegevensbeheer | Referentieprijzen van Wizard Labels en Consolidated Label | Vergelijkende prijsreferenties en kalibratieinvoer voor het model |
| `05_模型压力测试` — Modelvalidatie | Grens- en consistentiecontroles | Testafmetingen, hoeveelheden, staffelgrenzen en geconfigureerde aannames | Validatie-indicatoren voor prijsmonotonie, stukprijs­gedrag en benchmarkafstemming |

#### Berekening en gegevensstroom

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

De beoogde stroom is eenrichtings: geconfigureerde aannames voeden het rekenmodel, orderspecificaties activeren de berekeningen, benchmarkrecords leveren kalibratiereferenties, en validatiecontroles helpen potentiële modelproblemen te identificeren.

Het configuratieblad fungeert als de **single source of truth (SSOT)**. Prijslogica zou naar gedeelde parameters moeten verwijzen in plaats van kostentarieven of kortingsaannames over meerdere formules te dupliceren. Dit vermindert het risico op inconsistente prijzen na een strategiewijziging.

Het benchmarkblad is een onderhouden referentiegegevensset, geen live verbinding met concurrentiewebsites. Het nut ervan hangt af van de nauwkeurigheid, actualiteit en vergelijkbaarheid van de geregistreerde offertes.

#### Parameterbeheer

De configuratielaag centraliseert de aannames die het resultaat beïnvloeden, waaronder:

- Valutasymbool en presentatie-instellingen.
- Opstart- en minimumtoeslag-aannames.
- Oppervlaktegebaseerde kostentarief en oppervlakte-elasticiteit.
- Productieruntarief-aannames.
- Zes kwantumstaffels, hun grenzen en bijbehorende kortingspercentages.
- De doelconcurrentiepositioneringsfactor.
- Interne controles voor staffelconfiguratie en kwantumgedrag.

Het wijzigen van de doelpositioneringsfactor kan het gemodelleerde prijsniveau verschuiven ten opzichte van de engineeringkostenbasis. Dit mag niet worden opgevat als bewijs dat het bedrijf duurzaam op die prijs kan verkopen: werkelijke productiekosten, marge-eisen en commerciële beperkingen moeten nog worden beoordeeld.

### Drie Valkuilen Waarin Zelfs Ervaren Prijsteams Trappen

#### 1. De etikettenoppervlakte behandelen als het hele kostenmodel

Twee etiketten met dezelfde oppervlakte hebben bij verschillende bestelhoeveelheden niet noodzakelijk dezelfde commerciële implicaties. Een offerte kan opstartkosten, oppervlaktegevoelige materiaalkosten en productierunkosten bevatten. Een eenvoudige formule van oppervlakte keer hoeveelheid kan verhullen hoe vaste en variabele kosten zich gedragen.

**Ontwerpantwoord:** Scheid opstartkosten, oppervlaktegerelateerde kosten en rungerelateerde kosten voordat je kwantumstaffel-aanpassingen toepast. De parameters blijven bewerkbaar zodat het model kan worden gekalibreerd op de werkelijke productie-economie van het bedrijf.

#### 2. Een lagere stukprijs verwarren met een geldige kwantumkorting

Een grotere bestelling spreidt vaste kosten normaal over meer eenheden en kan een lagere stukprijs rechtvaardigen. Maar een discrete kortingstabel kan onbedoeld gedrag introduceren bij een staffelgrens. Zo kan de berekende totaalprijs voor 101 etiketten onder die voor 100 etiketten komen als de nieuwe staffelkorting te agressief is.

**Ontwerpantwoord:** Controleer zowel het totaalprijs- als het stukprijs­gedrag rond staffelgrenzen. Het model bevat een grensbeschermingsmechanisme dat bedoeld is om totaalprijsomkeringen te voorkomen bij het overstappen naar een hogere kwantumstaffel. De validatiecontroles van het werkboek moeten worden herzien na wijzigingen van staffelgrenzen of kortingen.

#### 3. Concurrentieprijzen behandelen als vervanging voor kosten­gebaseerde prijsstelling

Een concurrentieofferte is nuttig marktbewijs, maar onthult niet de productiekosten, marge, dienstomvang, materialspecificatie of commerciële voorwaarden van de concurrent. Een referentieprijs matchen zonder deze verschillen te begrijpen kan een aantrekkelijk ogende opleveren die economisch niet houdbaar is.

**Ontwerpantwoord:** Stel eerst een interne engineeringprijscurve vast en pas vervolgens een configureerbare concurrentiepositioneringsfactor toe om het gemodelleerde resultaat bij te sturen. Vergelijk alleen offertes met voldoende vergelijkbare specificaties, hoeveelheden en voorwaarden. Benchmarkgegevens moeten worden ververst en gecontroleerd voordat ze worden gebruikt voor commerciële beslissingen.

### Voorbeeldscenario

Beschouw een klant die gepersonaliseerde bedrukte etiketten aanvraagt met de volgende specificaties:

| Invoer | Voorbeeldwaarde |
|---|---:|
| Etiketbreedte | 4 inch |
| Etiketthoogte | 6 inch |
| Bestelhoeveelheid | 2.500 etiketten |
| Doelconcurrentiepositioneringsfactor | 0.90 |
| Kwantumstaffels | Zes geconfigureerde staffels |

De afmetingen en hoeveelheid bepalen de fysieke werkbelasting en de toepasselijke kwantumstaffel. De prijsmachine combineert vervolgens de geconfigureerde opstartkosten, de oppervlaktegerelateerde kosten, de runtarief-aanname, de staffelkorting en de concurrentiepositioneringsfactor.

De offerteworkflow is ontworpen om de resulterende totaalprijs en stukprijs te tonen naast de toepasselijke staffel en beschikbare concurrentiereferentie. De commerciële gebruiker kan dan beoordelen of de voorgestelde prijs consistent is met de beoogde positionering en of een grotere hoeveelheid een betekenisvol stukprijs­voordeel biedt.

Een nuttige vervolgstap is het vergelijken van de gevraagde hoeveelheid met de volgende geconfigureerde staffel. Dit helpt de verkoper om de afweging te bespreken tussen een grotere orderverplichting en een lagere stukprijs, in plaats van een willekeurige korting aan te bieden.

Het voorbeeld beschrijft de berekeningsworkflow, geen geverifieerde marktofferte. Werkelijke prijzen zijn afhankelijk van de geconfigureerde aannames van het werkboek en de kwaliteit van de benchmarkrecords. De illustratieve waarden in deze README mogen niet worden geïnterpreteerd als actuele prijzen van Wizard Labels of Consolidated Label.

### Implementatienotities

#### Formulearchitectuur

Het model is georganiseerd in afzonderlijke berekeningsfasen:

1. **Engineeringbasislijn:** Bereken de gemodelleerde orderprijs op basis van opstartkosten, oppervlaktegevoelige kosten en rungerelateerde kosten.
2. **Kwantumstaffel-aanpassing:** Pas de korting toe die hoort bij het geconfigureerde kwantumbereik.
3. **Concurrentiecalibratie:** Pas de doelpositioneringsfactor toe op de berekende prijs.
4. **Grensbescherming:** Vergelijk de kandidaatprijs met de toepasselijke referentie van de vorige staffelgrens en de geconfigureerde minimumprijsbeperking.
5. **Validatie:** Beoordeel kwantumgedrag en modelcontroles voordat de output voor offertes wordt gebruikt.

Deze gefaseerde architectuur maakt het makkelijker om na te gaan waarom een prijs verandert wanneer een aanname wordt bijgewerkt. Het biedt ook een duidelijker migratiepad als de berekeningslogica later wordt geïmplementeerd in een webapplicatie of een andere programmeeromgeving.

#### Excel-compatibiliteit

Het werkboek is ontworpen voor Microsoft 365 of Excel 2021 en later, inclusief ondersteunde browsergebaseerde Excel-omgevingen. Het vertrouwt op moderne formulefuncties zoals `LET`, `LAMBDA`, `MAP`, `XLOOKUP`, `FILTER`, `VSTACK`, `TAKE` en `DROP`.

Oudere Excel-versies die deze functies niet ondersteunen, kunnen formulefouten geven of het werkboek niet correct berekenen. De implementatie is ontworpen rond native Excel-formules en vereist geen VBA-macro's.

#### Operationele grenzen

- **Benchmarkonderhoud:** Concurrentieprijzen moeten door de beheerder worden ingevoerd en onderhouden; het model stelt geen live concurrentieprijsfeed in.
- **Parametereigendom:** Wijs verantwoordelijkheid toe voor het goedkeuren van kostentarieven, staffeldrempels, kortingen en wijzigingen in concurrentiepositionering.
- **Gelijktijdig gebruik:** De frontend-calculator gebruikt gedeelde invoercellen. Meerdere gebruikers die dezelfde calculator tegelijk bewerken, kunnen elkaars invoer overschrijven; gebruik een gecontroleerde offerteworkflow voor gedeelde bestanden.
- **Modelschaal:** Het bronontwerp beveelt aan de dataset van de prijsmachine binnen ongeveer 100.000 rijen te houden en grotere datasets te archiveren of batchgewijs te verwerken. De werkelijke responsiviteit hangt af van werkboekontwerp, hardware en formulecomplexiteit.
- **Productievalidatie:** Test vóór operationeel gebruik het model met representatieve orders, bevestigde kostenveronderstellingen, actuele vergelijkbare benchmarkrecords en de eigen marge- en minimumprijs­eisen van het bedrijf.

De formules van het werkboek kunnen dienen als specificatie voor een toekomstige Python-, Node.js- of PHP-prijsservice, maar elke migratie moet formule-equivalentie, invoervalidatie, grensgedrag en uitvoeren onafhankelijk verifiëren voordat het wordt ingezet.

</details>

### Formuliereferentie

De onderstaande formules beschrijven de berekeningsfasen van het model. Exacte celverwijzingen en formule-implementaties moeten worden gecontroleerd tegen de distributieversie van het werkboek.

<details>
<summary>1. Oppervlaktegebaseerde Kosten en Dimensionale Gevoeligheid</summary>

De etikettenoppervlakte wordt berekend uit breedte en hoogte:

\[
A = W \times H
\]

waarbij:

- \(A\) = etikettenoppervlakte in vierkante inch.
- \(W\) = etiketbreedte in inch.
- \(H\) = etiketthoogte in inch.

Het model gebruikt een oppervlaktegebaseerde machtsrelatie om dimensionale gevoeligheid weer te geven. In algemene vorm:

\[
C_{\text{area}} = r_A \times A^\alpha
\]

waarbij:

- \(r_A\) = geconfigureerde oppervlaktekosten­coëfficiënt.
- \(\alpha\) = oppervlakte-elasticiteitsparameter.
- \(C_{\text{area}}\) = gemodelleerde oppervlaktegerelateerde kosten.

Bij \(\alpha=1\) schaalt de oppervlaktecomponent proportioneel met de oppervlakte. Een andere waarde verandert de gemodelleerde gevoeligheid voor formaat. De parameter moet worden gekalibreerd op het werkelijke kosten­gedrag van het bedrijf, niet alleen worden gekozen om een concurrentieprijs te matchen.

</details>

<details>
<summary>2. Productiekosten en Opstartkosten</summary>

De engineeringbasislijn combineert de vaste en variabele kostencomponenten van het model:

\[
C_{\text{base}} =
C_{\text{setup}} +
C_{\text{area}} +
C_{\text{run}}
\]

waarbij:

- \(C_{\text{setup}}\) de geconfigureerde opstartgerelateerde kosten vertegenwoordigt.
- \(C_{\text{area}}\) de dimensionale gevoelige component vertegenwoordigt.
- \(C_{\text{run}}\) de rungerelateerde productiekosten onder de geconfigureerde aannames van het werkboek vertegenwoordigt.

De exacte definitie van de rungerelateerde component hangt af van de tarief- en hoeveelheidsconventies van het werkboek. Bevestig vóór commercieel gebruik van het model of elke invoer een per-stuk-, per-oppervlakte-, per-run- of vast bedrag vertegenwoordigt. Het mengen van deze basen kan het resultaat aanzienlijk vertekenen.

</details>

<details>
<summary>3. Kwantumstaffelprijsstelling</summary>

Het model gebruikt zes configureerbare kwantumstaffels. Elke staffel heeft een kwantumgrens en een bijbehorende kortingsaanname.

Een vereenvoudigde weergave van de staffelaanpassing is:

\[
P_{\text{tier}} = P_{\text{base}} \times (1-d_q)
\]

waarbij:

- \(P_{\text{base}}\) de toepasselijke prijs vóór de staffel is.
- \(d_q\) het geconfigureerde kortingspercentage is voor de geselecteerde kwantumstaffel.
- \(P_{\text{tier}}\) de prijs na de staffelaanpassing is.

Deze uitdrukking illustreert het kortingsmechanisme; het is geen vervanging van de volledige formule-implementatie van het werkboek. De exacte prijsbasis waarop de korting wordt toegepast moet consistent blijven met het werkelijke werkboek.

Kwantumstaffelgrenzen en kortingspercentages moeten samen worden beoordeeld. Een kortingschema dat redelijk lijkt bij het bekijken van afzonderlijke percentages kan toch een ongewenste totaalprijs­discontinuïteit veroorzaken bij een grens.

</details>

<details>
<summary>4. Concurrentiepositioneringsfactor</summary>

Het model bevat een configureerbare concurrentiepositioneringsfactor om de gemodelleerde prijs aan te passen ten opzichte van de interne basislijn.

Een vereenvoudigde weergave is:

\[
P_{\text{positioned}} =
P_{\text{tier}} \times k_c
\]

waarbij:

- \(P_{\text{tier}}\) de staffel-aangepaste prijs is.
- \(k_c\) de geconfigureerde concurrentiepositioneringsfactor is.
- \(P_{\text{positioned}}\) de prijs na concurrentiecalibratie is.

Een factor van \(0.90\) betekent bijvoorbeeld een verlaging van 10% ten opzichte van de prijs waarop de factor wordt toegepast. Dit garandeert geen 10% voordeel ten opzichte van een concurrent: die conclusie hangt af van vergelijkbare benchmarkgegevens en de werkelijke prijsbasis van het model.

Concurrentiecalibratie mag minimumprijs-, marge- of kostenherstelvereisten niet overschrijven.

</details>

<details>
<summary>5. Kwantumgrensbescherming</summary>

Het model bevat een grensbeschermingsmechanisme dat bedoeld is om te voorkomen dat een grotere bestelhoeveelheid bij een staffelovergang een onverwacht lagere totaalprijs oplevert.

Op hoog niveau beoordeelt het model de kandidaatprijs tegen relevante grensbeperkingen voordat het resultaat wordt getoond. Het gewenste gedrag is dat een hoeveelheidstoename geen onbedoelde omkering van de totale orderprijs veroorzaakt.

De precieze beschermingsformule en de interactie met minimumprijsbeperkingen moeten worden geverifieerd tegen de werkelijke formules van het werkboek. Een algemene monotoniecontrole kan worden uitgedrukt als:

\[
P_{\text{total}}(q+1) \geq P_{\text{total}}(q)
\]

waarbij \(q\) de bestelhoeveelheid is. Dit is een validatiedoelstelling, geen garantie dat elke denkbare parameterconfiguratie deze automatisch zal naleven.

</details>

<details>
<summary>6. Stukprijs en Concurrentievergelijking</summary>

De stukprijs wordt als volgt berekend:

\[
P_{\text{unit}} = \frac{P_{\text{total}}}{q}
\]

waarbij \(P_{\text{total}}\) het ordertotaal is en \(q\) de bestelhoeveelheid.

Een dalende stukprijs bij toenemende hoeveelheid is vaak verenigbaar met opname van opstartkosten en kwantumkortingen, maar dit moet worden gevalideerd in plaats van aangenomen. Concurrentievergelijkingen vereisen ook equivalente specificaties, hoeveelheden, materialen, drukeisen en commerciële voorwaarden.

De benchmarkrecords voor Wizard Labels en Consolidated Label zijn referentie-invoeren die in het werkboek worden onderhouden. Ze mogen niet worden geïnterpreteerd als actuele live prijzen, tenzij onafhankelijk geverifieerd.

</details>

### Validatieregels

Het werkboek bevat een modelstresstestblad bedoeld om representatieve scenario's en prijs­gedrag te controleren. Het bronontwerp beschrijft 36 testgevallen. Werkelijke testresultaten moeten worden bevestigd in het vrijgegeven werkboek in plaats van te worden afgeleid uit het bestaan van het testblad.

| Validatiegebied | Wat te Controleren | Verwacht Gedrag | Actie bij Validatiefout |
|---|---|---|---|
| Dimensiegrenzen | Breedte en hoogte binnen de ondersteunde invoerbereiken | Geaccepteerde waarden blijven binnen geconfigureerde grenzen | Corrigeer de invoer of herzie het ondersteunde bereik |
| Hoeveelheidsgrenzen | Hoeveelheid van 1 tot 1.000.000 | Geldige hoeveelheden worden toegewezen aan het beoogde berekeningpad | Corrigeer de hoeveelheid of herzie de invoervalidatie |
| Staffelconfiguratie | Zes staffels met geldige, geordende grenzen | Elke ondersteunde hoeveelheid wordt toegewezen aan de beoogde staffel | Los ontbrekende, overlappende of inconsistente grenzen op |
| Staffelkortingspercentages | Kortingswaarden zijn numeriek en commercieel goedgekeurd | Percentages volgen het beoogde prijsbeleid | Herzie de aannames en voer de stresstests opnieuw uit |
| Totaalprijs-monotonie | Vergelijk aangrenzende hoeveelheden, vooral bij staffelgrenzen | Geen onbedoelde totaalprijsomkering | Inspecteer kortingspercentages en grensbeschermingslogica |
| Stukprijs­gedrag | Vergelijk stukprijzen over kwantumniveaus | Wijzigingen komen overeen met de beoogde kwantumstrategie | Herzie staffelkortingen, opstartkostenbehandeling en formuleverwijzingen |
| Kostenintegriteit | Controleer opstart-, oppervlakte- en rungerelateerde kostenveronderstellingen | Kostencomponenten gebruiken consistente eenheden en basen | Corrigeer parameterdefinities en brongegevens |
| Concurrentievergelijkbaarheid | Herzie afmetingen, hoeveelheden, specificaties en offertedatums | Vergelijkingen gebruiken voldoende equivalente aanbiedingen | Werk niet-vergelijkbare benchmarkrecords bij of sluit ze uit |
| Minimumprijsbeperkingen | Test lage hoeveelheden en agressieve concurrentiefactoren | Prijzen blijven binnen de geconfigureerde commerciële beperkingen | Herzie de minimumprijslogica en positioneringsaannames |
| Formule-integriteit | Controleer formuleuitvoeren na parameterwijzigingen | Berekeningen blijven geldig en gekoppeld aan de configuratiebron | Inspecteer formulefouten, verwijzingen en Excel-compatibiliteit |
| Stresstestresultaten | Herzie alle geconfigureerde testscenario's | Resultaten voldoen aan de gedocumenteerde acceptatiecriteria van het model | Onderzoek fouten vóór operationele vrijgave |

#### Aanbevolen releasecontroles

Voordat je het werkboek distribueert:

1. Open het in een ondersteunde Excel-versie en bevestig dat alle moderne formulefuncties correct berekenen.
2. Test minimale en maximale afmetingen en hoeveelheden.
3. Test hoeveelheden net onder, op en net boven elke staffelgrens.
4. Wijzig een representatieve kostenparameter en bevestig dat afhankelijke uitvoeren zoals verwacht reageren.
5. Verifieer concurrentiereferentierecords tegen actuele, vergelijkbare offertes.
6. Herzie alle 36 geconfigureerde stresstestgevallen en leg de werkelijke resultaten vast.
7. Bevestig dat de invoerinstructies, formulebeveiliging en uitvoerlabels van het werkboek overeenkomen met de vrijgegeven implementatie.

</details>

## Bedrijfslogica & Methodologie

Prijsstelling van gepersonaliseerde etiketten is een balansprobleem tussen productie-economie, bestelomvang en marktpositionering. Een prijs die alleen de fysieke oppervlakte van het etikett weerspiegelt, kan de opstart- en productiekosten over het hoofd zien. Een prijs die alleen steunt op een concurrentieofferte kan verschillen in specificaties, dienstomvang en de eigen kostenstructuur van de verkoper over het hoofd zien.

Deze toolset scheidt die beslissingen in een herhaalbare reeks. Eerst stellen etikettdimensies en bestelhoeveelheid de te prijzen specificaties vast. Vervolgens creëren configureerbare productie-aannames een interne kosten­gebaseerde referentie. Kwantumstaffels drukken daarna de beoogde economie van grotere bestellingen uit. Ten slotte leveren concurrentiebenchmarks de marktcontext om te beoordelen of de voorgestelde prijs juist gepositioneerd is.

De scheiding is belangrijk omdat deze invoeren om verschillende redenen veranderen. Productiekosten kunnen veranderen wanneer materiaal- of exploitatie-aannames veranderen. Kwantumkortingen weerspiegelen een commercieel beleid. Concurrentiepositionering reageert op marktbewijs. Ze gescheiden houden maakt het makkelijker te identificeren welke beslissing een prijswijziging veroorzaakte en of die wijziging commercieel acceptabel blijft.

Het model behandelt prijsconsistentie ook als onderdeel van het besluitvormingsproces. Een kortingschema mag geen onbedoelde totaalprijsomkering veroorzaken alleen omdat een bestelling een staffelgrens overschrijdt. Grenstesten helpen deze problemen bloot te leggen voordat ze in klantoffertes verschijnen.

Het resultaat is geen automatische garantie op de beste prijs. Het is een gestructureerde manier om prijsveronderstellingen zichtbaar te maken, scenario's consistent te vergelijken en gevallen te identificeren die herziening behoeven. De kwaliteit van zijn beslissingen hangt af van de kwaliteit van de kostenveronderstellingen, benchmarkgegevens en de validatie die door het bedrijf wordt uitgevoerd.

## Andere Tools in Deze Serie

Verken andere lichtgewicht tools voor zakelijke beslissingsondersteuning van Theseus Workshop in de GitHub-repository's van het project. Elke tool richt zich op een specifieke terugkerende operationele of financiële beslissing.

## Licentie

Dit project is gelicentieerd onder de Apache License 2.0. Zie het bestand `LICENSE` voor de volledige licentietekst.
