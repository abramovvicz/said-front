import axios from 'vue-axios'
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const AXIOS = axios.create({
    baseURL: 'http://localhost:9092',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Content-Type': 'application/json;charset=utf-8'
    }
    
    
})


export default {
    getMeasurements() {
        return AXIOS.get('/measurements/')
    }
}