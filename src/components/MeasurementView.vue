<template>
    <v-container class="grey lighten-5">
        <line-chart :chart-data="datacollection" :options="options">
        </line-chart>
        <v-row>
            <v-col cols="12" md="12">
                <v-card class="pa-2" outlined tile align="left" justify="left">
                    <v-simple-table>
                        <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>Protokół badania</td>
                      <td v-if="measurement.protocol">{{ measurement.protocol.toUpperCase() }}</td>
                    </tr>
                    <tr>
                      <td>Nazwa sieci:</td>
                      <td v-if="measurement.title">{{ measurement.title.toUpperCase() }}</td>
                    </tr>
                    <tr>
                      <td>Data przeglądu</td>
                      <td v-if="measurement.createdAt">
                        {{
                          measurement.createdAt.substring(
                            0,
                            measurement.createdAt.indexOf("T")
                          )
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Następny przegląd</td>
                      <td v-if="measurement.updatedAt">
                        {{
                          measurement.updatedAt.substring(
                            0,
                            measurement.createdAt.indexOf("T")
                          )
                        }}
                      </td>
                    </tr>
                  </tbody>
</template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-card class="pa-2" outlined tile align="left" justify="left">
          <v-simple-table>
<template v-slot:default>
    <tbody>
        <tr>
            <td>Adres pomiaru</td>
            <td>{{ measurement.address }}</td>
        </tr>
        <tr>
            <td>Rodzaj hydrantu</td>
            <td>{{ measurement.hydrantType }}</td>
        </tr>
        <tr>
            <td>Typ hydrantu</td>
            <td>{{ measurement.hydrantSubType }}</td>
        </tr>
        <tr>
            <td>Średnica hydrantu</td>
            <td>{{ measurement.hydrantDiameter }}</td>
        </tr>
    </tbody>
</template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile align="left" justify="left">
          <v-simple-table>
<template v-slot:default>
    <tbody>
        <tr v-for="(descriptions, key) in measurement.descriptions" :key="descriptions">
            <td>{{ measurement.descriptions[key].name }}</td>
            <td>{{ measurement.descriptions[key].status }}</td>
            <td>{{ measurement.descriptions[key].comment }}</td>
        </tr>
    </tbody>
</template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-card class="pa-2" outlined tile align="left" justify="left">
          <v-simple-table>
<template v-slot:default>
    <tbody>
        <tr>
            <td>Ciśnienie statyczne w barach</td>
            <td>{{ measurement.staticPressure }} Bar</td>
        </tr>
        <tr>
            <td>Ciśnienie dynamiczne w barach</td>
            <td>{{ measurement.dynamicPressure }} Bar</td>
        </tr>
        <tr>
            <td>Wydajność hydrantu w l/s</td>
            <td>{{ measurement.hydrantEfficiency }} l/s</td>
        </tr>
    </tbody>
</template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import axios from "axios";
import LineChart from '../../src/LineChart.js';

export default {
    components: { LineChart },
    data() {
        return {
            id: this.$route.params.id,
            measurement: [],
            createdAt: "",
            descriptions: [],
            loading: true,
            headers: [{
                    text: "Fake name",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                { text: "Nazwa", value: "value" },
                { text: "Status", value: "status" },
                { text: "Comment", value: "comment" },
            ],
            loaded: false,
            datacollection: null,
            options: {
                chartData: [],
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

        };
    },
    mounted() {
        this.getMeasurment()
    },
    methods: {
        getMeasurment() {
            this.loading = true;
            return axios
                .get(
                    "http://localhost:9092/measurements/" + this.$route.params.id + "/"
                )
                .then((response) => {
                    this.measurement = response.data.result;
                    this.descriptions = this.measurement.descriptions;
                    this.address = this.measurement.address;
                    this.loading = false;
                    this.options.chartData[0] = this.measurement.staticPressure;
                    this.options.chartData[1] = this.measurement.dynamicPressure;
                    this.options.chartData[3] = this.measurement.hydrantEfficiency;
                    this.loaded = true;
                    this.fillData()
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        fillData() {
            this.datacollection = {
                datasets: [{
                    label: 'REFERENCJA',
                    backgroundColor: '#ffffff00',
                    borderColor: '#f87979',
                    steppedLine: true,
                    data: [{ x: 0, y: 2 }, { x: 10, y: 0 }] // const - referencja pomiaru 
                }, {
                    label: 'POMIAR',
                    borderColor: '#388372',
                    backgroundColor: '#ffffff00',
                    steppedLine: false,
                    data: [{ x: 0, y: this.options.chartData[0] }, { x: this.options.chartData[1], y: this.options.chartData[3] }]
                }],
            }
        }
    }
};
</script>


<style scoped>
.container {
    padding-bottom: 20%;
}
</style>