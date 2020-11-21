import Vue from "vue";
import Vuex from "vuex";

import categories from "@/ui/store/categories/index";
import radioStationLists from "@/ui/store/radioStationLists/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    categories: categories,
    radioStationLists: radioStationLists
  }
});
