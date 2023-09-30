// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   component: () => import("@/layouts/default/Default.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "Home",
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () =>
  //         import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: "/",
  //   name: "Homepage",
  //   component: () => import("@/components/Homepage.vue"),
  // },
  {
    path: "/",
    name: "Homepage",
    component: () => import("@/components/question/Qustion1.vue"),
  },
  {
    path: "/Video0",
    name: "Video0",
    component: () => import("@/components/question/Video0.vue"),
  },
  {
    path: "/Video1",
    name: "Video1",
    component: () => import("@/components/question/Video1.vue"),
  },
  {
    path: "/Video2",
    name: "Video2",
    component: () => import("@/components/question/Video2.vue"),
  },
  /// Situation1
  {
    path: "/Situation1",
    name: "Situation1",
    component: () => import("@/components/question/Situation1.vue"),
  },
  {
    path: "/Situation1_1",
    name: "Situation1_1",
    component: () => import("@/components/question/Situation1_1.vue"),
  },
  {
    path: "/Situation1_2",
    name: "Situation1_2",
    component: () => import("@/components/question/Situation1_2.vue"),
  },
  {
    path: "/Conclusion1",
    name: "Conclusion1",
    component: () => import("@/components/question/Conclusion1.vue"),
  },

  /// Situation2
  {
    path: "/Situation2",
    name: "Situation2",
    component: () => import("@/components/question/Situation2.vue"),
  },
  {
    path: "/Situation2_1",
    name: "Situation2_1",
    component: () => import("@/components/question/Situation2_1.vue"),
  },
  {
    path: "/Situation2_2",
    name: "Situation2_2",
    component: () => import("@/components/question/Situation2_2.vue"),
  },

  {
    path: "/Conclusion2",
    name: "Conclusion2",
    component: () => import("@/components/question/Conclusion2.vue"),
  },

  /// Situation3
  {
    path: "/Situation3",
    name: "Situation3",
    component: () => import("@/components/question/Situation3.vue"),
  },
  {
    path: "/Situation3_1",
    name: "Situation3_1",
    component: () => import("@/components/question/Situation3_1.vue"),
  },
  {
    path: "/Situation3_2",
    name: "Situation3_2",
    component: () => import("@/components/question/Situation3_2.vue"),
  },

  {
    path: "/Conclusion3",
    name: "Conclusion3",
    component: () => import("@/components/question/Conclusion3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
