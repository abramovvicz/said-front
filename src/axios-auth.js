import axios from 'vue-axios'

const AXIOS = axios.create({
    baseURL: 'http://localhost:9092',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    },
})


export default {
    getMeasurements() {
        return AXIOS.get('/measurements/')
    }
}