<template >
  <v-container class="container-fluid grey lighten-5">
    <v-row class="mb-6">
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col>
        <v-card class="pa-2" flat>
          <v-row class="mb-6">
            <v-col align="center" justify="center">
              <h2>WSZYSTKIE POMIARY</h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2" md="2"> tutaj będzie filtrowanie po dacie</v-col>
    </v-row>
    <v-list two-line align="left" justify="left">
      <v-card v-for="m in measurements" v-bind:key="m.id">
        <v-list-item :key="m.id">
          <v-list-item-content>
            <v-list-item-title>{{
              m.createdAt.substring(0, m.createdAt.indexOf("T"))
            }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>{{ m.hydrantType }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ m.address }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content>
            <router-link :to="{ path: '/measurementView/'+ m.id}">
             <v-btn text>
                <v-icon> mdi-arrow-right  </v-icon>
                {{m.id}}
              </v-btn>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-list>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Measurements",

  props: {
    msg: String,
  },
  mounted: function () {
    this.showMeasurements();
  },
  data() {
    return {
      measurements: [],
      descriptions: [],
      src: "data:image/jpeg;base64",
      names: [
        {
          id: 1,
          name: "one",
        },
        { id: 2, name: "two" },
      ],
      items: [],
    };
  },
  methods: {
    showMeasurements() {
        // console.log()
      return axios
        .get("http://localhost:9092/measurements/")
        .then((response) => {
          this.measurements = response.data.result;
          this.descriptions = this.measurements.descriptions;
          var bytes = new Uint32Array(this.measurements[3].photo);
          var binary = bytes.reduce(
            (data, b) => (data += String.fromCharCode(b)),
            ""
          );
          this.src = "data:image/jpeg;base64," + btoa(binary);
          console.log(this.src);
        });
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

table.sectioned tbody {
  border: 2px solid black;
  border-collapse: separate;
  border-spacing: 4px;
}
</style>

