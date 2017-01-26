import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

import api from './api'

const state = {
    items: []
}

const mutations = {
    addItem(state, item) {
        state.items.push(item)
    },
    addItems(state, items) {
        for(let item of items) {
            mutations.addItem(state, item)
        }
    },
}

const actions = {
    getItems({commit}) {

        api.getItems().then(response => {
            if (!response.ok) {
                console.log("Ohje");
            }
            commit('addItems', response.data);
        }, response => {
            console.log("Ohje");
        })
    },
    addItem({commit}, item) {
        commit('addItem', item);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
