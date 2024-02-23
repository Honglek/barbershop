import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Services from "../views/Services";
import Gallery from "../views/Gallery";
import Contact from "../views/Contact";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    meta: {
      title: "Services",
    },
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
    meta: {
      title: "Gallery",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, form) => {
  document.title = to.meta?.title ?? "BarberShop";
});
export default router;
