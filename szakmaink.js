import { KEZPESEK } from "./adatok.js";

const BUDAPEST_GOMB = document.querySelector("#budapestGomb");
const KAZINCBARCIKA_GOMB = document.querySelector("#kazincbarcikaGomb");
const TAROLO = document.querySelector("#kepzesek");


function megjelenit(varos) {

    TAROLO.innerHTML = "";

    // Ha nincs megadva város (pl. közvetlenül a "Szakmáink" linkre kattintva,
    // szűrés nélkül nyitjuk meg az oldalt), az összes képzést megjelenítjük.
    const SZURT_KEPZESEK = varos
        ? KEZPESEK.filter(kepzes => kepzes.varos === varos)
        : KEZPESEK;

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
    megjelenit("Budapest");
});


KAZINCBARCIKA_GOMB.addEventListener("click", function () {
    megjelenit("Kazincbarcika");
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
    megjelenit(URL_VAROS);
} else {
    megjelenit();
}
