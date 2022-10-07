import { createWebHistory, createRouter } from "vue-router";
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";
import ChildComp1 from "./components/ChildComp1.vue";
import ChildComp2 from "./components/ChildComp2.vue";

const routes = [
  {
    path: "/firstComp/",
    name: "fc",
    component: FirstComponent,
    children: [
      { path: "childcomp1", component: ChildComp1 },
      { path: "childcomp2", component: ChildComp2 },
    ],
  },
  {
    path: "/secondComp",
    name: "sc",
    component: SecondComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
