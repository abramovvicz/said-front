import Vue from 'vue'
import Vuex from 'vuex'
import api from '../../axios-auth.js'


Vue.use(Vuex, api)



export default new Vuex.Store({
    state:{
        idAddress:"http://localhost:9092"
    }
})