<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12" md="12">
        <v-card class="pa-2" outlined tile align="left" justify="left">
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Protokół badania</td>
                  <td>NAZWA PROTOKOŁU</td>
                </tr>
                <tr>
                  <td>Nazwa sieci:</td>
                  <td>{{ measurement.title.toUpperCase() }}</td>
                </tr>
                <tr>
                  <td>Data przeglądu</td>
                  <td>
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
                  <td>
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
                <tr
                  v-for="(descriptions, key) in measurement.descriptions"
                  :key="descriptions"
                >
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
export default {
  data() {
    return {
      id: this.$route.params.id,
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
      deep: true,
    },
  },
  mounted() {
    this.getMeasurment();
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
.container {
  padding-bottom: 20%;
}
</style>