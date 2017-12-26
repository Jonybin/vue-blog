import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// css
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.snow.css'
import '@/assets/css/reset.css'
import '@/assets/css/icon.less'
import '@/assets/css/transition.css'
import '@/assets/css/global.css'

// mock数据
import '@/mock'

// 第三方
import axios from 'axios'
import ElementUI from 'element-ui'
import VueProgressBar from 'vue-progressbar'
import VueQuillEditor from 'vue-quill-editor'
import draggable from 'vuedraggable'

// 自定义组件
import breadcrumb from '@/components/breadcrumb'
import sticky from '@/components/sticky'
import backTop from '@/components/backTop'
import countTo from '@/components/countTo'
import loading from '@/components/loading'
// 自定义指令
import vueClipboard from '@/utils/clipboard.js'
// 自定义过滤
import filters from '@/utils/filters.js'

Vue.config.productionTip = false

// 第三方
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VueProgressBar, {
    color: '#29F',
    failedColor: 'red',
    thickness: '2px'
})
Vue.use(VueQuillEditor)
Vue.component('my-draggable', draggable)

// 自定义组件
Vue.component('my-breadcrumb', breadcrumb)
Vue.component('my-sticky', sticky)
Vue.component('my-backTop', backTop)
Vue.component('my-countTo', countTo)
Vue.component('my-loading', loading)
// 自定义指令
Vue.use(vueClipboard)
// 自定义过滤
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
