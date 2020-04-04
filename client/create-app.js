/**
 * 文件功能描述：
 * 每次都生成一个app, router, store实例并返回给调用方
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Meta from 'vue-meta';
import App from './app.vue';

import createRouter from './router';
import createStore from './store';

import Notification from './components/notification';
import Tabs from './components/tabs';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Meta);
Vue.use(Notification);
Vue.use(Tabs);

import './assets/styles/global.styl';

export default () => {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};
