/**
 * It's recommended to write router related code inside a separate file called router.js and add it to the Vue application
 * inside the main.js
 */
import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

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
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '/',  // Nested roots: refer to <router-view> in @/views/App.vue
        redirect: '/dashboard',
        component: Layout,
        children: [
            {
                path: 'dashboard', // Nested roots - children roots: refer to <router-view> in @/layout/AppMain.vue
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'dashboard', affix: true}
            }
        ]
    },
    {
        path: 'https://www.bing.com',
        hidden: false,
        children: [],
        name: 'test'
    },
    {
        path: '/error',
        component: Layout,
        name: 'ErrorPages',
        meta: {
            title: 'Error Pages',
            icon: '404'
        },
        children: [
            {
                path: '401',
                component: () => import('@/views/error-page/401'),
                name: 'Page401',
                meta: {title: '401', noCache: true}
            },
            {
                path: '404',
                component: () => import('@/views/error-page/404'),
                name: 'Page404',
                meta: {title: '404', noCache: true}
            }
        ]
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