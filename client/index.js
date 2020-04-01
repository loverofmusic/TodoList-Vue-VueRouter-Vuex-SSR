import Vue from "vue";
import App from "./app.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import "lib-flexible/flexible.js";

import "./assets/styles/global.styl";

import createRouter from "./router";
import createStore from "./store";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();

// router.beforeEach((to, from, next)=>{
// console.log('before each invoked')
// if(to.fullPath==='/app'){
//   // next({path: '/login'})
//   next('/login')
// }else{
//   next()
// }
// next()
// })

// router.beforeResolve((to, from, next)=>{
//   console.log('before Resolve invoked')
//   next()
// })

// router.afterEach((to, from)=>{
//   console.log('afterEach invoked')
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#root");
