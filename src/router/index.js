import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import register from '../views/registration.vue'
import borrowbooks from '../views/borrowbooks.vue'
import addbooks from '../views/addbooks.vue';
import viewborrowers from '../views/viewborrowers.vue';
Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "register",
    component: register
  },
  {
    path: "/borrowbooks",
    name: "borrowbooks",
    component: borrowbooks
  },
  {
    path: "/addbooks",
    name: "addbooks",
    component: addbooks
  },
  {
    path: "/viewborrowers",
    name: "viewborrowers",
    component: viewborrowers
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
