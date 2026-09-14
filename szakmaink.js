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