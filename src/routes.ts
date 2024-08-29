import { createRouter, createWebHashHistory } from "vue-router";
const Home = () => import("./pages/Home.vue");
const QuizPage = () => import("./pages/QuizPage.vue");
const QuizList = () => import("./pages/QuizList.vue");
const RulesPage = () => import("./pages/RulesPage.vue");
const RandomWheel = () => import("./pages/RandomWheel.vue");

const routes = [
  { path: "/", component: Home },
  {
    path: "/rules",
    component: RulesPage,
  },
  {
    path: "/random_wheel",
    component: RandomWheel,
  },
  {
    path: "/quiz_list",
    component: QuizList,
  },
  {
    path: "/quiz/:id",
    component: QuizPage,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
