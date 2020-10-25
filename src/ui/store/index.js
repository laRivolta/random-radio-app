import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { id: 0, name: "Electronica", path: "electronica" },
      { id: 1, name: "Hits", path: "hits" },
      { id: 2, name: "Past decades", path: "past_decades" },
      { id: 3, name: "Rock & friends", path: "rock&friends" },
      { id: 4, name: "Relax", path: "relax" }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
