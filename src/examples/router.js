import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/page1",
      component: () => import("./Page1.vue")
    },
    {
      path: "/page2",
      component: () => import("./Page2.vue")
    },
  ],
});

export default router;