import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../../axios-auth.js'
import axios from "axios";

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
        idAddress:'http://localhost:9092',
        contentType: "Content-Type",
        header:"application/json;charset=utf-8",
        products:testData,
        measurementPreasure: {}
    },
    mutations:{
        getMeasurment(state){
            state.measurementPreasure = {};
        }
    },
    actions:{
        getMeasurment ({commit}){
            return new Promise((response) => {
                commit('getMeasurment')
                    console.log("StoRE DUPA")
                    this.loading = true;
                    try {
                        axios.get(
                                "http://localhost:9092/measurements/" + 1 + "/"
                            );
                            console.log(response)
                        this.measurement = response.data.result;
                        this.$store.state.measuremenetValues = this.measurement;
                        this.descriptions = this.measurement.descriptions;
                        this.address = this.measurement.address;
                        this.loading = false;
                        console.log("DUPA " + this.measurement);
                    } catch (e) {
                        console.log(e);
                    }
            })
    },
    // getters:{
    //     // measurementPreasure: state=>state.measurementPreasure
    // }
}
})

