// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@src/App';
import goods from '@components/goods/goods.vue';
import ratings from '@components/ratings/ratings.vue';
import seller from '@components/seller/seller.vue';

import '@common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: goods
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

let router = new VueRouter({
  linkActiveClass: 'sell-active',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
