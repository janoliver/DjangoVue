import Vue from "vue";
import App from "./App.vue";

import store from './store'

new Vue({
    store,
    el: '#main',
    components: {App},
    render: h => h(App)
})