<template>
    <v-container>
        <v-row>
            <v-col justify="left" align="left"> 
                Nazwa protokołu: <b>{{ protocols.title }}</b>
            </v-col>
        </v-row>
        <v-row>
            <v-col justify="left" align="left">Data pomiaru: {{ createdDate }}
            </v-col>
            <v-col justify="left" align="left">Termin następnego pomiaru: {{ createdUpdatedDate}}</v-col>
        </v-row>
    
        
    
        <v-form ref="form" v-model="isFormValid" lazy-validation>
            <v-row v-if="false">
                <v-col justify="left" align="left">Data pomiaru: {{ createdDateForForm }}
                </v-col>
                <v-col justify="left" align="left">Termin następnego pomiaru: {{ createdUpdatedDateForForm }}</v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="form.title" :counter="80" :rules="nameRules" label="Nazwa sieci" required></v-text-field>
                            <v-text-field v-model="form.address" :counter="80" :rules="nameRules" label="Adres pomiaru" required></v-text-field>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            Wybierz rodzaj hydrantu:
                            <v-radio-group v-model="form.hydrantType" :mandatory="true" row>
                                <v-radio label="Zewnętrzny" :value="hydrantType[0]"></v-radio>
                                <v-radio label="Wewnętrzny" :value="hydrantType[1]"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row v-if="form.hydrantType === hydrantType[0]">
                        <v-col justify="left" align="left">
                            Wybierz typ hydrantu:
                            <v-radio-group v-model="form.hydrantSubType" :mandatory="true" row>
                                <v-radio label="Nadziemny" :value="hydrantSubType[1]"></v-radio>
                                <v-radio label="Podziemny" :value="hydrantSubType[0]"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row v-if="form.hydrantSubType === hydrantSubType[1]">
                        <v-col justify="left" align="left">
                            Wybierz średnicę / Dyszę pomiarową:
                            <v-radio-group v-model="form.hydrantDiameter" :mandatory="true" row>
                                <v-radio label="DN80/DP22" value="DN80_DP22"></v-radio>
                                <v-radio label="DN80/DP26" value="DN80_DP26"></v-radio>
                                <v-radio label="DN100/DP32" value="DN100_DP32"></v-radio>
                                <v-radio v-if="form.hydrantDiameter === 1" label="DN150/DP37" value="DN150_DP37"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row v-if="form.hydrantSubType === hydrantSubType[0]">
                        <v-col justify="left" align="left">
                            Wybierz średnicę / Dyszę pomiarową:
                            <v-radio-group v-model="form.hydrantDiameter" :mandatory="true" row>
                                <v-radio label="DN25/DR10" value="DN25_DR10"></v-radio>
                                <v-radio label="DN33/DR12" value="DN33_DR12"></v-radio>
                                <v-radio label="DN52/DR13" value="DN52_DR13"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[9].name }}
                            <v-radio-group v-model="descriptions[9].status" :mandatory="true" row>
                                <v-radio label="TAK" value="TAK" required></v-radio>
                                <v-radio label="NIE" value="NIE" required></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[0].name }}
                            <v-radio-group v-model="descriptions[0].status" :mandatory="true" row required>
                                <v-radio label="TAK" value="TAK"></v-radio>
                                <v-radio label="NIE" value="NIE"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[1].name }}
                            <v-radio-group v-model="descriptions[1].status" :mandatory="true" row required>
                                <v-radio label="TAK" value="TAK"></v-radio>
                                <v-radio label="NIE" value="NIE"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[2].name }}
                            <v-radio-group v-model="descriptions[2].status" :mandatory="true" row required>
                                <v-radio label="TAK" value="TAK"></v-radio>
                                <v-radio label="NIE" value="NIE"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[3].name }}
                            <v-radio-group v-model="descriptions[3].status" :mandatory="true" row required>
                                <v-radio label="TAK" value="TAK"></v-radio>
                                <v-radio label="NIE" value="NIE"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[4].name }}
                            <v-radio-group v-model="descriptions[4].status" :mandatory="true" row required>
                                <v-radio label="OK" value="OK"></v-radio>
                                <v-radio label="NIE OK" value="NIE OK"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[5].name }}
                            <v-radio-group v-model="descriptions[5].status" :mandatory="true" row required>
                                <v-radio label="OK" value="OK"></v-radio>
                                <v-radio label="NIE OK" value="NIE OK"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[6].name }}
                            <v-radio-group v-model="descriptions[6].status" :mandatory="true" row required>
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
    
                            <v-radio-group v-model="descriptions[7].status" :mandatory="true" row required>
                                <v-radio label="OK" value="OK"></v-radio>
                                <v-radio label="NIE OK" value="NIE OK"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-row>
                        <v-col justify="left" align="left">
                            {{ descriptions[8].name }}
                            <v-radio-group v-model="descriptions[8].status" :mandatory="true" row required>
                                <v-radio label="NIE ODWADNIA SIĘ" value="NIE ODWADNIA SIĘ"></v-radio>
                                <v-radio label="ODWADNIA SIĘ" value="ODWADNIA SIĘ"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
    
                    <v-text-field v-model="form.staticPressure" :rules="nameRules" label="Ciśnienie statyczne" suffix="Mpa" type="number" maxlength="10" required></v-text-field>
    
                    <v-text-field v-model="form.dynamicPressure" :rules="nameRules" label="Ciśnienie dynamiczne" suffix="Mpa" type="number" maxlength="10" required></v-text-field>
    
                    <v-text-field v-model="form.hydrantEfficiency" :rules="nameRules" label="Wydajność hydrantu" suffix="Mpa" type="number" required></v-text-field>
                </v-col>
            </v-row>
    
            <v-row v-if="!isFormValid">
                <v-col justify="center" align="center" class="textValidateForm">
                    {{textValidateForm}}
                </v-col>
            </v-row>
        </v-form>
    
        <v-row>
            <v-col justify="center" align="center">
                <v-btn color=#4caf50 class="mr-4" :disabled="!isFormValid" @click="sendFormMeasurementToBackend">
                    ZAPISZ
                </v-btn>
            </v-col>
            <v-col justify="center" align="center">
                <v-btn color=#fb8c00 class="mr-4" @click="reset"> WYCZYŚĆ </v-btn>
                <!-- <v-btn color="warning" @click="resetValidation"> ANULUJ </v-btn> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
    mounted: function() {
        this.checkCurrentDate();
        this.countUpdatedAt();
        this.getProtocols();
    },
    data() {
        const measurementForm = Object.freeze({
            title: "",
            protocolId: "",
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
            isFormValid: true,
            name: "",
            nameRules: [
                (v) => !!v || "Input is required",
                (v) => (v && v.length <= 80) || "Input must be less than 80 characters",
            ],
            select: null,
            checkbox: false,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            ipAddress: "http://localhost:9092",
            hydrantAvailable: "",
            title: "",
            address: "",
            protocols: {},
            cachedProtocols: [],
            protocolId: "",
            numberId: "",
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
            createdDateForForm: "",
            createdDate: "",
            createdUpdatedDate: "",
            createdUpdatedDateForForm: "",
            textValidateForm: "",
        };
    },
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
        checkCurrentDate() {
            this.form.createdAt = new Date();
            this.createdDateForForm = moment(this.form.createdAt)
            this.createdDate = this.createdDateForForm.toJSON().slice(0, 10).replace(/-/g, ".");
            this.createdDateForForm.toJSON().slice(0, 10).replace(/-/g, ".");
        },
        countUpdatedAt() {
            this.form.updatedAt = moment(this.form.createdAt);
            this.createdUpdatedDateForForm = this.form.updatedAt.add(1, "y");
            this.createdUpdatedDate = this.createdUpdatedDateForForm.toJSON().slice(0, 10).replace(/-/g, ".");
        },
        addDescriptionsForMeasurement(name, status, comment) {
            this.form.descriptions.push({
                name: name,
                status: status,
                comments: comment,
                createdAt: this.form.createdAt,
            });
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
            const isFormValid = this.$refs.form.validate();
            this.setDescriptionsObjects()
            console.log("KURWA MAC!" + isFormValid)
            if (isFormValid) {
                return axios
                    .post(this.$store.state.idAddress + "/measurements/",
                        JSON.stringify(this.form), {
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                            },
                        })
                    .then((response) => {
                        JSON.stringify(this.form), this.headers;
                        this.isFormValid = false;
                        console.log(response)
                        this.textValidateForm = "POMIAR ZOSTAŁ DODANY DO BAZY"
                    })
                    .catch(function(error) {
                        this.textValidateForm = "COŚ POSZŁO NIE TAK, SPRÓBUJ PONOWNIE POŹNIEJ " + error;
                    });
            } else {
                this.textValidateForm = "WSZYSTKIE POLA MUSZĄ BYĆ WYPEŁNIONE"
            }
        },
        getProtocols() {
            return axios.get(this.$store.state.idAddress + "/protocols/ ").then((response) => {
                this.cachedProtocols = response.data.result;
                this.protocolId = this.cachedProtocols[this.cachedProtocols.length - 1]
                console.log("Protocols" + this.cachedProtocols[this.cachedProtocols.length - 1].title +
                    "length is " + this.cachedProtocols.length + " and last id protocol " + this.protocolId.id)
                this.getProtocolById()
            })
        },
        getProtocolById() {
            return axios.get(this.$store.state.idAddress + "/protocols/" + this.protocolId.id + "/").then((response) => {
                console.log("POST NA: " + this.$store.state.idAddress + "/protocols/" + this.protocolId.id + "/")
                this.protocols = response.data.result
                console.log("Protocol id is : " + this.protocols.id)
                // this.form.protocolId = response.data.result.protocols.id;
            })
        }
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

.container {
    padding-bottom: 20%;
}

.textValidateForm {
    color: red;
    size: 12px
}
</style>

