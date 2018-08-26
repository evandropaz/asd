import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Inscricao from '@/components/Inscricao'
import Painel from '@/components/Painel'
import Login from '@/components/Login'
import auth from './auth.js'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/inscricao',
    name: 'Inscricao',
    component: Inscricao
  },
  {
    path: '/painel',
    name: 'Painel',
    component: Painel
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.middlewareAuth)) {
    if (!auth.check()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })

      return
    }
  }

  next()
})
export default router
