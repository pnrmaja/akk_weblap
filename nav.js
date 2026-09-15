// Közös navigáció – minden oldal ezt a modult tölti be, így a menü
// egy helyen (itt) karbantartható, nem kell minden HTML-ben duplikálni.

const NAV_HTML = `
<ul class="menu">

    <li>
        <a href="index.html">Főoldal</a>
    </li>

    <li class="dropdown">

        <a href="#">Rólunk ▾</a>

        <ul class="dropdown-menu">

            <li>
                <a href="bemutatkozas.html">Bemutatkozás</a>
            </li>

            <li>
                <a href="#">Képzőközpontunk</a>
            </li>

        </ul>

    </li>

    <li class="dropdown">

        <a href="#">Képzéseink ▾</a>

        <ul class="dropdown-menu">

            <!-- SZAKMÁINK -->
            <li class="dropdown-submenu">

                <a href="szakmaink.html">Szakmáink ▸</a>

                <ul class="dropdown-menu">

                    <li>
                        <a href="szakmaink.html?varos=Budapest">
                            Budapest
                        </a>
                    </li>

                    <li>
                        <a href="szakmaink.html?varos=Kazincbarcika">
                            Kazincbarcika
                        </a>
                    </li>

                </ul>

            </li>

        </ul>

    </li>

    <li class="dropdown">

        <a href="dualisKepzes.html">Duális képzés ▾</a>

        <ul class="dropdown-menu">

            <li>
                <a href="dualisKepzes.html">A duális képzésről</a>
            </li>

            <li>
                <a href="partnereink.html">Partnervállalatok</a>
            </li>

            <!-- ALAP DOKUMENTUMOK -->
            <li class="dropdown-submenu">

                <a href="#">Alap Dokumentumok ▸</a>

                <ul class="dropdown-menu">

                    <li>
                        <a href="#">Munkaszerződés</a>
                    </li>

                    <li>
                        <a href="egyuttmukodesi-megallapodas.html">
                            Együttműködési megállapodás minta
                        </a>
                    </li>

                </ul>

            </li>

        </ul>

    </li>

    <li>
        <a href="#">Kapcsolat</a>
    </li>

</ul>
`;

export function aktualisLinkKiemelese(nav) {
    const aktualisOldal = window.location.pathname.split("/").pop() || "index.html";

    // Az összes menülinket megnézzük (nem csak a legfelső szintűeket),
    // hogy a legördülő almenükben lévő oldalak (pl. Bemutatkozás, Szakmáink)
    // is megkapják az "aktiv" jelölést, amikor épp azon az oldalon vagyunk.
    nav.querySelectorAll(".menu a").forEach(link => {
        const href = link.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        // A href lehet query stringes is (pl. szakmaink.html?varos=Budapest),
        // ezért csak az elérési út (a "?" előtti rész) alapján hasonlítunk.
        const linkOldal = href.split("?")[0];

        if (linkOldal === aktualisOldal) {
            link.classList.add("aktiv");
        }
    });
}

export function navBetoltese(helyfoglaloId = "nav-placeholder") {
    const helyfoglalo = document.querySelector(`#${helyfoglaloId}`);

    if (!helyfoglalo) {
        console.warn(`Nem található "#${helyfoglaloId}" elem a navigáció betöltéséhez.`);
        return;
    }

    helyfoglalo.innerHTML = NAV_HTML;
    aktualisLinkKiemelese(helyfoglalo);
}

// A modul importálásakor automatikusan be is tölti a navigációt,
// így külön hívás nélkül is működik minden oldalon.
navBetoltese();
