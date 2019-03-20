import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import bringbacktheconvicts from './views/Convicts.vue';
import thinkoftheblueheart from './views/BlueHeart.vue';
import catchtheewasteoctopus from './views/EwasteOctopus.vue';
import blowthewhistle from './views/BlowTheWhistle.vue';
import breakthesilence from './views/BreakTheSilence.vue';
import inscribethebribe from './views/InscribeTheBribe.vue';
import coach from './views/coach.vue';
import profile from './views/profile.vue';
import finance from './views/financialinstitution.vue';
import convicts from './views/convictshome.vue';





Vue.use(Router);

export default new Router({
    mode: 'history',

    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/bringbacktheconvicts',
            name: 'Bring Back the Convicts',
            component: bringbacktheconvicts,
            children: [{
                    path: 'coach',
                    name: 'coach',
                    component: coach,
                },
                {
                    path: '/finance',
                    name: 'finance',
                    component: finance
                },
                {
                    path: '/',
                    name: 'convicts',
                    component: convicts
                }
            ]
        },
        {
            path: '/thinkoftheblueheart',
            name: 'Think of the Blue Heart',
            component: thinkoftheblueheart
        },
        {
            path: '/catchtheewasteoctopus',
            name: 'Catch the E-Waste Octopus',
            component: catchtheewasteoctopus
        },
        {
            path: '/blowthewhistle',
            name: 'Blow the Whistle',
            component: blowthewhistle
        },
        {
            path: '/breakthesilence',
            name: 'Break the Silence',
            component: breakthesilence
        },
        {
            path: '/inscribethebribe',
            name: 'Inscribe the Bribe',
            component: inscribethebribe
        },
        {
            path: '/profile',
            name: 'profile',
            component: profile
        },

    ]
});