import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { id: 0, name: "Electronica", path: "electronica", src: "" },
      { id: 1, name: "Hits", path: "hits", src: "" },
      { id: 2, name: "Past decades", path: "past_decades", src: "" },
      { id: 3, name: "Rock & friends", path: "rock&friends", src: "" },
      { id: 4, name: "Relax", path: "relax", src: "" },
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
