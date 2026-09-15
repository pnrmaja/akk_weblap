import { KEPZOKOZPONT_ADATOK } from "./kepzokozpontAdatok.js";

const TAROLO = document.querySelector("#kepzokozpont-tartalom");

KEPZOKOZPONT_ADATOK.forEach((elem) => {

    TAROLO.innerHTML += `
        <section class="informacio">

            <h2>${elem.cim}</h2>

            <p>${elem.szoveg}</p>

        </section>
    `;

});