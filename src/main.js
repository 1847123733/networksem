// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index';                    // 仓库
import VueWechatTitle from 'vue-wechat-title'         // 网页标题
import ElementUI from 'element-ui';                   // 饿了么
import 'element-ui/lib/theme-chalk/index.css';        // 饿了么样式
import '../static/reset.css'                          // 重置样式 在饿了么样式下面 可以覆盖饿了么
import echarts from 'echarts'                         // echarts
import AMap from './plugIn/AMap/index';               // 高德
import Pagination from '@/components/Pagination'      // 引用全局组件 Pagination 分页器
import Dropdown from '@/components/Dropdown'          // 引用全局组件 Dropdown 下拉框选择

Vue.component('Dropdown', Dropdown)                   // 使用全局组件 Dropdown 下拉框选择
Vue.component('Pagination', Pagination)               // 使用全局组件 Pagination 分页器
Vue.use(VueWechatTitle)                               // 网页标题
Vue.use(ElementUI,{ size: 'small'},{ zIndex: 2000 }); // 饿了么
Vue.use(AMap);                                        // 高德

Vue.prototype.$echarts = echarts;                     // echarts
Vue.config.productionTip = false                      // 阻止显示生产模式的消息 设置为true，控制台就会多出这么一段代码。

// 开发模式：npm run dev是前端自己开发用的
// 生产模式：npm run build 打包之后给后端放在服务端上用的

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 当 Vue 里面有 el 和 template 节点时，template 里面的内容会替换 el 里面的元素的地方
// 因为在 components 里面注册了组件，替换的就是注册组件里面的 #app
// 替换的是 app.vue 这个根组件
