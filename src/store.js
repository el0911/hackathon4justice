import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sidebar: true,
        inputs: {
            image: '',
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            phone: '',
            birthday: '',
            jobTitle: '',
            notes: '',
            nickname: '',
            prefix: '',
        },
        profile: []

    },
    getters: {
        getSidebarVisibility(state) {
            return state.sidebar;
        },

    },
    mutations: {
        sidebarToggle(state) {
            return state.sidebar = !state.sidebar;
        },
        addContacts(state, payload) {
            state.profile.push(payload);
        }
    },
});