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
        banner:  require('./assets/images//articles/ketting.jpg'),
        category: "onderhoudArtikelen",
        icon: 'motorbike',
        link: '/articles/ketting',
        text1: 'Het onderhoud van de aandrijfketting wordt veelal beschouwd als een vervelende klus. Maar de ketting verdient juist een liefdevolle verzorging. \nZij moet elke dag de enorme koppels aankunnen waarmee de motor aan haar trekt en zij wordt voortdurend blootgesteld aan vocht en vuil. Zij wrijft zich letterlijk stuk voor ons. Bovendien is de kettingaandrijving nog steeds de meest eenvoudige manier om een motor aan te drijven.',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "DIY Banden checken!",
        banner:  require('./assets/images//articles/banden.jpg'),
        category: "onderhoudArtikelen",
        icon: 'hammer-screwdriver',
        link: '/articles/ketting',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "ketting smeren als een baas",
        banner:  require('./assets/images//articles/ketting.jpg'),
        category: "onderhoudArtikelen",
        icon: 'motorbike',
        link: '/articles/ketting',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "DIY Banden checken!",
        banner:  require('./assets/images//articles/banden.jpg'),
        category: "onderhoudArtikelen",
        icon: 'hammer-screwdriver',
        link: '/articles/ketting',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "Remmen is angst",
        banner:  require('./assets/images/articles/remmen.jpg'),
        category: "rijvaardigheidArtikelen",
        icon: 'road-variant',
        link: '/articles/rijvaardigheid/',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "Circuit ballerina",
        banner:  require('./assets/images/articles/circuit.jpg'),
        category: "rijvaardigheidArtikelen",
        icon: 'flag-checkered',
        link: '/articles/rijvaardigheid/',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "Helm kiezen",
        banner:  require('./assets/images/articles/helm.jpg'),
        category: "adviesArtikelen",
        icon: 'racing-helmet',
        link: '/articles/advies/',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "ATGAT??",
        banner:  require('./assets/images/articles/atgat.jpg'),
        category: "adviesArtikelen",
        icon: 'racing-helmet',
        link: '/articles/advies/',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "AVB pro tips",
        banner:  require('./assets/images/articles/rijbewijs.jpg'),
        category: "coachingArtikelen",
        icon: 'alpha-l-box',
        link: '/articles/coaching/',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
      },
      {
        title: "Theorie tricks",
        banner:  require('./assets/images/articles/rijbewijs.jpg'),
        category: "coachingArtikelen",
        icon: 'alpha-l-box',
        link: '/articles/coaching/',
        text1: 'Here is the first alinea',
        text2: 'Here is the second alinea',
        img1:  require('./assets/images//articles/ketting.jpg'),
        img2:  require('./assets/images//articles/ketting.jpg'),
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
