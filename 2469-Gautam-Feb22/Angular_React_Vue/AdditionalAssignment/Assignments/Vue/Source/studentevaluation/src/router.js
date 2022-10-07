import { createWebHistory, createRouter } from 'vue-router';
import StandardList from './components/StandardList.vue';
import StudentList from './components/StudentList.vue';


const routes = [
  {
    path: '/',
    name: 'standardlist',
    component: StandardList,
    children: [
        { path: '/studentlist/:std', name:'studentlist', component: StudentList },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
