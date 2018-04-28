import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Project from '@/views/backend/project'
import Doc from '@/views/backend/doc'
import Code from '@/views/backend/code'
import Login from '@/components/login'

import Layout from '@/views/layout'

// 参考 https://www.easy-mock.com/

Vue.use(Router)
// 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。

let router = new Router({
  linkActiveClass: 'is-active',
  base: '/dist/',
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    /* if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    } */
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Layout,
      redirect: '/project',
      children: [
        {
          path: '/project',
          name: 'Project',
          component: Project,
          alias: '/c',
          meta: { requiresAuth: true },
          beforeEnter (to, from, next) {
            next()
          }
        },
        {
          path: '/doc/:block?',
          name: 'Doc',
          component: Doc,
          meta: { requiresAuth: false }
        },
        {
          path: '/code',
          name: 'Code',
          component: Code,
          alias: '/b',
          meta: { requiresAuth: true }
        },
        {
          path: ':id',
          redirect: '/project'
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    /* router.push({
      path: 'login'
    })
    */
    next()
  } else {
    next()
  }
})

export default router
