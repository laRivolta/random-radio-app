import Vue from "vue";
import Vuex from "vuex";

import radioStationsData from "@/ui/assets/radioStationsData.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    radioStationsData: radioStationsData
  },
  mutations: {},
  actions: {},
  modules: {}
});
