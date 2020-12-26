import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Form, Field, Toast, Icon, Swipe, SwipeItem, SwipeCell, PullRefresh, List, Tab, Tabs } from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import './assets/icon/iconfont.css'
// 引入加密插件
import md5 from 'js-md5'
Vue.use(Form).use(Field).use(Toast).use(Button).use(Icon).use(Swipe).use(SwipeItem).use(SwipeCell)
  .use(PullRefresh).use(List).use(Tab).use(Tabs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 挂载到原型上
Vue.prototype.$md5 = md5
window.vRouter = router
