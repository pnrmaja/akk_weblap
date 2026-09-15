import { DUALIS_KEPZES } from "./dualiskepzesAdatok.js";

const TAROLO = document.querySelector("#dualis-tartalom");

DUALIS_KEPZES.forEach((elem) => {

    TAROLO.innerHTML += `
        <section class="informacio">

            <h2>${elem.cim}</h2>

            <p>
                ${elem.szoveg}
            </p>

        </section>
    `;

});