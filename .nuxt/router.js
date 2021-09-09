import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2de73bab = () => interopDefault(import('../pages/info.vue' /* webpackChunkName: "pages/info" */))
const _35a3d4d4 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _3e10e670 = () => interopDefault(import('../pages/penisfuck/_slug.vue' /* webpackChunkName: "pages/penisfuck/_slug" */))
const _181563a5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2de73bab,
    name: "info"
  }, {
    path: "/categories/:slug?",
    component: _35a3d4d4,
    name: "categories-slug"
  }, {
    path: "/penisfuck/:slug?",
    component: _3e10e670,
    name: "penisfuck-slug"
  }, {
    path: "/",
    component: _181563a5,
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
