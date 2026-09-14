import { KEZPESEK } from "./adatok.js";

const TAROLO = document.querySelector("#kepzesek");
const NINCS_TALALAT = document.querySelector("#nincsTalalat");

// Város-szűrő gombok. Az "ertek: null" jelenti a "Mind" opciót,
// vagyis hogy nincs városra szűrés.
const VAROS_GOMBOK = [
    { gomb: document.querySelector("#mindenVarosGomb"), ertek: null },
    { gomb: document.querySelector("#budapestGomb"), ertek: "Budapest" },
    { gomb: document.querySelector("#kazincbarcikaGomb"), ertek: "Kazincbarcika" }
];

// Jogviszony-szűrő gombok. Az "ertek: null" itt is a "Mind" opciót
// jelenti, vagyis hogy nincs jogviszonyra szűrés.
const JOGVISZONY_GOMBOK = [
    { gomb: document.querySelector("#mindenJogviszonyGomb"), ertek: null },
    { gomb: document.querySelector("#tanuloiGomb"), ertek: "tanulói" },
    { gomb: document.querySelector("#felnottkepzesiGomb"), ertek: "felnőttképzési" }
];

// Aktuálisan kiválasztott szűrők. A "null" érték mindkét esetben
// azt jelenti, hogy az adott szempont szerint nincs szűrés ("Mind").
let aktualisVaros = null;
let aktualisJogviszony = null;


// A jogviszony mező néha összetett (pl. "tanulói-, felnőttképzési
// jogviszony"), ezért nem egyenlőségre, hanem részszöveg-egyezésre
// vizsgálunk, hogy az ilyen, több jogviszonyt is felkínáló képzések
// mindkét szűrőnél megjelenjenek.
function jogviszonyMegfelel(kepzes) {
    return aktualisJogviszony
        ? kepzes.jogviszony.includes(aktualisJogviszony)
        : true;
}


function varosMegfelel(kepzes) {
    return aktualisVaros
        ? kepzes.varos === aktualisVaros
        : true;
}


// Egy gombcsoporton belül beállítja, melyik gomb számít aktívnak
// (ez adja a vizuális kijelölést mindkét gombsoron egységesen).
function aktivGombBeallitasa(gombCsoport, kivalasztottErtek) {
    gombCsoport.forEach(({ gomb, ertek }) => {
        gomb.classList.toggle("aktiv", ertek === kivalasztottErtek);
    });
}


function megjelenit() {

    TAROLO.innerHTML = "";

    const SZURT_KEPZESEK = KEZPESEK.filter(
        kepzes => varosMegfelel(kepzes) && jogviszonyMegfelel(kepzes)
    );

    // Ha a szűrésnek egyetlen képzés sem felel meg, elrejtjük a
    // (üres) kártyalistát, és megjelenítünk egy erről tájékoztató
    // üzenetet a felhasználónak.
    if (SZURT_KEPZESEK.length === 0) {
        TAROLO.hidden = true;
        NINCS_TALALAT.hidden = false;
        return;
    }

    TAROLO.hidden = false;
    NINCS_TALALAT.hidden = true;

    SZURT_KEPZESEK.forEach(kepzes => {

        TAROLO.innerHTML += `
            <article class="kepzes-kartya">
                <h2>${kepzes.nev}</h2>

                <p>
                    Település: ${kepzes.varos}
                </p>

                <p>
                    Ágazat: ${kepzes.agazat}
                </p>

                <p>
                    Jogviszony: ${kepzes.jogviszony}
                </p>

                <p>
                    Azonosító: ${kepzes.azonosito}
                </p>
            </article>
        `;

    });
}


// Mindkét gombcsoportra ugyanazt az egységes logikát kötjük fel:
// kattintáskor beállítjuk a megfelelő szűrő-állapotot, kiemeljük az
// aktív gombot a csoportban, majd újrarajzoljuk a listát.
VAROS_GOMBOK.forEach(({ gomb, ertek }) => {
    gomb.addEventListener("click", function () {
        aktualisVaros = ertek;
        aktivGombBeallitasa(VAROS_GOMBOK, ertek);
        megjelenit();
    });
});


JOGVISZONY_GOMBOK.forEach(({ gomb, ertek }) => {
    gomb.addEventListener("click", function () {
        aktualisJogviszony = ertek;
        aktivGombBeallitasa(JOGVISZONY_GOMBOK, ertek);
        megjelenit();
    });
});


// A nav.js legördülő menüjében a "Budapest" / "Kazincbarcika" linkek
// szakmaink.html?varos=Budapest (ill. ...Kazincbarcika) URL-re mutatnak,
// ilyenkor csak az adott település képzéseit mutatjuk betöltéskor, és
// a megfelelő gombot is aktívként jelöljük.
//
// Ha viszont közvetlenül a "Szakmáink" linkre kattintunk (nincs "varos"
// paraméter az URL-ben), az összes képzést megjelenítjük betöltéskor,
// a "Mind" gomb marad aktív.
const URL_PARAMETEREK = new URLSearchParams(window.location.search);
const URL_VAROS = URL_PARAMETEREK.get("varos");

if (URL_VAROS === "Budapest" || URL_VAROS === "Kazincbarcika") {
    aktualisVaros = URL_VAROS;
    aktivGombBeallitasa(VAROS_GOMBOK, URL_VAROS);
}

megjelenit();
