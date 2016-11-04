import Vue from 'vue';
import VueRouter from 'vue-router';
// 页面
import Home from '../components/home';
import User from '../components/user';
import GroupBar from '../components/group';
import Shop from '../components/shop';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/User', component: User },
    { path: '/Group', component: GroupBar },
    { path: '/Shop', component: Shop },
  ],
});
