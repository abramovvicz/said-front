import axios from 'vue-axios'
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

const AXIOS = axios.create({
    baseURL: 'http://localhost:9092',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8081',
        'Content-Type': 'application/x-www-form-urlencoded' 
    }
    
    
})


export default {
    getMeasurements() {
        return AXIOS.get('/measurements/')
    }
}