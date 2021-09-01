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
    rijvaardigheidArtikelen : [
      {
        id: 1,
        title: "Remmen is angst",
        banner:  require('./assets/images//articles/remmen.jpg'),
        catogory: "Rijvaardigheid",
        link: '/articles/remmen'
      }
    ],
    onderhoudArtikelen : [
      {
        id: 1,
        title: "ketting smeren als een baas",
        banner:  require('./assets/images//articles/remmen.jpg'),
        catogory: "onderhoud",
        link: '/articles/onderhoud/'
      }
    ]
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
