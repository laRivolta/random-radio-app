import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/ui/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/ui/pages/About.vue")
  },
  {
    path: "/category/:category/:radioStationId",
    name: "ChannelPage",
    component: () =>
      import(/* webpackChunkName: "channelpage" */ "@/ui/pages/ChannelPage.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "@/ui/pages/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
