<template>
  <div class="measurements">
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary" v-on:click="showMeasurements">
      SHOW MEASUREMENTS
    </button>
    <!-- <div v-for="id in measurements" v-bind:key="id">"dupa"</div> -->

    <table class="sectioned">
      <tbody>
        <tr v-for="m in measurements" v-bind:key="m.id">
          <td>{{ m.id }}</td>
          <td>{{ m.address }}</td>
          <td>{{ m.createdAt }}</td>
          <td>{{ m.updatedAt }}</td>
          <td>{{ m.hydrantType }}</td>
          <td>{{ m.hydrantSubType }}</td>
          <td>{{ m.hydrantDiameter }}</td>
          <td>
            <tr v-for="d in m.descriptions" v-bind:key="d.id">
              <td>{{ d.id }}</td>
              <td>
                {{ d.createdAt }}
              </td>
              <td>
                {{ d.updatedAt }}
              </td>
              <td>
                {{ d.measurementId }}
              </td>
              <td>
                {{ d.name }}
              </td>
              <td>
                {{ d.status }}
              </td>
              <td>
                {{ d.commentss }}
              </td>
            </tr>
          </td>
          <td><img src="src"/></td>
        </tr>
      </tbody>
    </table>

  <div>
      <button class="btn btn-primary" v-on:click="showMeasurements">DIPA CHUJ </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Measurements",

  props: {
    msg: String,
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
    };
  },
  methods: {
    showMeasurements() {
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

