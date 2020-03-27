import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'; // global css
import router from './router';
import store from './store';
import App from './App';
import '@/icons'; // icon
import '@/permission'; // permission control

import { mockXHR } from '../mock';
// if (process.env.NODE_ENV === 'production') {
	mockXHR()
// }

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
