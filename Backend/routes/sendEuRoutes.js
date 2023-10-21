const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');
const mongoose = require("../db");

let gfs;

mongoose.connection.once('open', () => {
    // Initialize GridFS
    gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'eu_d_pdf'
    });
});

router.get('/api/generateEu', async (req, res) => {
    const browser = await puppeteer.launch({ headless: "new" });  // Addressing the deprecation warning
    const page = await browser.newPage();
    await page.setContent(euTemplate);
    await page.emulateMediaType('screen');
    const pdf = await page.pdf({
        margin: { top: '05px', right: '05px', bottom: '05px', left: '05px' },
        printBackground: true,
        format: 'A4',
    });
    await browser.close();

    // Store PDF in MongoDB
    const writeStream = gfs.openUploadStream('eu_d.pdf', {
        contentType: 'application/pdf'
    });
    writeStream.end(pdf);

    writeStream.on('finish', () => {
        res.send('PDF wurde in MongoDB gespeichert!');
    });
});

//Validate the data before we make a crash log


const datum = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const location = 'Zürich';
const peopleTrue = 'ja';
const peopleFalse = 'nein';

const euTemplate = `
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unfallbericht Formular</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0px;
        }

        .grid-item {
            border: 1px solid black;
            padding: 0px;
        }

        .fahrzeugA {
            background-color: #E0E0E0;
            /* Grau für Fahrzeug A */
        }

        .numerFeld {
            margin-left: 10px;
            margin-right: 10px;
            height: 10px;
            width: 20px;
        }

        .fahrzeugB {
            background-color: #FFFFE0;
            /* Gelblich für Fahrzeug B */
        }

        .container {
            justify-content: space-between;
        }


        h2 {
            border-bottom: 2px solid black;
            padding-bottom: 5px;
            text-align: center;
        }

        .option {
            display: flex;
            align-items: center;
            margin: 0px 0;
        }

        .option input[type="checkbox"] {
            margin: 5px;
        }

        .option span {
            flex: 150;
            text-align: center;
        }

        .option label {
            flex: 1;
        }

        .bottom-note {
            border-top: 2px solid black;
            margin-top: 0px;
            margin-left: 5px;
            margin-right: 5px;
            padding-top: 0px;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .box {
            display: flex;
            flex-direction: column;
            width: 140px;
        }

        .box-wide {
            display: flex;
            flex-direction: column;
            width: 300px;
            text-align: center;
        }
    </style>
</head>

<body>
    <h1>Verkehrsunfall-Bricht</h1>
    <form action="/submit" method="post">
        <!-- Datum, Zeit, Ort -->
        <div style="display: flex;">
            <div class="box">
                <label for="datum">Datum des Unfalls:</label>
                <textarea name="date" id="date" cols="1" rows="1" readonly>${datum}</textarea>
            </div>
            <div class="box">
                <label for="zeit">Zeit:</label>
                <textarea name="time" id="time" cols="1" rows="1" readonly>${time}</textarea>
            </div>
            <div class="box">
                <label for="ort">Ort:</label>
                <textarea name="location" id="location" cols="1" rows="1" readonly>${location}</textarea>
            </div>
            <div class="box-wide">
                <label for="people">Verletzte, einschliesslich Leichtverletzte</label>
                <div  style="display: flex; flex-direction: row; gap: 10;">
                    <textarea name="peopleY" id="peopleY" cols="1" rows="1">${peopleTrue}</textarea>
                    <textarea name="peopleN" id="peopleN" cols="1" rows="1" readonly>${peopleFalse}</textarea>
                </div>
            </div>
        </div>
        </div>
        <div class="grid-container">
            <!-- Fahrzeug A Informationen -->
            <div class="grid-item fahrzeugA">
                <h2>Fahrzeug A</h2>
                <!-- Fahrzeug A Informationen -->
                <fieldset>

                    <label for="fahrzeugA-name">Name:</label>
                    <input type="text" id="fahrzeugA-name" name="fahrzeugA-name">

                    <label for="fahrzeugA-vorname">Vorname:</label>
                    <input type="text" id="fahrzeugA-vorname" name="fahrzeugA-vorname">

                    <label for="fahrzeugA-anschrift">Anschrift:</label>
                    <input type="text" id="fahrzeugA-anschrift" name="fahrzeugA-anschrift">

                    <label for="fahrzeugA-plz">Postleitzahl:</label>
                    <input type="text" id="fahrzeugA-plz" name="fahrzeugA-plz">

                    <label for="fahrzeugA-land">Land:</label>
                    <input type="text" id="fahrzeugA-land" name="fahrzeugA-land">

                    <label for="fahrzeugA-email">E-Mail:</label>
                    <input type="email" id="fahrzeugA-email" name="fahrzeugA-email">

                    <label for="fahrzeugA-marke">Fahrzeugmarke/Typ:</label>
                    <input type="text" id="fahrzeugA-marke" name="fahrzeugA-marke">

                    <label for="fahrzeugA-kennzeichen">Amtliches Kennzeichen:</label>
                    <input type="text" id="fahrzeugA-kennzeichen" name="fahrzeugA-kennzeichen">

                    <label for="fahrzeugA-zulassung">Land der Zulassung:</label>
                    <input type="text" id="fahrzeugA-zulassung" name="fahrzeugA-zulassung">
                </fieldset>
                <!-- Versicherungsinformationen für Fahrzeug A -->
                <fieldset>
                    <legend>Versicherungsinformationen</legend>
                    <label for="fahrzeugA-versicherung-name">Versicherungsunternehmen:</label>
                    <input type="text" id="fahrzeugA-versicherung-name" name="fahrzeugA-versicherung-name">

                    <label for="fahrzeugA-vertragsnummer">Vertragsnummer:</label>
                    <input type="text" id="fahrzeugA-vertragsnummer" name="fahrzeugA-vertragsnummer">

                    <label for="fahrzeugA-gruene-karte-nummer">Nummer der grünen Karte:</label>
                    <input type="text" id="fahrzeugA-gruene-karte-nummer" name="fahrzeugA-gruene-karte-nummer">

                    <label for="fahrzeugA-gruene-karte-gueltig-von">Gültig von:</label>
                    <input type="date" id="fahrzeugA-gruene-karte-gueltig-von"
                        name="fahrzeugA-gruene-karte-gueltig-von">

                    <label for="fahrzeugA-gruene-karte-gueltig-bis">Gültig bis:</label>
                    <input type="date" id="fahrzeugA-gruene-karte-gueltig-bis"
                        name="fahrzeugA-gruene-karte-gueltig-bis">
                </fieldset>

                <!-- Fahrerinformationen für Fahrzeug A -->
                <fieldset>
                    <legend>Fahrer (Fahrzeug A)</legend>
                    <label for="fahrerA-name">Name:</label>
                    <input type="text" id="fahrerA-name" name="fahrerA-name">

                    <label for="fahrerA-vorname">Vorname:</label>
                    <input type="text" id="fahrerA-vorname" name="fahrerA-vorname">

                    <label for="fahrerA-geburtsdatum">Geburtsdatum:</label>
                    <input type="date" id="fahrerA-geburtsdatum" name="fahrerA-geburtsdatum">

                    <label for="fahrerA-anschrift">Anschrift:</label>
                    <input type="text" id="fahrerA-anschrift" name="fahrerA-anschrift">

                    <label for="fahrerA-plz">Postleitzahl:</label>
                    <input type="text" id="fahrerA-plz" name="fahrerA-plz">

                    <label for="fahrerA-land">Land:</label>
                    <input type="text" id="fahrerA-land" name="fahrerA-land">

                    <label for="fahrerA-email">E-Mail:</label>
                    <input type="email" id="fahrerA-email" name="fahrerA-email">

                    <label for="fahrerA-fuehrerschein-nummer">Führerschein Nr.:</label>
                    <input type="text" id="fahrerA-fuehrerschein-nummer" name="fahrerA-fuehrerschein-nummer">

                    <label for="fahrerA-fuehrerschein-klasse">Führerschein Klasse:</label>
                    <input type="text" id="fahrerA-fuehrerschein-klasse" name="fahrerA-fuehrerschein-klasse">

                    <label for="fahrerA-fuehrerschein-gueltig-bis">Führerschein gültig bis:</label>
                    <input type="date" id="fahrerA-fuehrerschein-gueltig-bis" name="fahrerA-fuehrerschein-gueltig-bis">
                </fieldset>
            </div>

            <!-- Unfallumstände -->
            <div class="grid-item">
                <div class="container">
                    <h2>12. UNFALLUMSTÄNDE</h2>

                    <div class="option">
                        <input type="checkbox" id="option1b">
                        <label for="option1b"></label>
                        <span>parkte / hielt</span>
                        <label for="option1a"></label>
                        <input type="checkbox" id="option1a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option2b">
                        <label for="option2b"></label>
                        <span>verließ einen Parkplatz / öffnete eine Wagntür</span>
                        <label for="option2a"></label>
                        <input type="checkbox" id="option2a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option3b">
                        <label for="option3b"></label>
                        <span>parkte ein</span>
                        <label for="option3a"></label>
                        <input type="checkbox" id="option3a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option4b">
                        <label for="option4b"></label>
                        <span>verließ einen Parkplatz, ein privates Grundstück, einen Weg</span>
                        <label for="option4a"></label>
                        <input type="checkbox" id="option4a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option5b">
                        <label for="option5b"></label>
                        <span>begann, in einen Parkplatz, ein privates Grundstück, einen Weg einzufahren</span>
                        <label for="option5a"></label>
                        <input type="checkbox" id="option5a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option6b">
                        <label for="option6b"></label>
                        <span>fuhr in einem Kreisverkehr ein</span>
                        <label for="option6a"></label>
                        <input type="checkbox" id="option6a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option7b">
                        <label for="option7b"></label>
                        <span>fuhr in einem Kreisverkehr</span>
                        <label for="option7a"></label>
                        <input type="checkbox" id="option7a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option8b">
                        <label for="option8b"></label>
                        <span>parallel beim Fahren in der gleichen Richtung und in der gleichen Kolonne: auf das Heck
                            auf</span>
                        <label for="option8a"></label>
                        <input type="checkbox" id="option8a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option9b">
                        <label for="option9b"></label>
                        <span>fuhr in der gleichen Richtung und in einer anderen Kolonne</span>
                        <label for="option9a"></label>
                        <input type="checkbox" id="option9a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option10b">
                        <label for="option10b"></label>
                        <span>wechselte die Kolonne</span>
                        <label for="option10a"></label>
                        <input type="checkbox" id="option10a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option11b">
                        <label for="option11b"></label>
                        <span>überholte</span>
                        <label for="option11a"></label>
                        <input type="checkbox" id="option11a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option12b">
                        <label for="option12b"></label>
                        <span>bog nach rechts ab</span>
                        <label for="option12a"></label>
                        <input type="checkbox" id="option12a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option13b">
                        <label for="option13b"></label>
                        <span>bog nach links ab</span>
                        <label for="option13a"></label>
                        <input type="checkbox" id="option13a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option14b">
                        <label for="option14b"></label>
                        <span>setzte zurück</span>
                        <label for="option14a"></label>
                        <input type="checkbox" id="option14a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option15b">
                        <label for="option15b"></label>
                        <span>wechselte auf eine Fahrspur über, die dem Gegenverkehr vorbehalten ist</span>
                        <label for="option15a"></label>
                        <input type="checkbox" id="option15a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option16b">
                        <label for="option16b"></label>
                        <span>kam von rechts (auf einer Kreuzung)</span>
                        <label for="option16a"></label>
                        <input type="checkbox" id="option16a">
                    </div>

                    <div class="option">
                        <input type="checkbox" id="option17b">
                        <label for="option17b"></label>
                        <span>hatte ein Vorfahrtszeichen oder eine rote Ampel missachtet</span>
                        <label for="option17a"></label>
                        <input type="checkbox" id="option17a">
                    </div>

                    <div class="bottom-note">
                        <input class="numerFeld" type="text" id="felderA" name="felderA">
                        <p>Geben Sie die Anzahl der angekreuzten Felder an (Fahrzeug A). </p>
                    </div>
                    <div class="bottom-note">
                        <p>Geben Sie die Anzahl der angekreuzten Felder an (Fahrzeug A). </p>
                        <input class="numerFeld" type="text" id="felderB" name="felderB">

                    </div>
                </div>
            </div>

            <!-- Fahrzeug B Informationen -->
            <div class="grid-item fahrzeugB">
                <h2>Fahrzeug B</h2>
                <!-- Fahrzeug B Informationen -->
                <fieldset>
                    <label for="fahrzeugB-name">Name:</label>
                    <input type="text" id="fahrzeugB-name" name="fahrzeugB-name">

                    <label for="fahrzeugB-vorname">Vorname:</label>
                    <input type="text" id="fahrzeugB-vorname" name="fahrzeugB-vorname">

                    <label for="fahrzeugB-anschrift">Anschrift:</label>
                    <input type="text" id="fahrzeugB-anschrift" name="fahrzeugB-anschrift">

                    <label for="fahrzeugB-plz">Postleitzahl:</label>
                    <input type="text" id="fahrzeugB-plz" name="fahrzeugB-plz">

                    <label for="fahrzeugB-land">Land:</label>
                    <input type="text" id="fahrzeugB-land" name="fahrzeugB-land">

                    <label for="fahrzeugB-email">E-Mail:</label>
                    <input type="email" id="fahrzeugB-email" name="fahrzeugB-email">

                    <label for="fahrzeugB-marke">Fahrzeugmarke/Typ:</label>
                    <input type="text" id="fahrzeugB-marke" name="fahrzeugB-marke">

                    <label for="fahrzeugB-kennzeichen">Amtliches Kennzeichen:</label>
                    <input type="text" id="fahrzeugB-kennzeichen" name="fahrzeugB-kennzeichen">

                    <label for="fahrzeugB-zulassung">Land der Zulassung:</label>
                    <input type="text" id="fahrzeugB-zulassung" name="fahrzeugB-zulassung">
                </fieldset>

                <fieldset>
                    <legend>Versicherungsinformationen</legend>
                    <!-- Versicherungsinformationen für Fahrzeug B -->
                    <label for="fahrzeugB-versicherung-name">Versicherungsunternehmen:</label>
                    <input type="text" id="fahrzeugB-versicherung-name" name="fahrzeugB-versicherung-name">

                    <label for="fahrzeugB-vertragsnummer">Vertragsnummer:</label>
                    <input type="text" id="fahrzeugB-vertragsnummer" name="fahrzeugB-vertragsnummer">

                    <label for="fahrzeugB-gruene-karte-nummer">Nummer der grünen Karte:</label>
                    <input type="text" id="fahrzeugB-gruene-karte-nummer" name="fahrzeugB-gruene-karte-nummer">

                    <label for="fahrzeugB-gruene-karte-gueltig-von">Gültig von:</label>
                    <input type="date" id="fahrzeugB-gruene-karte-gueltig-von"
                        name="fahrzeugB-gruene-karte-gueltig-von">

                    <label for="fahrzeugB-gruene-karte-gueltig-bis">Gültig bis:</label>
                    <input type="date" id="fahrzeugB-gruene-karte-gueltig-bis"
                        name="fahrzeugB-gruene-karte-gueltig-bis">
                </fieldset>

                <fieldset>
                    <legend>Fahrer (Fahrzeug B)</legend>
                    <label for="fahrerB-name">Name:</label>
                    <input type="text" id="fahrerB-name" name="fahrerB-name">

                    <label for="fahrerB-vorname">Vorname:</label>
                    <input type="text" id="fahrerB-vorname" name="fahrerB-vorname">

                    <label for="fahrerB-geburtsdatum">Geburtsdatum:</label>
                    <input type="date" id="fahrerB-geburtsdatum" name="fahrerB-geburtsdatum">

                    <label for="fahrerB-anschrift">Anschrift:</label>
                    <input type="text" id="fahrerB-anschrift" name="fahrerB-anschrift">

                    <label for="fahrerB-plz">Postleitzahl:</label>
                    <input type="text" id="fahrerB-plz" name="fahrerB-plz">

                    <label for="fahrerB-land">Land:</label>
                    <input type="text" id="fahrerB-land" name="fahrerB-land">

                    <label for="fahrerB-email">E-Mail:</label>
                    <input type="email" id="fahrerB-email" name="fahrerB-email">

                    <label for="fahrerB-fuehrerschein-nummer">Führerschein Nr.:</label>
                    <input type="text" id="fahrerB-fuehrerschein-nummer" name="fahrerB-fuehrerschein-nummer">

                    <label for="fahrerB-fuehrerschein-klasse">Führerschein Klasse:</label>
                    <input type="text" id="fahrerB-fuehrerschein-klasse" name="fahrerB-fuehrerschein-klasse">

                    <label for="fahrerB-fuehrerschein-gueltig-bis">Führerschein gültig bis:</label>
                    <input type="date" id="fahrerB-fuehrerschein-gueltig-bis" name="fahrerB-fuehrerschein-gueltig-bis">
                </fieldset>
            </div>
        </div>
        <!-- Markierung der Schäden -->
        <div>
            <label>Markieren Sie die ursprünglichen Aufprallstelle am Fahrzeug A:</label>

            <label>Markieren Sie die ursprünglichen Aufprallstelle am Fahrzeug B:</label>
            <!-- Ebenso für Fahrzeug B -->
        </div>

        <!-- Eigene Bemerkungen -->
        <div>
            <label for="bemerkungen">Eigene Bemerkungen:</label>
            <textarea id="bemerkungen" name="bemerkungen"></textarea>
        </div>
        <!-- Unfallumstände -->
        <fieldset>
            <legend>Unfallumstände</legend>
            <!-- ... Auswahlmöglichkeiten ... -->
        </fieldset>



        <!-- Unterschriften -->
        <div>
            <label for="unterschriftA">Unterschrift Fahrer A:</label>
            <input type="text" id="unterschriftA" name="unterschriftA">
            <label for="unterschriftB">Unterschrift Fahrer B:</label>
            <input type="text" id="unterschriftB" name="unterschriftB">
        </div>

        <input type="submit" value="Bericht absenden">
    </form>
</body>

</html>`;


module.exports = router;