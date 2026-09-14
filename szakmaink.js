import { KEZPESEK } from "./adatok.js";

const BUDAPEST_GOMB = document.querySelector("#budapestGomb");
const KAZINCBARCIKA_GOMB = document.querySelector("#kazincbarcikaGomb");
const TAROLO = document.querySelector("#kepzesek");


function megjelenit(varos) {

    TAROLO.innerHTML = "";

    const SZURT_KEPZESEK = KEZPESEK.filter(
        kepzes => kepzes.varos === varos
    );

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
// szakmaink.html?varos=Budapest (ill. ...Kazincbarcika) URL-re mutatnak.
// Eddig ez a paraméter figyelmen kívül lett hagyva, és az oldal üresen
// töltődött be, amíg a felhasználó rá nem kattintott az egyik gombra.
// Most, ha a "varos" paraméter jelen van az URL-ben, az oldal betöltésekor
// rögtön megjelenítjük a hozzá tartozó képzéseket.
const URL_PARAMETEREK = new URLSearchParams(window.location.search);
const URL_VAROS = URL_PARAMETEREK.get("varos");

if (URL_VAROS === "Budapest" || URL_VAROS === "Kazincbarcika") {
    megjelenit(URL_VAROS);
}
