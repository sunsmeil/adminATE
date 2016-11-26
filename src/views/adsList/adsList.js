// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import vueResource from 'vue-resource'


Vue.use(ElementUI)
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

console.log(ENV_OPT);