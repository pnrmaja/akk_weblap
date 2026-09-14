import { KEZPESEK } from "./adatok.js";

const BUDAPEST = document.querySelector("#budapest");
const KAZINCBARCIKA = document.querySelector("#kazincbarcika");

const budapestiKepzesek = KEZPESEK.filter(
    kepzes => kepzes.varos === "Budapest"
);

const kazincbarcikaiKepzesek = KEZPESEK.filter(
    kepzes => kepzes.varos === "Kazincbarcika"
);

// Az index.html jelenleg nem tartalmaz #budapest / #kazincbarcika elemet,
// ezért csak akkor próbálunk beléjük írni, ha léteznek. Így a script
// nem dob hibát a főoldal betöltésekor, és amint a HTML-be bekerülnek
// ezek az elemek, a lista automatikusan megjelenik, módosítás nélkül.
if (BUDAPEST) {
    budapestiKepzesek.forEach(kepzes => {
        BUDAPEST.innerHTML += `
            <li>
                <a href="#">${kepzes.nev}</a>
            </li>
        `;
    });
} else {
    console.warn('Nem található "#budapest" elem az index.html-ben, a budapesti képzések listája nem jelenik meg.');
}

if (KAZINCBARCIKA) {
    kazincbarcikaiKepzesek.forEach(kepzes => {
        KAZINCBARCIKA.innerHTML += `
            <li>
                <a href="#">${kepzes.nev}</a>
            </li>
        `;
    });
} else {
    console.warn('Nem található "#kazincbarcika" elem az index.html-ben, a kazincbarcikai képzések listája nem jelenik meg.');
}
