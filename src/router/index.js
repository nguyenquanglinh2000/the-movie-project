import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../views/Movies.vue"),
    },
    {
      path: "/moviesDetail/:id",
      name: "MovieDetail",
      component: () => import("../views/MovieDetail.vue"),
    },
    {
      path: "/coming",
      name: "Coming",
      component: () => import("../views/Coming.vue"),
    },
    {
      path: "/newMovies",
      name: "NewMovies",
      component: () => import("../views/NewMovies.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },

    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Register.vue"),
    },
  ],
});

export default router;
