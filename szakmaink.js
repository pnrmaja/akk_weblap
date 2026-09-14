import { KEZPESEK } from "./adatok.js";

const BUDAPEST_GOMB = document.querySelector("#budapestGomb");
const KAZINCBARCIKA_GOMB = document.querySelector("#kazincbarcikaGomb");

const MINDEN_JOGVISZONY_GOMB = document.querySelector("#mindenJogviszonyGomb");
const TANULOI_GOMB = document.querySelector("#tanuloiGomb");
const FELNOTTKEPZESI_GOMB = document.querySelector("#felnottkepzesiGomb");

const TAROLO = document.querySelector("#kepzesek");

// Aktuálisan kiválasztott szűrők. A "varos" kezdetben null (nincs
// városra szűrés, hacsak az URL nem ír elő mást - lásd lentebb),
// a "jogviszony" pedig alapból "mind".
let aktualisVaros = null;
let aktualisJogviszony = "mind";


// A jogviszony mező néha összetett (pl. "tanulói-, felnőttképzési
// jogviszony"), ezért nem egyenlőségre, hanem részszöveg-egyezésre
// vizsgálunk, hogy az ilyen, több jogviszonyt is felkínáló képzések
// mindkét szűrőnél megjelenjenek.
function jogviszonyMegfelel(kepzes) {

    if (aktualisJogviszony === "mind") {
        return true;
    }

    if (aktualisJogviszony === "tanulói") {
        return kepzes.jogviszony.includes("tanulói");
    }

    if (aktualisJogviszony === "felnőttképzési") {
        return kepzes.jogviszony.includes("felnőttképzési");
    }

    return true;
}


function aktivGombBeallitasa(gombCsoport, aktivGomb) {
    gombCsoport.forEach(gomb => gomb.classList.remove("aktiv"));
    aktivGomb.classList.add("aktiv");
}


function megjelenit() {

    TAROLO.innerHTML = "";

    const SZURT_KEPZESEK = KEZPESEK.filter(kepzes => {

        const varosMegfelel = aktualisVaros
            ? kepzes.varos === aktualisVaros
            : true;

        return varosMegfelel && jogviszonyMegfelel(kepzes);
    });

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


BUDAPEST_GOMB.addEventListener("click", function () {
    aktualisVaros = "Budapest";
    megjelenit();
});


KAZINCBARCIKA_GOMB.addEventListener("click", function () {
    aktualisVaros = "Kazincbarcika";
    megjelenit();
});


MINDEN_JOGVISZONY_GOMB.addEventListener("click", function () {
    aktualisJogviszony = "mind";
    aktivGombBeallitasa(
        [MINDEN_JOGVISZONY_GOMB, TANULOI_GOMB, FELNOTTKEPZESI_GOMB],
        MINDEN_JOGVISZONY_GOMB
    );
    megjelenit();
});


TANULOI_GOMB.addEventListener("click", function () {
    aktualisJogviszony = "tanulói";
    aktivGombBeallitasa(
        [MINDEN_JOGVISZONY_GOMB, TANULOI_GOMB, FELNOTTKEPZESI_GOMB],
        TANULOI_GOMB
    );
    megjelenit();
});


FELNOTTKEPZESI_GOMB.addEventListener("click", function () {
    aktualisJogviszony = "felnőttképzési";
    aktivGombBeallitasa(
        [MINDEN_JOGVISZONY_GOMB, TANULOI_GOMB, FELNOTTKEPZESI_GOMB],
        FELNOTTKEPZESI_GOMB
    );
    megjelenit();
});


// A nav.js legördülő menüjében a "Budapest" / "Kazincbarcika" linkek
// szakmaink.html?varos=Budapest (ill. ...Kazincbarcika) URL-re mutatnak,
// ilyenkor csak az adott település képzéseit mutatjuk betöltéskor.
//
// Ha viszont közvetlenül a "Szakmáink" linkre kattintunk (nincs "varos"
// paraméter az URL-ben), az összes képzést megjelenítjük betöltéskor,
// nem kell külön gombra kattintani.
const URL_PARAMETEREK = new URLSearchParams(window.location.search);
const URL_VAROS = URL_PARAMETEREK.get("varos");

if (URL_VAROS === "Budapest" || URL_VAROS === "Kazincbarcika") {
    aktualisVaros = URL_VAROS;
}

megjelenit();
