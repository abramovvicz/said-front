<template>
    <div class="small">
        <line-chart :chart-data="options.chartData" :options="options"></line-chart>
        <button @click="fillData()">POMIAR</button>
    </div>
</template>

<script>
import LineChart from '../../src/LineChart.js';
import store from '../store'
export default {
    components: {
        LineChart
    },
    data() {
        return {
            datacollection: null,
            options: {
                chartData:{
                    type: Array | Object,
                    required: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,

                        },
                        type: 'linear',
                        position: 'bottom'
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            },
        }
    },
    mounted() {
        this.fillData(),
            this.getMeasurment()
    },
    methods: {
        fillData() {
            this.datacollection = {
                datasets: [{
                    label: 'REFERENCJA',
                    backgroundColor: '#ffffff00',
                    borderColor: '#f87979',
                    steppedLine: true,
                    // data: [{ x: 0, y: 2 }, { x: 10, y: 0 }]
                    data:this.chartData
                }, {
                    label: 'POMIAR',
                    borderColor: '#388372',
                    backgroundColor: '#ffffff00',
                    steppedLine: false,
                    // data: [{ x: 0, y: 6.6 }, { x: 12.75, y: 3.2 }]
                    data: this.chartData
                }],
            }
        },
     
    }
}
</script>

<style>
.small {
    max-width: 600px;
    margin: 150px auto;
}
</style>