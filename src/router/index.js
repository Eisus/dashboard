/**
 * It's recommended to write router related code inside a separate file called router.js and add it to the Vue application
 * inside the main.js
 */
import Vue from 'vue'
import Router from 'vue-router'

/**
 * KeyPoint:
 * Plugins usually add global-level functionality. Use plugins by calling the Vue.use() global method.
 * This has to be done before you start your app by calling new Vue()
 **/
Vue.use(Router)

/**
 * path: relative path to the base route of web applications where you want a certain component being
 * rendered on
 * name: will be useful when referring to this particular object inside the Vue components
 * component: a Vue component will be injected into the route path assigned
 * redirect: a component route can be redirected to another route when it gets matched
 * children: an array with more routes which will be concatenated to the path whilst keeping the parent path in the url
 * params: certain info that could be passed to the component
 * meta: whenever a route are matched to the path, meta property will be useful. It is especially useful when using
 * navigation guards.
 */
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    }
];

const createRouter = ()=> new Router({
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router