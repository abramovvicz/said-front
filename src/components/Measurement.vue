<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col justify="left" align="left"
          >Data pomiaru: {{ createdDateForView }}
        </v-col>
        <v-col justify="left" align="left"
          >Termin następnego pomiaru: {{ createdUpdatedDateForView }}</v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field
                v-model="form.title"
                :counter="10"
                :rules="nameRules"
                label="Nazwa sieci"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.address"
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
              <v-radio-group v-model="form.hydrantType" :mandatory="false" row>
                <v-radio label="Zewnętrzny" :value="hydrantType[0]"></v-radio>
                <v-radio label="Wewnętrzny" :value="hydrantType[1]"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row v-if="form.hydrantType === hydrantType[0]">
            <v-col justify="left" align="left">
              Wybierz typ hydrantu:
              <v-radio-group
                v-model="form.hydrantSubType"
                :mandatory="false"
                row
              >
                <v-radio label="Nadziemny" :value="hydrantSubType[1]"></v-radio>
                <v-radio label="Podziemny" :value="hydrantSubType[0]"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row v-if="form.hydrantSubType === hydrantSubType[0]">
            <v-col justify="left" align="left">
              Wybierz średnicę:
              <v-radio-group v-model="form.hydrantDiameter" row>
                <v-radio label="DN80" value="DN80"></v-radio>
                <v-radio label="DN100" value="DN100"></v-radio>
                <v-radio
                  v-if="form.hydrantDiameter === 1"
                  label="DN150"
                  value="DN150"
                ></v-radio>
                <v-radio
                  v-if="form.hydrantDiameter === 1"
                  label="DN200"
                  value="DN200"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row v-if="form.hydrantSubType === hydrantSubType[1]">
            <v-col justify="left" align="left">
              Wybierz średnicę:
              <v-radio-group v-model="form.hydrantDiameter" row>
                <v-radio label="DN25" value="DN25"></v-radio>
                <v-radio label="DN33" value="DN33"></v-radio>
                <v-radio label="DN52" value="DN52"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[9].name }}
              <v-radio-group v-model="descriptions[9].status" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[0].name }}
              <v-radio-group v-model="descriptions[0].status" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[1].name }}
              <v-radio-group v-model="descriptions[1].status" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[2].name }}
              <v-radio-group v-model="descriptions[2].status" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[3].name }}
              <v-radio-group v-model="descriptions[3].status" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[4].name }}
              <v-radio-group v-model="descriptions[4].status" row>
                <v-radio label="OK" value="OK"></v-radio>
                <v-radio label="NIE OK" value="NIE OK"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[5].name }}
              <v-radio-group v-model="descriptions[5].status" row>
                <v-radio label="OK" value="OK"></v-radio>
                <v-radio label="NIE OK" value="NIE OK"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[6].name }}
              <v-radio-group v-model="descriptions[6].status" row>
                <v-radio label="1" value="1"></v-radio>
                <v-radio label="2" value="2"></v-radio>
                <v-radio label="3" value="3"></v-radio>
                <v-radio label="4" value="4"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[7].name }}

              <v-radio-group v-model="descriptions[7].status" row>
                <v-radio label="OK" value="OK"></v-radio>
                <v-radio label="NIE OK" value="NIE OK"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{ descriptions[8].name }}
              <v-radio-group v-model="descriptions[8].status" row>
                <v-radio
                  label="NIE ODWADNIA SIĘ"
                  value="NIE ODWADNIA SIĘ"
                ></v-radio>
                <v-radio label="ODWADNIA SIĘ" value="ODWADNIA SIĘ"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-text-field
            v-model="form.staticPressure"
            :rules="nameRules"
            label="Ciśnienie statyczne"
            suffix="Mpa"
            type="number"
            maxlength="10"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.dynamicPressure"
            :rules="nameRules"
            label="Ciśnienie dynamiczne"
            suffix="Mpa"
            type="number"
            maxlength="10"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.hydrantEfficiency"
            :rules="nameRules"
            label="Wydajność hydrantu"
            suffix="Mpa"
            type="number"
            required
          ></v-text-field>

          <v-btn
            color="success"
            class="mr-4"
            @click="sendFormMeasurementToBackend"
          >
            ZAPISZ
          </v-btn>
          <!--
          <v-btn color="error" class="mr-4" @click="reset"> WYCZYŚĆ </v-btn>

          <v-btn color="warning" @click="resetValidation"> ANULUJ </v-btn> -->
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  mounted: function () {
    this.checkCurrentDate();
    this.countUpdatedAt();
  },
  data() {
    const measurementForm = Object.freeze({
      title: "",
      // nameNet:"",
      address: "",
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      descriptions: [],
      hydrantType: "",
      hydrantSubType: "",
      hydrantDiameter: "",
      staticPressure: "",
      dynamicPressure: "",
      hydrantEfficiency: "",
      photo: "",
    });
    return {
      form: Object.assign({}, measurementForm),
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
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      ipAddress: "http://localhost:9092",
      hydrantAvailable: "",
      title: "",
      address: "",
      descriptions: [
        { name: "Dostępość do zasuwy:", status: "", comment: "" },
        { name: "Oznakowanie hydrantu znakiem 'H'", status: "", comment: "" },
        { name: "Oznakowanie hydrantu tablicznką o.u.p.w.", status: "", comment: "" },
        { name: "znakowanie zasuwy tablicznką o.u.p.w.", status: "", comment: "" },
        { name: "Stan nasad Storz`a", status: "", comment: "" },
        { name: "Stan uszczelek", status: "", comment: "" },
        { name: "Ilość pokryw", status: "", comment: "" },
        { name: "Odległość od najbliższego budynku", status: "", comment: "" },
        { name: "Odwodnienie hydrantu", status: "", comment: "" },
        { name: "Dostępność do hydrantu", status: "", comment: "" },
      ],
      measurementForm: "",
      hydrantType: ["INSIDE", "OUTSIDE"],
      hydrantSubType: ["GROUND", "UNDERGROUND"],
      status: "",
      comment: "",
      createdDateForView:"",
      createdUpdatedDateForView:""
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
      this.form.createdAt = new Date();
      this.createdDateForView = moment(this.form.createdAt)
      this.createdDateForView.toJSON().slice(0, 10).replace(/-/g, ".");
    },
    addDescriptionsForMeasurement(name, status, comment) {
      this.form.descriptions.push({
        name: name,
        status: status,
        comments: comment,
        createdAt: this.form.createdAt,
      });
    },
    countUpdatedAt() {
      this.form.updatedAt = moment(this.form.createdAt);
      this.form.updatedAt.add(1, "y");
      this.createdUpdatedDateForView = moment(this.createdDateForView);
      this.createdUpdatedDateForView.add(1, "y");
    },

    setDescriptionsObjects() {
      this.descriptions.forEach((description) =>
        this.addDescriptionsForMeasurement(
          description.name,
          description.status,
          description.commment
        )
      );
    },
    sendFormMeasurementToBackend() {
      this.setDescriptionsObjects();
      console.log(JSON.stringify(this.form));
      this.$http
        .post(
          "http://localhost:9092/measurements/",
          JSON.stringify(this.form),
          {
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        )
        .then(
          (data) => {
            // this.sendResult = 1;
            console.log(data);
            // this.result = "Successfully add user to the database";
            // this.checkIdFromNewAddedUser();
            console.log(JSON.stringify(this.form));
          },
          (data) => {
            if (data.status === 403) {
              console.log("Error: " + data.status + data.message);
            } else if (data.status === 500) {
              this.sendResult = 2;
              this.result = "ERROR - some error. Please be patient";
            }
          }
        );
    },
    sendFormMeasurementToBackendSecond() {
      return axios
        .post("http://localhost:9092/measurements/", {
          form: "form",
        })
        .then((response) => {
          JSON.stringify(this.form), this.headers;
          console.log(response.data.result);
        })
        .catch(function (error) {
          console.log(error);
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
.container{

  padding-bottom: 20%;
}
</style>

