import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Forms from "./views/Forms.vue";
import Location from "./views/Location.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/forms",
      name: "forms",
      component: Forms
    },
    {
      path: "/location",
      name: "location",
      component: Location
    },
    {
      path: "/*",
      redirect: {
        path: "/",
        name: "home",
        component: Home
      }
    }
  ]
});

export default router;
