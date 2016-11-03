import Vue from 'vue';
import root from './project';
import VueRouter from './router';

Vue.config.debug = true;
const app = new Vue({
  router: VueRouter,
  components: {
    'my-header': root,
  },
});
app.$mount('#market');
