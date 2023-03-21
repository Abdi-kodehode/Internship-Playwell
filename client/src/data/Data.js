export const Courses = [
  {
    id: 1,
    name: "Fortnite",
    image: require("../assets/cards/fortnite.webp"),
    day1: "Mandag",
    day2: "Fredag",
    time1: "20:30",
    time2: "19:30",
  },
  {
    id: 2,
    name: "Minecraft",
    image: require("../assets/cards/minecraft.webp"),
    day1: "Mandag",
    day2: "Fredag",
    time1: "20:30",
    time2: "19:30",
  },
  {
    id: 3,
    name: "GamingKlubb",
    image: require("../assets/cards/roblox.webp"),
    day1: "Mandag",
    day2: "Fredag",
    time1: "20:30",
    time2: "19:30",
  },
  {
    id: 4,
    name: "Scratch",
    image: require("../assets/cards/scratch.webp"),
    day1: "Mandag",
    day2: "Fredag",
    time1: "20:30",
    time2: "19:30",
  },
];
export const Tournaments = [
  {
    id: 1,
    name: "Fortnite Turnering",
    image: require("../assets/cards/fortnite-t.webp"),
    text: "Vi vil gjerne invitere deg til Fortnite turneringen som finner sted på 12.12.22 ​​kl 20:30.Mer informasjon på Discord.",
  },
  {
    id: 2,
    name: "Fifa",
    image: require("../assets/cards/fifa23.webp"),
    text: "Vi vil gjerne invitere deg til Fifa23 turneringen som finner sted på 18.12.22 ​​kl 20:30.Mer informasjon på Discord.",
  },
  {
    id: 3,
    name: "Rocket League",
    image: require("../assets/cards/rocket-t.webp"),
    text: "Vi vil gjerne invitere deg til RL turneringen som finner sted på 17.12.22 ​​kl 17:30.Mer informasjon på Discord.",
  },
  {
    id: 4,
    name: "Scratch",
    image: require("../assets/cards/koding.webp"),
    text: "Sammen med Jobloop arrangerer vi en scratch konkurranse. Hovedpremien vil være 1000kr. Mer informasjon på Discord.",
  },
];

export const Vod = [
  {
    id: 1,
    url: "watch?v=WJW-bzXZM8M&ab_channel=PlayStation",
  },
  {
    id: 2,
    url: "watch?v=SgSX3gOrj60&ab_channel=GameSpotTrailers",
  },
  {
    id: 3,
    url: "watch?v=6ofHiea__hU&ab_channel=ScratchTeam",
  },
  {
    id: 4,
    url: "watch?v=GXr5glhGkzE&ab_channel=Minecraft",
  },
];
export const CoursesDescriptions = [
  {
    fortnite:
      "Fortnite-kurset er designet for å hjelpe spillere med å forbedre sine taktiske ferdigheter, bevegelse og nøyaktighet i spillet. Under klassene vil erfarne spillere dele verdifulle tips og triks. I tillegg vil det være spillanalyse (VOD) for å hjelpe deg med å forstå hvordan du kan forbedre din spillestil. Kurset inkluderer også en pakke med kart for øving, samt tilgang til en eksklusiv Fortnite-gruppe. Du kan æke din sjanse for å vinne.",

    minecraft:
      "Vårt Minecraft-kurs gir deg muligheten til å utforske kreativiteten din og skape en ny verden. Under ledelse av våre erfarne lærere, vil du lære å bygge og utforme imponerende strukturer og skape spennende spill og aktiviteter på utvalgte kart. Minecraft Adventure gir deg muligheten til å beseire alt fra spøkelseshus til jungeleventyr. Kurset tilbyr en hyggelig atmosfære åpen for alle, der alle føler seg trygge.",

    Roblox:
      "Roblox-programmet gir deltakerne muligheten til å delta i ukentlige spillsesjoner sammen med andre spillinteresserte barn og ungdom. Deltakerne vil få instruksjon av en erfaren spillinstruktør som vil sette i gang morsomme aktiviteter og skape en sosial gaming-atmosfære. Er du interessert i å teste ut forskjellige spill, utvikle spillferdighetene dine og samtidig få en gjeng å spille med? Da er Roblox det perfekte stedet for deg.",

    koding:
      "På Discord vil vi lære deltakerne hvordan man bygger et spill ved hjelp av Scratch. Vi vil fokusere på grunnleggende programmeringskonsepter som løkker og IF-setninger, og hvordan man kan bruke dem til å bygge et spill. Deltakerne vil også lære å arbeide med variabler og funksjoner, noe som er nødvendig for å bygge et fungerende spill.Det er viktig å merke seg at å lære å kode kan åpne mange dører for unge i fremtiden.",
  },
];
export const CoursesDescriptionsMobile = [
  {
    id: 1,
    title: "Fortnite",
    description:
      "Fortnite kurset er designet for å hjelpe spillere med å forbedre sine taktiske ferdigheter , bevegelse og nøyaktighet i spillet . Under klassene vil erfarne spillere dele verdifulle tips og triks . I tillegg vil det være spillanalyse (VOD) for å hjelpe deg med å forstå hvordan du kan forbedre din spillestil . Kurset inkluderer også en pakke med kart for øving , samt tilgang til en eksklusiv Fortnite-gruppe  på Discord.",
    image: require("../assets/hero/fortnite-hero.webp"),
    border:
      "border-purple-600 border-2 border-purple-600 shadow-lg shadow-purple-600",
    link: "/fortnite",
  },
  {
    id: 2,
    title: "Minecraft",
    description:
      "Vårt Minecraft-kurs gir deg muligheten til å utforske kreativiteten din og skape en ny verden. Under ledelse av våre erfarne lærere, vil du lære å bygge og utforme imponerende strukturer og skape spennende spill og aktiviteter på utvalgte kart. Minecraft Adventure gir deg muligheten til å beseire alt fra spøkelseshus til jungeleventyr. Kurset tilbyr en hyggelig atmosfære åpen for alle.Bli med oss !",
    image: require("../assets/minecraft-course.webp"),
    border:
      "border-purple-600 border-2 border-green-400 shadow-lg shadow-green-400",
    link: "/minecraft",
  },
  {
    id: 3,
    title: "Roblox",
    description:
      "Roblox-programmet gir deltakerne muligheten til å delta i ukentlige spillsesjoner sammen med andre spillinteresserte barn og ungdom . Deltakerne vil få instruksjon av en erfaren spillinstruktør som vil sette i gang morsomme aktiviteter og skape en sosial gaming-atmosfære . Er du interessert i å teste ut forskjellige spill , utvikle spillferdighetene dine ? Da er Roblox det perfekte stedet for deg ! Bli med oss !",
    image: require("../assets/rocket-league2.webp"),
    border:
      "border-purple-600 border-2 border-pink-600 shadow-lg shadow-pink-600",
    link: "/roblox",
  },
  {
    id: 4,
    title: "Koding",
    description:
      "På Discord vil vi lære deltakerne hvordan man bygger et spill ved hjelp av Scratch. Vi vil fokusere på grunnleggende konsepter som løkker og IF-setninger, og hvordan man kan bruke dem til å bygge et spill. Deltakerne vil også lære å arbeide med variabler og funksjoner, noe som er nødvendig for å bygge et fungerende spill.Det er viktig å merke seg at å lære å kode kan åpne mange dører. Bli med oss på kurs !",
    image: require("../assets/koding/scratch-hero2.webp"),
    border:
      "border-purple-600 border-2 border-orange-500 shadow-lg shadow-orange-500",
    link: "/koding",
  },
];

export const events = [
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 0, 31, 17, 0, 0),
    end: new Date(2023, 0, 31, 19, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 1, 7, 17, 0, 0),
    end: new Date(2023, 1, 7, 19, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 1, 14, 17, 0, 0),
    end: new Date(2023, 1, 14, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 1, 21, 17, 0, 0),
    end: new Date(2023, 1, 21, 20, 0, 0),
    colorEvent: "brown",
    color: "white",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 1, 28, 17, 0, 0),
    end: new Date(2023, 1, 28, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 2, 7, 17, 0, 0),
    end: new Date(2023, 2, 7, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 2, 14, 17, 0, 0),
    end: new Date(2023, 2, 14, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 2, 21, 17, 0, 0),
    end: new Date(2023, 2, 21, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 2, 28, 17, 0, 0),
    end: new Date(2023, 2, 28, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 3, 4, 17, 0, 0),
    end: new Date(2023, 3, 4, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 3, 11, 17, 0, 0),
    end: new Date(2023, 3, 11, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 3, 18, 17, 0, 0),
    end: new Date(2023, 3, 18, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 3, 25, 17, 0, 0),
    end: new Date(2023, 3, 25, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 4, 2, 17, 0, 0),
    end: new Date(2023, 4, 2, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 4, 9, 17, 0, 0),
    end: new Date(2023, 4, 9, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 4, 16, 17, 0, 0),
    end: new Date(2023, 4, 16, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 4, 23, 17, 0, 0),
    end: new Date(2023, 4, 23, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 4, 30, 17, 0, 0),
    end: new Date(2023, 4, 30, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Minecraft 17:00",
    allDay: false,
    start: new Date(2023, 5, 6, 17, 0, 0),
    end: new Date(2023, 5, 6, 20, 0, 0),
    colorEvent: "brown",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 1, 1, 17, 0, 0),
    end: new Date(2023, 1, 1, 19, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 1, 8, 17, 0, 0),
    end: new Date(2023, 1, 8, 19, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 1, 15, 17, 0, 0),
    end: new Date(2023, 1, 15, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 1, 22, 17, 0, 0),
    end: new Date(2023, 1, 22, 20, 0, 0),
    colorEvent: "purple",
    color: "white",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 2, 1, 17, 0, 0),
    end: new Date(2023, 2, 1, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 2, 8, 17, 0, 0),
    end: new Date(2023, 2, 8, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 2, 15, 17, 0, 0),
    end: new Date(2023, 2, 15, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 2, 22, 17, 0, 0),
    end: new Date(2023, 2, 22, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 2, 29, 17, 0, 0),
    end: new Date(2023, 2, 29, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 3, 5, 17, 0, 0),
    end: new Date(2023, 3, 5, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 3, 12, 17, 0, 0),
    end: new Date(2023, 3, 12, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 3, 19, 17, 0, 0),
    end: new Date(2023, 3, 19, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 3, 26, 17, 0, 0),
    end: new Date(2023, 3, 26, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 4, 3, 17, 0, 0),
    end: new Date(2023, 4, 3, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 4, 10, 17, 0, 0),
    end: new Date(2023, 4, 10, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 4, 17, 17, 0, 0),
    end: new Date(2023, 4, 17, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 4, 24, 17, 0, 0),
    end: new Date(2023, 4, 24, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 4, 31, 17, 0, 0),
    end: new Date(2023, 4, 31, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 5, 7, 17, 0, 0),
    end: new Date(2023, 5, 7, 20, 0, 0),
    colorEvent: "purple",
  },
  {
    title: "Fortnite 17:00",
    allDay: false,
    start: new Date(2023, 5, 14, 17, 0, 0),
    end: new Date(2023, 5, 14, 20, 0, 0),
    colorEvent: "purple",
  },
];
export const Instructors = [
  {
    id: 1,
    image: require("../assets/team/mustazico.webp"),
    border: "border-indigo-700 shadow-xl shadow-indigo-700",
    background: "border-indigo-700 bg-indigo-700",
    name: "Mustazico",
    game: "Fortnite",
    position: "Kursleder",
  },
  {
    id: 2,
    image: require("../assets/team/bidnis.webp"),
    border: "border-teal-700 shadow-xl shadow-teal-700",
    background: "border-teal-700 bg-teal-500",
    name: "Bidniss",
    game: "Minecraft",
    position: "Gamingklubb",
  },
  {
    id: 3,
    image: require("../assets/team/karbo.webp"),
    border: "border-yellow-700 shadow-xl shadow-yellow-700",
    background: "border-yellow-500 bg-yellow-500",
    name: "Karbo",
    game: "Fortnite",
    position: "Kursleder",
  },

  {
    id: 4,
    image: require("../assets/team/pad.webp"),
    border: "border-blue-700 shadow-xl shadow-blue-700",
    background: "border-blue-700 bg-sky-700",
    name: "Pad",
    game: "Minecraft",
    position: "Gamingklubb",
  },
  {
    id: 5,
    image: require("../assets/team/tg.webp"),
    border: "border-gray-200 shadow-xl shadow-white/20",
    background: "border-white bg-white",
    name: "Pad",
    game: "Kodeklubb",
    position: "Gamingklub",
  },
];

export const Team = [
  {
    id: 1,
    image: require("../assets/team/sjur.webp"),
    border: "border-red-700 shadow-lg shadow-red-700",
    background: "border-red-700 bg-red-700",
    name: "Sjur Hovi",
    position: "Daglig Leder",
  },
  {
    id: 2,
    image: require("../assets/team/constandino.webp"),
    border: "border-teal-700 shadow-lg shadow-teal-700",
    name: "Constandino Leiva",
    position: "COO",
  },
  {
    id: 3,
    image: require("../assets/team/tamara.webp"),
    border: "border-pink-700 shadow-lg shadow-pink-700",
    name: "Tamara Alonso",
    position: "Akademileder",
  },
  {
    id: 4,
    image: require("../assets/team/eivind.webp"),
    border: "border-orange-700 shadow-lg shadow-orange-700",
    name: "Eivind Nygård",
    position: "Teknisk leder",
  },
  {
    id: 5,
    image: require("../assets/team/tom.webp"),
    border: "border-blue-700 shadow-lg shadow-blue-700",
    name: "Tom Mæland",
    position: "Hovedkursleder",
  },
  {
    id: 6,
    image: require("../assets/team/dag.webp"),
    border: "border-green-700  shadow-lg shadow-green-700",
    name: "Dag Halvard Hustad",
    position: "Kursleder",
  },
  {
    id: 7,
    image: require("../assets/team/eirik.webp"),
    border: "border-purple-700 shadow-lg shadow-purple-700",
    name: "Eiriki Brakstad",
    position: "Kursleder",
  },
  {
    id: 8,
    image: require("../assets/team/jonathan.webp"),
    border: "border-yellow-700 shadow-lg shadow-yellow-700",
    name: "Jonathan Mæhle",
    position: "Kursleder",
  },
  {
    id: 9,
    image: require("../assets/team/kennet.webp"),
    border: "border-teal-500 shadow-lg shadow-teal-500",
    name: "Kennet Torgersen",
    position: "Kursleder",
  },
  {
    id: 9,
    image: require("../assets/team/alexander.png"),
    border: "border-red-900 shadow-lg shadow-red-900",
    name: "Kennet Torgersen",
    position: "Kursleder",
  },
];

export const Adress = [
  {
    id: 0,
    city: "5006 Bergen",
    street: "Thormøhlens Gate 47",
    mobile: "Mobile:928 49 699",
    email: "E-mail:kontakt@playwell.no",
    map: "http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.475151072955!2d5.309271839550781!3d60.382308499999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf954c9266e49%3A0x2030e93f70bf0f75!2sNansensenteret%2C%20Thorm%C3%B8hlens%20Gate%2047%2C%205006%20Bergen!5e0!3m2!1spl!2sno!4v1671701615917!5m2!1spl!2sno",
  },
  {
    id: 1,
    city: "0484 Oslo",
    street: "Sandakerveien 114B",
    mobile: "Mobile:955 22 301",
    email: "E-mail:kontakt@playwell.no",
    map: "http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.0624644347922!2d10.767513615826175!3d59.94769788187939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e19a556569f%3A0x51c3e3028e0843de!2sSandakerveien%20114b%2C%200484%20Oslo!5e0!3m2!1spl!2sno!4v1671704799643!5m2!1spl!2sno",
  },
  {
    id: 2,
    city: "1607 Fredrikstad",
    street: "Gunnar Nilsens gate 16",
    mobile: "Mobile:955 22 301",
    email: "E-mail:kontakt@playwell.no",
    map: "http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.1047170310799!2d10.93780291579046!3d59.21426458161871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46440327548a1673%3A0x62ebee62f30eb5e!2sTorvbyen%20Shopping%20Center!5e0!3m2!1spl!2sno!4v1671705020894!5m2!1spl!2sno",
  },
];

export const Fortnite = [
  {
    name: "Fortnite lavterskel",
    title: "Tjenestebeskrivelse",
    paragraph1: "Velkommen til vårt digitale e-sportsakademi!",
    paragraph2:
      "I dette kurset vil deltagerne ha ukentlige spilltreninger på Discord. Her blir alle deltagerne satt sammen i grupper med andre spillere med jevne ferdigheter.",
    paragraph3:
      "Deltagerne blir instruert av en erfaren Fortnite spiller som vil gi deltagerne de rette verktøyene til å utvikle seg i Fortnite. Kurset består av følgende:",
    paragraph4:
      "Er du på jakt etter utvikling av spillferdighetene dine i Fortnite, samtidig som du får en sosial gjeng å spille med? Da er dette plassen.",
    points: [
      "- Felles oppvarming i creative.",
      "- Sosialt samspill i Fortnite.",
      "- Kommunikasjon og mental trening",
      "- Grunnleggende teknikker for bygging i Fortnite",
      "-Aim trening",
    ],
    points2: [
      "Kurset gjelder:",
      "Ukentlige spilltreninger",
      "Fra 30.januar til og med 14.juni",
      "Mandager 17:00-19:00 på Discord",
      "Aldersgrense: fra 9 år",
    ],
  },
  {
    name: "Fornite Avansert",
    title: "Tjenestebeskrivelse",
    paragraph1: "Velkommen til vårt digitale e-sportsakademi!",
    paragraph2:
      "I dette kurset vil deltagerne ha ukentlige spilltreninger på Discord. Her blir alle deltagerne satt sammen i grupper med andre spillere med jevne ferdigheter.",
    paragraph3:
      "Deltagerne blir instruert av en erfaren Fortnite spiller som vil gi deltagerne de rette verktøyene til å utvikle seg i Fortnite. Kurset består av følgende:",
    paragraph4:
      "Er du på jakt etter utvikling av spillferdighetene dine i Fortnite, samtidig som du får en sosial gjeng å spille med? Da er dette plassen.",
    points: [
      "- Felles oppvarming i creative.",
      "- Sosialt samspill i Fortnite.",
      "- Kommunikasjon og mental trening",
      "- Grunnleggende teknikker for bygging i Fortnite",
      "-Aim trening",
      "- Kosthold, søvn og mental helse ",
      "- Vod-review og spillanalyse",
    ],
    points2: [
      "Kurset gjelder:",
      "Ukentlige spilltreninger",
      "Fra 30.januar til og med 14.juni",
      "Tirsdager 17:00-19:00 på Discord",
      "Aldersgrense: fra 9 år",
    ],
  },
];
