import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/protected',
      name: 'protected',
      component: () => import('../views/ProtectedView.vue'),
      beforeEnter(to,from,next){
        if(localStorage.getItem("user")){
          next()
        }
        else{
          next({
            name:"home"
          })
        }
      }
    }
  ]
})

export default router
