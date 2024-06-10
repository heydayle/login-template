import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import { useStorage } from '@vueuse/core'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ForgotView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignUpView.vue')
    },
  ]
})

// region [middleware]
router.beforeEach((to, from, next) => {
  const authPage = ['login', 'forgot', 'sign-up']
  const isLogged = useStorage('logged', false)
  if (!isLogged.value && !authPage.includes(to.name as string)) {
    next('/')
  } else if (isLogged.value && authPage.includes(to.name as string)) {
    next('/home')
  } else next()
})
// endregion
export default router
