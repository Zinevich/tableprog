import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tableData: [],
        total: 0,
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        loadPackage(context, params) {
            axios
                .get(`https://packagist.org/search.json?q=${params.query}&page=${params.page}`)
                .then((response) => {
                    context.state.tableData = response.data.results;
                    context.state.total = response.data.total;
                })
        }
    }
})