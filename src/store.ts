import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    currentArticle : "",
    currentCategory : "",
    driverInfo: {
      Voornaam: "",
      Leeftijd: 0,
      Rijbewijs: "",
      Ervaring: 0,
      Info: []
  },
  driverScore: {
    Onderhoud: 0,
    Rijvaardigheid: 0,
    Advies: 0,
    Coaching: 0,
  },
  prio: {
    prio1: "",
    prio2: "",
    prio3: "",
  },
  driverPrefs: {
      picks : [],
      sporty : 50,
      price : 3500, 
      height: "",
      commute : [],
      comfort : "",
      fun : 50, 
      offroad: "",
  },
  perfectBike: {
    Sportbike : 0,
    Tourbike : 0,
    Scrambler : 0,
    Naked : 0,
    Supermoto : 0,
    Adventure : 0,
  },
  pickedBikes: {
    bike1: "",
    bike2: "",
    bike3: "",
  },

  bikeCats: [
    {
        id: 0,
        name: "Sportbike",
        imgLink: require('./assets/images/bikes/sportbike.jpg'),
        description: "License loser",
    },
    {
        id: 1,
        name: "Tourbike",
        imgLink: require('./assets/images/bikes/touring.jpg'),
        description: "Rustig rijden & genieten",
    },
    {
        id: 2,
        name: "Scrambler",
        imgLink: require('./assets/images/bikes/scrambler.jpg'),
        description: "Off and on road fun",
    },
    {
        id: 3,
        name: "Naked",
        imgLink: require('./assets/images/bikes/naked.jpg'),
        description: "Één met de elementen",
    },
    {
        id: 4,
        name: "Supermoto",
        imgLink: require('./assets/images/bikes/supermoto.jpg'),
        description: "BRAAAAAP",
    },
    {
        id: 5,
        name: "Adventure",
        imgLink: require('./assets/images/bikes/adventure.jpg'),
        description: "Op avontuur met de motor!",
    },
],
  articles: [
      {
        title: "ketting smeren als een baas",
        category: "onderhoudArtikelen",
        icon: 'motorbike',
        text1: 'Het onderhoud van de aandrijfketting wordt veelal beschouwd als een vervelende klus. Maar de ketting verdient juist een liefdevolle verzorging. \n\n Zij moet elke dag de enorme koppels aankunnen waarmee de motor aan haar trekt en zij wordt voortdurend blootgesteld aan vocht en vuil. Zij wrijft zich letterlijk stuk voor ons. Bovendien is de kettingaandrijving nog steeds de meest eenvoudige manier om een motor aan te drijven.',
        text2: 'De kettingaandrijving is lichter en biedt een effectievere krachtoverbrenging dan de cardanaandrijving, is ongevoeliger dan de tandriem en dus technisch nog altijd bij de tijd. Daar moeten we dan maar wat onderhoudswerk voor over hebben. Goed onderhouden gaat een ketting dubbel zo lang mee dan een verwaarloosd exemplaar en zal ook meer motorvermogen op het achterwiel overbrengen.',
        imgText: 'Je ketting heeft wat te voorduren!',
        banner:  require('./assets/images//articles/ketting.jpg'),
        img1:  require('./assets/images/articles/ketting-gif.gif'),
        img2:  require('./assets/images/articles/ketting2.jpg'),
        source: 'Louis.nl',
        sourceLink: "https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/kettenpflege"
      },
      {
        title: "Olie verversen",
        category: "onderhoudArtikelen",
        icon: 'hammer-screwdriver',
        text1: 'Motorolie behoort tot de "slijtonderdelen" van een benzinemotor. Het aantal gereden kilometers, de thermische belasting en het rijgedrag zorgen dat de smerende eigenschappen van de olie en de additieven langzaamaan afnemen. Wie lang plezier wil beleven van zijn motor, zal de olie dus graag verversen volgens de intervallen die de fabrikant opgeeft in het onderhoudshandleiding.',
        text2: 'Niets werkt zonder olie: de wrijving van de zuigers, de loopvlakken en de tandwielen zou iedere motor binnen de kortste keren vernielen. \n\n Regelmatige controle van het oliepeil is dus van levensbelang voor je tweewieler, net als regelmatig olie verversen. Want olie veroudert, raakt vervuild door metaaldeeltjes en verbrandingsresten en verliest gaandeweg zijn smerende vermogen. ',
        imgText: 'Niet je olie verwisselen direct na het rijden!',
        banner:  require('./assets/images//articles/olie.jpg'),
        img1:  require('./assets/images//articles/olie.jpg'),
        img2:  require('./assets/images//articles/olie2.jpg'),
        source: 'Louis.nl',
        sourceLink: "https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/oelwechsel"
      },
      {
        title: "Remmen is een kunst",
        category: "rijvaardigheidArtikelen",
        icon: 'road-variant',
        text1: 'Voor je de veiligheid is een goede remtechniek op de motor onmisbaar. Als je vooruit wil komen, zul je ook moeten weten hoe je moet remmen. Vanwege de balans op de motor, komt hierbij meer kijken dan bij het remmen in een auto. In deze blog lees je alles over een goede remtechniek op de motor.',
        text2: 'De rem is verbonden aan het wiel van de motor. Door de rem te gebruiken vertraag je het wiel. Die vertraging brengt de band van het wiel over op de weg waar de motor op rijdt. \n\nDe weg biedt weerstand (grip) aan de band. Hierdoor neemt de snelheid af van de motor. En zolang er meer grip is dan de hoeveelheid vertraging van het wiel, remt de motor dus af.',
        imgText: 'Pas je rijstijl aan',
        banner:  require('./assets/images/articles/remmen.jpg'),
        img1:  require('./assets/images//articles/remmen2.jpg'),
        img2:  require('./assets/images//articles/remmen.jpg'),
        source: 'derijder',
        sourceLink: "https://derijder.nl/goede-remtechniek-op-de-motor/"
      },
      {
        title: "Circuit ballerina",
        category: "rijvaardigheidArtikelen",
        icon: 'flag-checkered',
        text1: 'Weken lang kijk je er naar uit. De eerste keer dat je eindelijk mag gaan knallen of dat felbegeerde asfalt van het circuit. Maar hoe kan je je nou het beste voorbereiden op zo’n dag? Ik ga je hiermee proberen te helpen, zodat jij lekker relaxed je dag kan beginnen!',
        text2: 'Voordat we de stappen door gaan nemen is het belangrijk om een paar dingen vooraf te weten. Op ieder circuit is het mogelijk om vrij te rijden. Sommige rijders kunnen ermee wegkomen om meteen het diepe in te duiken en een eigen ritme te vinden. Heb je dit vertrouwen niet en wil jij liever eerst onder begeleiding de baan op? Boek dan gewoon een cursus waarbij ervaren instructeurs jou tips kunnen geven over jouw rijstijl, houding en andere verbeterpunten.',
        banner:  require('./assets/images/articles/circuit.jpg'),
        imgText: 'Hoe bereid ik me voor op mijn eerste circuit dag?',
        img1:  require('./assets/images//articles/circuit2.jpg'),
        img2:  require('./assets/images//articles/circuit.jpg'),
        source: 'MKC-Moto',
        sourceLink: "https://blog.motorkledingcenter.nl/hoe-bereid-me-op-eerste-circuit-dag/"
      },
      {
        title: "Helm kiezen",
        category: "adviesArtikelen",
        icon: 'racing-helmet',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        imgText: 'Niet je olie verwisselen direct na het rijden!',
        banner:  require('./assets/images/articles/helm.jpg'),
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
        source: 'Louis.nl',
        sourceLink: "https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/oelwechsel"
      },
      {
        title: "ATGAT??",
        category: "adviesArtikelen",
        icon: 'racing-helmet',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        imgText: 'Niet je olie verwisselen direct na het rijden!',
        banner:  require('./assets/images/articles/atgat.jpg'),
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
        source: 'Louis.nl',
        sourceLink: "https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/oelwechsel"
      },
      {
        title: "AVB pro tips",
        category: "coachingArtikelen",
        icon: 'alpha-l-box',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        imgText: 'Niet je olie verwisselen direct na het rijden!',
        banner:  require('./assets/images/articles/rijbewijs.jpg'),
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
        source: 'Louis.nl',
        sourceLink: "https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/oelwechsel"
      },
      {
        title: "Theorie tricks",
        category: "coachingArtikelen",
        icon: 'alpha-l-box',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        imgText: 'Niet je olie verwisselen direct na het rijden!',
        banner:  require('./assets/images/articles/rijbewijs.jpg'),
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
        source: 'Louis.nl',
        sourceLink: "https://www.louis.nl/magazin/rund-ums-bike/schraubertipps/oelwechsel"
      },
      // {
      //   title: "KTM Korte Termijn Motor?",
      //   banner:  require('./assets/images//articles/ktm.jpg'),
      //   category: "weekly",
      //   icon: 'hammer-screwdriver',
      //   link: '/articles/onderhoud/'
      // }
      {
        title: "Motor keuze hulp",
        banner:  require('./assets/images//articles/keuze.jpg'),
        category: "weekly",
        icon: 'motorbike',
        link: '/bikepicker'
      }
    ],

  },
  getters: {

  },
  mutations: {
    updatedriverInfo (state, driverInfo) {
      state.driverInfo = driverInfo
    },
    updatedriverBikePref (state, bikePrefs) {
      state.driverPrefs = bikePrefs
    },
    updatePerfectBike (state, bikeScores) {
      state.perfectBike = bikeScores
    },
    updatePickedBike (state, pickedBikes) {
      state.pickedBikes = pickedBikes
    },
    updatedriverScore (state, driverScore) {
      state.driverScore = driverScore
    },
    updatePrios (state, prio) {
      state.prio = prio
    },
    updateCurrentArticle (state, article) {
      state.currentArticle = article
    },
    updatecurrentCategory(state, category) {
      state.currentCategory= category
    },
  },
  actions: {
 
  },
  modules: {}
});
