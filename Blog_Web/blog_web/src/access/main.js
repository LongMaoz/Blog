import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store/store'
import router from '@/router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
