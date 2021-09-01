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
        title: "Banden checken doe je zo!",
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
        banner:  require('./assets/images//articles/remmen.jpg'),
        category: "Rijvaardigheid",
        icon: 'road-variant',
        link: '/articles/onderhoud/'
      }
    ],
    adviesArtikelen : [
      {
        id: 1,
        title: "Helm kiezen",
        banner:  require('./assets/images//articles/helm.jpg'),
        category: "Advies",
        icon: 'racing-helmet',
        link: '/articles/onderhoud/'
      }
    ],
    coachingArtikelen : [
      {
        id: 1,
        title: "AVB pro tips",
        banner:  require('./assets/images//articles/rijbewijs.jpg'),
        category: "Coaching",
        icon: 'alpha-l-box',
        link: '/articles/onderhoud/'
      }
    ],
    weeklyArtikelen : [
      {
        id: 1,
        title: "KTM Korte Termijn Motor?",
        banner:  require('./assets/images//articles/ktm.jpg'),
        category: "weekly",
        icon: 'hammer-screwdriver',
        link: '/articles/onderhoud/'
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
