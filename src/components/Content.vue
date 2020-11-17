<template>
     <v-row class="mb-6">
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col>
        <v-card class="pa-2" flat>
          <v-row class="mb-6">
            <v-col>
           <Measurement />
           <Measurements />
           <MeasurementView />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2" md="2"> </v-col>
    </v-row>
</template>


<script>
import Measurement from "./Measurement.vue";
import Measurements from "./Measurements.vue";
import MeasurementView from "./MeasurementView.vue";

export default {
  name: "App",
  components: {
    Measurement,
    Measurements,
    MeasurementView
  },
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  methods: {
  //
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.grey lighten-5 {
  margin-top: 100px !important;
}
.container-fluid {
  margin-top: 10%;
}
</style>