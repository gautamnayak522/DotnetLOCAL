import { createWebHistory, createRouter } from "vue-router";
import StudentCards from '../components/StudentCards.vue';
import StudentDetails from '../components/StudentDetails.vue';
import ResultsDetails from '../components/ResultsDetails.vue';
import FeesDetails from '../components/FeesDetails.vue';
const routes = [
  {
    path: "/",
    name: "StudentCards",
    component: StudentCards,
    children: [
      { path: "/StudentDetails/:Id", name:"StudentDetails" ,component: StudentDetails,props:true,
        children:[
            { path: "/StudentDetails/ResultsDetails/:Id", name:"ResultsDetails" ,component: ResultsDetails,props:true,},
            { path: "/StudentDetails/FeesDetails/:Id", name:"FeesDetails" ,component: FeesDetails,props:true,}
        ] },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
