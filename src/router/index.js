import Vue from 'vue';
import VueRouter from 'vue-router';
// 页面
import Home from '../components/home';
import User from '../components/user';
import Product from '../components/product';
import Shop from '../components/shop';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/User', component: User },
    { path: '/Product', component: Product },
    { path: '/Shop', component: Shop },
  ],
});
