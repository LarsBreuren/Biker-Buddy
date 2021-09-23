import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
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
  },
  articles: {
    onderhoudArtikelen : [
      {
        id: 1,
        title: "ketting smeren als een baas",
        banner:  require('./assets/images//articles/ketting.jpg'),
        category: "Onderhoud",
        icon: 'motorbike',
        link: '/articles/ketting'
      },
      {
        id: 2,
        title: "DIY Banden checken!",
        banner:  require('./assets/images//articles/banden.jpg'),
        category: "Rijvaardigheid",
        icon: 'hammer-screwdriver',
        link: '/articles/ketting'
      },
      {
        id: 3,
        title: "ketting smeren als een baas",
        banner:  require('./assets/images//articles/ketting.jpg'),
        category: "Onderhoud",
        icon: 'motorbike',
        link: '/articles/ketting'
      },
      {
        id: 4,
        title: "DIY Banden checken!",
        banner:  require('./assets/images//articles/banden.jpg'),
        category: "Rijvaardigheid",
        icon: 'hammer-screwdriver',
        link: '/articles/ketting'
      }
    ],
    rijvaardigheidArtikelen : [
      {
        id: 1,
        title: "Remmen is angst",
        banner:  require('./assets/images/articles/remmen.jpg'),
        category: "Rijvaardigheid",
        icon: 'road-variant',
        link: '/articles/rijvaardigheid/'
      },
      {
        id: 2,
        title: "Circuit ballerina",
        banner:  require('./assets/images/articles/circuit.jpg'),
        category: "Rijvaardigheid",
        icon: 'flag-checkered',
        link: '/articles/rijvaardigheid/'
      }
    ],
    adviesArtikelen : [
      {
        id: 1,
        title: "Helm kiezen",
        banner:  require('./assets/images/articles/helm.jpg'),
        category: "Advies",
        icon: 'racing-helmet',
        link: '/articles/advies/'
      },
      {
        id: 1,
        title: "ATGAT??",
        banner:  require('./assets/images/articles/atgat.jpg'),
        category: "Advies",
        icon: 'racing-helmet',
        link: '/articles/advies/'
      }
    ],
    coachingArtikelen : [
      {
        id: 1,
        title: "AVB pro tips",
        banner:  require('./assets/images/articles/rijbewijs.jpg'),
        category: "Coaching",
        icon: 'alpha-l-box',
        link: '/articles/coaching/'
      },
      {
        id: 1,
        title: "Theorie tricks",
        banner:  require('./assets/images/articles/rijbewijs.jpg'),
        category: "Coaching",
        icon: 'alpha-l-box',
        link: '/articles/coaching/'
      }
    ],
    weeklyArtikelen : [
      // {
      //   id: 1,
      //   title: "KTM Korte Termijn Motor?",
      //   banner:  require('./assets/images//articles/ktm.jpg'),
      //   category: "weekly",
      //   icon: 'hammer-screwdriver',
      //   link: '/articles/onderhoud/'
      // }
      {
        id: 1,
        title: "Motor keuze hulp",
        banner:  require('./assets/images//articles/keuze.jpg'),
        category: "weekly",
        icon: 'motorbike',
        link: '/bikepicker'
      }
    ],
  }

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
    updatedriverScore (state, driverScore) {
      state.driverScore = driverScore
    },
    updatePrios (state, prio) {
      state.prio = prio
    }
  },
  actions: {
 
  },
  modules: {}
});
