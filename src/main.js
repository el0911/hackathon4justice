import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import BackToTop from 'vue-backtotop';
import 'vue-tel-input/dist/vue-tel-input.css';
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import VeeValidate from 'vee-validate';
import VueTelInput from 'vue-tel-input';


Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(BackToTop);
Vue.use(VueTelInput);
Vue.component('InfiniteSlideBar', InfiniteSlideBar);
Vue.use(VeeValidate);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')