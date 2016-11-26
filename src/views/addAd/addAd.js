import Vue from 'vue'
import App from './addAd.vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueResource from 'vue-resource';

Vue.use(Element);
Vue.use(VueResource)


Vue.http.options.headers = {
  'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
}

Vue.http.options.emulateJSON = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

console.log(ENV_OPT);