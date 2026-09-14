const PARTNEREK = [
    {
        nev: "C.S. Informatikai Rendszerek Kft.",
        link: "https://www.csinfo.hu/csinfo/"
    },
    {
        nev: "Invitech",
        link: "https://www.one.hu/kozep-nagyvallalatok"
    },
    {
        nev: "Herman Ottó Intézet Nonprofit Kft.",
        link: "https://www.hermanottointezet.hu/"
    },
    {
        nev: "Lanmen",
        link: "https://lanmen.hu/"
    },
    {
        nev: "Benkő István Általános Iskola és Gimnázium",
        link: "https://benkorefi.hu/"
    },
    {
        nev: "Nemzeti Élelmiszerlánc-biztonsági Hivatal",
        link: "https://portal.nebih.gov.hu/"
    },
    {
        nev: "ACE Network Zrt.",
        link: "https://acenet.tech/"
    },
    {
        nev: "Tree Rendszerház Kft.",
        link: "#"
    },
    {
        nev: "NeO Rendszerház Kft.",
        link: "http://neo-rendszerhaz.hu/"
    },
    {
        nev: "Wildom Kft.",
        link: "https://wildom.com/"
    },
    {
        nev: "PaGeTo IT Kft.",
        link: "#"
    },
    {
        nev: "Poli Computer PC Kft.",
        link: "https://www.policomputer.hu/"
    },
    {
        nev: "Prémium Egészségpénztár",
        link: "https://premiumegeszsegpenztar.hu/"
    },
    {
        nev: "NISZ Zrt.",
        link: "https://nisz.hu/"
    },
    {
        nev: "Budapest Gyógyfürdői és Hévizei Zrt.",
        link: "https://www.budapestgyogyfurdoi.hu/"
    },
    {
        nev: "FLORCONTROLL-SERVICE Kft.",
        link: "https://florcontrolltavfelugyelet.hu/"
    },
    {
        nev: "SZÁMALK-Szalézi Technikum és Szakgimnázium",
        link: "https://www.szamalk-szalezi.hu/"
    },
    {
        nev: "MOL Campus",
        link: "https://molcampus.hu/"
    },
    {
        nev: "Német Iskola",
        link: "https://nemetiskola.hu/"
    },
    {
        nev: "Prompt",
        link: "https://www.prompt.hu/"
    },
    {
        nev: "Mária Rádió",
        link: "https://www.mariaradio.hu/"
    },
    {
        nev: "Hungaropharma",
        link: "https://hungaropharma.hu/"
    },
    {
        nev: "AVKF",
        link: "https://avkf.hu//"
    },
    {
        nev: "Foxpost",
        link: "https://foxpost.hu/"
    }
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
            <a href="${partner.link}" target="_blank">
                ${partner.nev}
            </a>
        </li>
    `;

});


const TURISZTIKAI_ELEM =
    document.querySelector("#turisztikai-helyszinek");

TURISZTIKAI_HELYSZINEK.forEach((helyszin) => {

    TURISZTIKAI_ELEM.innerHTML += `
        <li>
            <a href="${helyszin.link}" target="_blank">
                ${helyszin.nev}
            </a>
        </li>
    `;

});