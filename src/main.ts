import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//Component global
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/pt-br";
import * as globalInterface from "@/models/global/global-interface.ts";
import  index  from "@/global";
import check from 'check-types';
import '@/styles/main.scss';

Vue.use(index);

globalInterface;

(Element as any).locale(locale);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
