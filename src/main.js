import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

/**
 * KeyPoint
 * Global style should be imported here
 */
import '@/styles/mainStyle.less'

import router from './router'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
