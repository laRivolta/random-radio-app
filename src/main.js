import Vue from "vue";
import App from "@/ui/App.vue";
import router from "@/ui/router";
import store from "@/ui/store";

import vuetify from "@/ui/plugins/vuetify";
import VueLodash from "vue-lodash";
import lodash from "lodash";

Vue.config.productionTip = false;

Vue.use(VueLodash, { name: "custom", lodash: lodash });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
