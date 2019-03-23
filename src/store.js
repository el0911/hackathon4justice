import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
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
        profile: {},
        addContacts(state, payload) {
            state.profile = payload;
        }
    },
});