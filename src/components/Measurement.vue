<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nazwa sieci"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Adres pomiaru"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Data pomiaru - uzupełniony automatycznie"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Termin następnego badania - uzupełniony automatycznie"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Wybierz rodzaj hydrantu"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Średnica hydrantu"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Dysza pomiarowa"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Stan powłoki lakierniczej od 1 - do 3"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Dostępność do hydrantu"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Dostępność do zasuwy"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Oznakowanie hydrantu znakiem 'H' "
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Oznakowanie hydrantu tabliczką o.u.p.w."
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Oznakowanie zasuwy tabliczką o.u.p.w."
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Stan nasad Storz`a"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Stan uszczelek"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Stan uszczelek"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Ilość pokryw"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Odległość od najbliższego budynku"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Ciśnienie statyczne"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Ciśnienie dynamiczne"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Wydajność hydrantu"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label=" Odwodnienie hydrantu"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
  </v-form>
</template>






<!--<template >
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
          <v-btn text>
            <v-icon> mdi-arrow-right {{m.id}} </v-icon>
          </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-list> 
  <table class="sectioned">
      <tbody>
        <tr v-for="m in measurements" v-bind:key="m.id">
          <td></td>
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
          <td><img src="src" /></td>
        </tr>
      </tbody>
    </table>
</template> -->


<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>


/// <script>
// import axios from "axios";
// export default {
//   name: "Measurements",

//   props: {
//     msg: String,
//   },
//   mounted: function () {
//     this.showMeasurements();
//   },
//   data() {
//     return {
//       measurements: [],
//       descriptions: [],
//       src: "data:image/jpeg;base64",
//       names: [
//         {
//           id: 1,
//           name: "one",
//         },
//         { id: 2, name: "two" },
//       ],
//     };
//   },
//   methods: {
//     showMeasurements() {
//       return axios
//         .get("http://localhost:9092/measurements/")
//         .then((response) => {
//           this.measurements = response.data.result;
//           this.descriptions = this.measurements.descriptions;
//           var bytes = new Uint32Array(this.measurements[3].photo);
//           var binary = bytes.reduce(
//             (data, b) => (data += String.fromCharCode(b)),
//             ""
//           );
//           this.src = "data:image/jpeg;base64," + btoa(binary);
//           console.log(this.src);
//         });
//     },
//   },
// };
//
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

