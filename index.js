import { KEZPESEK } from "./adatok.js";

const BUDAPEST = document.querySelector("#budapest");
const KAZINCBARCIKA = document.querySelector("#kazincbarcika");

const budapestiKepzesek = KEZPESEK.filter(
    kepzes => kepzes.varos === "Budapest"
);

const kazincbarcikaiKepzesek = KEZPESEK.filter(
    kepzes => kepzes.varos === "Kazincbarcika"
);

budapestiKepzesek.forEach(kepzes => {
    BUDAPEST.innerHTML += `
        <li>
            <a href="#">${kepzes.nev}</a>
        </li>
    `;
});

kazincbarcikaiKepzesek.forEach(kepzes => {
    KAZINCBARCIKA.innerHTML += `
        <li>
            <a href="#">${kepzes.nev}</a>
        </li>
    `;
});