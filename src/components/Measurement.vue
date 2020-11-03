<template>
  <v-container>
    <v-row>
      <v-col justify="left" align="left"
        >Data pomiaru: {{ currentDateWithNeededFormat | formatDate }}
      </v-col>
      <v-col justify="left" align="left">Termin następnego pomiaru: </v-col>
    </v-row>
    <v-row>
      <v-col
        ><v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nazwa sieci"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Adres pomiaru"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Wybierz rodzaj hydrantu:
              <v-radio-group v-model="row" row>
                <v-radio label="Zewnętrzny" value="radio-1"></v-radio>
                <v-radio label="Wewnętrzny" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col justify="left" align="left">
              Jeśli Zewnętrzny to wybierz podz czy naziemny (dodać funk ze samo
              sie pjawia luz znika)
              <v-radio-group v-model="row" row>
                <v-radio label="Nadziemny" value="radio-1"></v-radio>
                <v-radio label="Podziemny" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col justify="left" align="left">
              Wybierz średnicę:
              <v-radio-group v-model="row" row>
                <v-radio label="DN80" value="radio-1"></v-radio>
                <v-radio label="DN100" value="radio-2"></v-radio>
                <v-radio label="DN150" value="radio-3"></v-radio>
                <v-radio label="DN200" value="radio-4"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Dostępość do hydrantu:
              <v-radio-group v-model="row" row>
                <v-radio label="TAK" value="radio-1"></v-radio>
                <v-radio label="NIE" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Dostępość do zasuwy:
              <v-radio-group v-model="row" row>
                <v-radio label="TAK" value="radio-1"></v-radio>
                <v-radio label="NIE" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Oznakowanie hydrantu znakiem 'H'
              <v-radio-group v-model="row" row>
                <v-radio label="TAK" value="radio-1"></v-radio>
                <v-radio label="NIE" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Oznakowanie hydrantu tablicznką o.u.p.w.
              <v-radio-group v-model="row" row>
                <v-radio label="TAK" value="radio-1"></v-radio>
                <v-radio label="NIE" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Oznakowanie zasuwy tablicznką o.u.p.w.
              <v-radio-group v-model="row" row>
                <v-radio label="TAK" value="radio-1"></v-radio>
                <v-radio label="NIE" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Stan nasad Storz`a
              <v-radio-group v-model="row" row>
                <v-radio label="OK" value="radio-1"></v-radio>
                <v-radio label="NIE OK" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Stan uszczelek
              <v-radio-group v-model="row" row>
                <v-radio label="OK" value="radio-1"></v-radio>
                <v-radio label="NIE OK" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Ilość pokryw
              <v-radio-group v-model="row" row>
                <v-radio label="1" value="radio-1"></v-radio>
                <v-radio label="2" value="radio-2"></v-radio>
                <v-radio label="3" value="radio-3"></v-radio>
                <v-radio label="4" value="radio-4"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col justify="left" align="left">
              Odległość od najbliższego budynku
              <v-radio-group v-model="row" row>
                <v-radio label="OK" value="radio-1"></v-radio>
                <v-radio label="NIE OK" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

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

          <v-row>
            <v-col justify="left" align="left">
              Odległość od najbliższego budynku
              <v-radio-group v-model="row" row>
                <v-radio label="OK" value="radio-1"></v-radio>
                <v-radio label="NIE OK" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <!-- <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            ZAPISZ
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> WYCZYŚĆ </v-btn>

          <v-btn color="warning" @click="resetValidation"> ANULUJ </v-btn> -->
        </v-form></v-col
      >
    </v-row>
  </v-container>
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
  mounted: function () {
    this.checkCurrentDate();
  },
  data() {
    return {
      currentDateWithNeededFormat: "",
      currentDate: "",
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

      reset: true,
    };
  },
  methods: {
    // validate() {
    //   this.$refs.form.validate();
    // },
    // reset() {
    //   this.$refs.form.reset();
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // },
    checkCurrentDate() {
      this.currentDate = new Date();
      this.currentDateWithNeededFormat = this.currentDate
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, ".");
      console.log(this.currentDateWithNeededFormat + "Data");
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

