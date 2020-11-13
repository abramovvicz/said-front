import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../../axios-auth.js'


Vue.use(Vuex)

const testData = [];
for (let i = 1; i <= 10; i++) {
testData.push({
id: i, name: `Produkt #${i}`, category: `Kategoria ${i % 3}`,
description: `To jest Produkt #${i}`, price: i * 50
})
}

export default new Vuex.Store({
    strict:true,
    state:{
        idAddress:"http://localhost:9092",
        products:testData
    }
})

