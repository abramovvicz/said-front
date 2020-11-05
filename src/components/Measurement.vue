<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col justify="left" align="left"
          >Data pomiaru: {{ form.createdAt}}
        </v-col>
        <v-col justify="left" align="left"
          >Termin następnego pomiaru: {{ form.updatedAt }}</v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field
                v-model="form.nameNet"
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
                <v-radio label="Zewnętrzny" :value="1"></v-radio>
                <v-radio label="Wewnętrzny" :value="0"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row v-if="form.hydrantType === 1">
            <v-col justify="left" align="left">
              Wybierz typ hydrantu:
              <v-radio-group
                v-model="form.hydrantSubType"
                :mandatory="false"
                row
              >
                <v-radio label="Nadziemny" :value="1"></v-radio>
                <v-radio label="Podziemny" :value="0"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row v-if="form.hydrantSubType === 1">
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
          <v-row v-if="form.hydrantSubType === 0">
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
              Dostępość do hydrantu:
              <v-radio-group v-model="form.hydrantAvailable" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              {{barAvailable}}
              <v-radio-group v-model="form.barAvailable" row>
                <v-radio label="TAK" value="TAK" v-on:change="addDescriptionsForMeasurement( barAvailable, 'TAK', barAvailableComment)"></v-radio>
                <v-radio label="NIE" value="NIE" v-on:change="addDescriptionsForMeasurement( barAvailable, 'NIE', barAvailableComment)"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Oznakowanie hydrantu znakiem 'H'
              <v-radio-group v-model="form.asignH" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Oznakowanie hydrantu tablicznką o.u.p.w.
              <v-radio-group v-model="form.asignOUPW" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Oznakowanie zasuwy tablicznką o.u.p.w.
              <v-radio-group v-model="form.asignBarOUPW" row>
                <v-radio label="TAK" value="TAK"></v-radio>
                <v-radio label="NIE" value="NIE"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Stan nasad Storz`a
              <v-radio-group v-model="form.storz" row>
                <v-radio label="OK" value="OK"></v-radio>
                <v-radio label="NIE OK" value="NIE OK"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Stan uszczelek
              <v-radio-group v-model="form.rubber" row>
                <v-radio label="OK" value="OK"></v-radio>
                <v-radio label="NIE OK" value="NIE OK"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Ilość pokryw
              <v-radio-group v-model="form.cover" row>
                <v-radio label="1" value="1"></v-radio>
                <v-radio label="2" value="2"></v-radio>
                <v-radio label="3" value="3"></v-radio>
                <v-radio label="4" value="4"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col justify="left" align="left">
              Odległość od najbliższego budynku
              <v-radio-group v-model="form.nearestBuilding" row>
                <v-radio label="OK" value="OK"></v-radio>
                <v-radio label="NIE OK" value="NIE OK"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col justify="left" align="left">
              Odwodnienie hydrantu:
              <v-radio-group v-model="form.dehydration" row>
                <v-radio label="NIE ODWADNIA SIĘ" value="NIE ODWADNIA SIĘ"></v-radio>
                <v-radio label="ODWADNIA SIĘ" value="ODWADNIA SIĘ"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-text-field
            v-model="form.staticPreasure"
            :rules="nameRules"
            label="Ciśnienie statyczne"
            suffix="Mpa"
            type="number"
            maxlength="10"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.dynamicPreasure"
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
import moment from "moment";
import axios from "axios";
export default {
  mounted: function () {
    this.checkCurrentDate();
    this.countUpdatedAt();
  },
  /*
{
  "address": "string",
  "createdAt": "2020-11-04T20:11:32.503Z",
  "descriptions": [
    {
      "comments": "string",
      "createdAt": "2020-11-04T20:11:32.503Z",
      "id": 0,
      "measurementId": 0,
      "name": "string",
      "status": 0,
      "updatedAt": "2020-11-04T20:11:32.503Z"
    }
  ],
  "hydrantDiameter": "DN100",
  "hydrantSubType": "GROUND",
  "hydrantType": "INSIDE",
  "id": 0,
  "photo": "string",
  "updatedAt": "2020-11-04T20:11:32.503Z"
}



*/
  data() {
    const measurementForm = Object.freeze({
      address: "",
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      descriptions: [
        {
          name: "",
          status: "",
          comments: "",
          createdAt: "",
        },
        {
          name: "name2",
          status: "status 2",
          comments: "comment 2",
          createdAt: "",
        },
      ],
      hydrantType: 0,
      hydrantSubType: 0,
      hydrantDiameter: 0,
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
      barAvailable: "Dostępość do zasuwy: ",
      barAvailableComment: "brak",
      barAvailableStatus: "",
      nameNet: "",
      address: "",
      asignH: "",
      asignOUPW: "",
      asignBarOUPW: "",
      storz: "",
      rubber: "",
      cover: "",
      nearestBuilding: "",
      dehydration: "",
      measurementForm:"",
      
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
      // this.currentDate = 
      this.form.createdAt = new Date();
        // .toJSON()
        // .slice(0, 10)
        // .replace(/-/g, ".");
    },
    addDescriptionsForMeasurement(name, status, comment){
      this.barAvailable = name;
      this.barAvailableStatus = status;
      this.barAvailableComment = comment;
      // this.measurementForm.descriptions[0].push(this.barAvailableComment, this.barAvailableStatus, this.barAvailableComment)
        // console.log(this.measurementForm.descriptions[0])

    },
    countUpdatedAt() {
      this.form.updatedAt = moment(this.createdAt);
      this.form.updatedAt.add(1, "y");
    },
    sendFormMeasurementToBackend() {
       console.log(JSON.stringify(this.form))
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
            console.log(JSON.stringify(this.form))
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
</style>

