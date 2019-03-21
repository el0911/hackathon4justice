import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import breaksilence from './views/BreakTheSilence.vue';
import lawyer from './views/lawyer.vue';
import profile from './views/profile.vue';
import lawfirms from './views/lawfirms.vue';
import breakhome from './views/BreakSilenceHome.vue';





Vue.use(Router);

export default new Router({
    mode: 'history',

    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/breakthesilence',
            name: 'BreakTheSilence',
            component: breaksilence,
            children: [{
                    path: 'lawyer',
                    name: 'lawyer',
                    component: lawyer,
                },
                {
                    path: '/lawfirms',
                    name: 'lawfirms',
                    component: lawfirms
                },
                {
                    path: '/',
                    name: 'breakhome',
                    component: breakhome
                }
            ]
        },

        {
            path: '/profile',
            name: 'profile',
            component: profile
        },

    ]
});