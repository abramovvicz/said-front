<template>
  <v-container class="container-fluid grey lighten-5">
    <v-row class="mb-6">
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col>
        <v-card class="pa-2" flat>
          <v-row class="mb-6">
            <v-col align="left" justify="left">
              <h2>WSZYSTKIE POMIARY</h2>
            </v-col>
            <v-col align="right" justify="right">
              <v-btn rounded color="secondary" dark> DODAJ POMIAR </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2" md="2"> </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col>
        <v-card class="pa-2" outlined>
          <v-row class="mb-6">
            <v-col align="left" justify="left">
              <v-select :items="items" outlined></v-select>
            </v-col>
            <v-col align="right" justify="right">
              <v-tabs fixed-tabs background-color="indigo" light>
                <v-tab> Option </v-tab>
                <v-tab> Another Selection </v-tab>
                <v-tab> Items </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2" md="2"></v-col>
    </v-row>

     <v-row class="mb-6">
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col>
        <v-card class="pa-2" flat>
          <v-row class="mb-6">
            <v-col>
           <Measurements />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2" md="2"> </v-col>
    </v-row>

  </v-container>
</template>


<script>
import Measurements from "./Measurements.vue";

export default {
  name: "App",
  components: {
    Measurements,
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