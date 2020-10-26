import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { id: 0, name: "Electronica", slug: "electronica" },
      { id: 1, name: "Hits", slug: "hits" },
      { id: 2, name: "Past decades", slug: "past_decades" },
      { id: 3, name: "Rock & friends", slug: "rock&friends" },
      { id: 4, name: "Relax", slug: "relax" }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
