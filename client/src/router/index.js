import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Search from "../components/Search.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    }
  ]
});
