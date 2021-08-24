import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  
  {
    path: "/",
    name: "Home",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/details",
    name: "Details",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Details.vue")
  },
  {
    path: "/homepagina",
    name: "Homepage",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/HomePage.vue")
  },

];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;
