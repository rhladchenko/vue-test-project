import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import('../views/Login')
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('../views/Register'),
    meta: { layout: "empty" }
  },
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import('../views/Home.vue')
  },
  {
    path: "/history",
    name: "History",
    meta: { layout: "main" },
    component: () => import("../views/History")
  },
  {
    path: "/planning",
    name: "Planning",
    meta: { layout: "main" },
    component: () => import("../views/Planning")
  },
  {
    path: "/record",
    name: "Record",
    meta: { layout: "main" },
    component: () => import("../views/Record")
  },
  {
    path: "/categories",
    name: "Categories",
    meta: { layout: "main" },
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    meta: { layout: "main" },
    component: () => import("../views/Detail")
  },

  {
    path: "/profile",
    name: "Profile",
    meta: { layout: "main" },
    component: () => import("../views/Profile")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
