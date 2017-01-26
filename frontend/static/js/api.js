import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const ItemResource = Vue.resource('api/items/{/id}')

export default {
    getItems() {
        return ItemResource.get()
    },
}
