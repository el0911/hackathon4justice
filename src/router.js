import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import login from './views/login.vue';
import profile from './views/profile.vue';
import signup from './views/signup.vue';
import about from './views/about.vue';







Vue.use(Router);

export default new Router({
    mode: 'history',

    routes: [{
            path: '/',
            name: 'home',
            component: Home,
    },
            {
                path: '/login',
                name: 'login',
                component: login,
            },
            {
                path: '/signup',
                name: 'signup',
                component: signup
            },

        {
            path: '/profile',
            name: 'profile',
            component: profile
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
    ]
});