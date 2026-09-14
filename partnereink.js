const PARTNEREK = [
    "C.S. Informatikai Rendszerek Kft.",
    "Invitech",
    "Herman Ottó Intézet Nonprofit Kft.",
    "Lanmen",
    "Benkő István Általános Iskola és Gimnázium",
    "Nemzeti Élelmiszerlánc-biztonsági Hivatal",
    "ACE Network Zrt.",
    "Tree Rendszerház Kft.",
    "NeO Rendszerház Kft.",
    "Wildom Kft.",
    "PaGeTo IT Kft.",
    "Poli Computer PC Kft.",
    "Prémium Egészségpénztár",
    "NISZ Zrt.",
    "Budapest Gyógyfürdői és Hévizei Zrt.",
    "FLORCONTROLL-SERVICE Kft.",
    "SZÁMALK-Szalézi Technikum és Szakgimnázium",
    "MOL Campus",
    "Német Iskola",
    "Prompt",
    "Mária Rádió",
    "Hungaropharma",
    "AVKF",
    "Foxpost"
];


const TURISZTIKAI_HELYSZINEK = [
    {
        nev: "Pasaréti Közösségi Ház",
        link: "https://pasaretikozossegihaz.hu/"
    },
    {
        nev: "Mátyás-templom",
        link: "https://matyas-templom.hu/"
    },
    {
        nev: "Szent István Bazilika",
        link: "https://www.bazilika.biz/hu"
    },
    {
        nev: "D50",
        link: "https://www.d50.hu/"
    },
    {
        nev: "Esztergomi Bazilika",
        link: "https://bazilika-esztergom.hu/"
    },
    {
        nev: "Szent Adalbert",
        link: "https://www.szentadalbert.hu/hu/index.php/hu/"
    },
    {
        nev: "Prímás Pince",
        link: "https://www.primaspince.hu/hu/index.php/hu/"
    },
    {
        nev: "Visit Esztergom-Budapest",
        link: "https://www.visitesztergom-budapest.hu/"
    }
];


const PARTNER_ELEM = document.querySelector("#partnerek");

PARTNEREK.forEach((partner) => {

    PARTNER_ELEM.innerHTML += `
        <li>
            ${partner}
        </li>
    `;

});


const TURISZTIKAI_ELEM = document.querySelector("#turisztikai-helyszinek");

TURISZTIKAI_HELYSZINEK.forEach((helyszin) => {

    TURISZTIKAI_ELEM.innerHTML += `
        <li>
            <a href="${helyszin.link}" target="_blank">
                ${helyszin.nev}
            </a>
        </li>
    `;

});