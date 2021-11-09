import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _322ebe08 = () => interopDefault(import('../pages/info.vue' /* webpackChunkName: "pages/info" */))
const _c3aa6eb6 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _d5dfbc94 = () => interopDefault(import('../pages/project/_slug.vue' /* webpackChunkName: "pages/project/_slug" */))
const _7f40a874 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/info",
    component: _322ebe08,
    name: "info"
  }, {
    path: "/categories/:slug?",
    component: _c3aa6eb6,
    name: "categories-slug"
  }, {
    path: "/project/:slug?",
    component: _d5dfbc94,
    name: "project-slug"
  }, {
    path: "/",
    component: _7f40a874,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
