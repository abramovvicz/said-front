<template>
  <div>
      <button class="btn btn-primary" v-on:click="showMeasurements">DIPA CHUJ </button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Measurements',
  props: {
    msg: String,
  },
  data() {
    return {
      measurement: [
        {
          id: "",
          createdAt: "",
          updatedAt: "",
          address: "",
          hydrantType: "",
          hydrantSubType: "",
          hydrantDiameter: "",
          descriptions: [
            {
              id: "",
              createdAt: "",
              updatedAt: "",
              measurementId: "",
              name: "",
              status: "",
              comments: "",
            },
          ],
          photo: "",
          staticPressure: "",
          dynamicPressure: "",
          hydrantEfficiency: "",
        },
      ],
    };
  },
  methods:{
      showMeasurements(){
        return axios.get('http://localhost:9090/measurements/').then(
            data =>{
                this.measurement = data.result
              }
        )
      }
  }
};
</script>