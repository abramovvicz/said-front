<template>
  <v-container class="grey lighten-5">
    <v-row>
      DUPA
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          <h6>Protokół badania:</h6>
          DODAĆ taką wartość
          <h6>Nazwa sieci:</h6>
          <h3>{{ measurement.title }}</h3>
          <h6>Przegląd został wykonany dnia:</h6>
          <h3>
            {{
              measurement.createdAt.substring(
                0,
                measurement.createdAt.indexOf("T")
              )
            }}
          </h3>
          <h6>Termin następnego badania:</h6>
          <h3>
            {{
              measurement.updatedAt.substring(
                0,
                measurement.createdAt.indexOf("T")
              )
            }}
          </h3>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <h4>Arkusz badania hydrantu:</h4>
        <v-card class="pa-2" outlined tile align="left" justify="left">
          <!-- <v-data-table
            :headers="headers"
            :items="measurement"
            :loading="loading"
            :items-per-page="15"
            :options.sync="options"
            class="elevation-1"
          >
          </v-data-table> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      measurement: [],
      createdAt: "",
      descriptions: [],
      options: {},
      loading: true,
      headers: [
        {
          text: "Fake name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Nazwa", value: "value" },
        { text: "Status", value: "status" },
        { text: "Comment", value: "comment" },
      ],
    };
  },
  watch: {
    options: {
      handler() {
        this.getMeasurment();
      },
      // $route(to, from) {
      //   console.loading(this.$route.query.id);
      // },
      deep: true,
    },
  },
  mounted: function () {
    this.getMeasurment();
  },
  methods: {
    getMeasurment() {
      this.loading = true;
      return axios
        .get("http://localhost:9092/measurements/" + this.$route.query.id)
        .then((response) => {
          this.measurement = response.data.result;
          this.descriptions = this.measurement.descriptions;
          this.address = this.measurement.address;
          console.log(this.measurement);
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>


<style scoped>
</style>