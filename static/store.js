import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    username: '',
    projects: [],
}

const mutations = {
    setname(state, name){
        state.username = name;
    },
    addproject(state,proj){
        state.projects.push(proj);
    },
    clearproject(state){
        state.projects = [];
    }
}

export default new Vuex.Store({
    state,
    mutations
})