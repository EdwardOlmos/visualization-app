import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/script_results.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home
  },
  {
    path: "/:slug",
    name: "ResultDetails",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ResultDetails" */ "../views/ResultDetails.vue"
      ),
    beforeEnter: (to, from, next) => {
      const exists = store.results.find(
        results => results.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "notFound" });
      }
    }
  },
  {
    path: "404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
