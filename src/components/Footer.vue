<template>
    <v-footer color="#bc3a37" app inset>
        <v-card-text style="height: 50px; position: relative" data-app>
            <v-btn color="pink" dark absolute top right fab @click="dialog = true">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" hide-overlay scrollable width="500" style="height: 300       ">
                <v-card tile>
                    <v-toolbar flat color="pink">
                        <v-row>
                            <v-col>
                                <v-btn icon @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="protocols.title" :counter="80" :rules="nameRules" label="Nazwa protokołu" required></v-text-field>
                                {{ protocols.id }}
                                <v-toolbar-title>Stwórz nowy protokół</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-col>
                            <v-col>
                                <v-toolbar-items>
                                    <v-fab-transition>
                                        <router-link class="toolbar-items" to="/measurement">
                                            <v-btn color="pink" text @click="sendProtocolToBackend">
                                                Zapisz
                                            </v-btn>
                                        </router-link>
                                    </v-fab-transition>
                                </v-toolbar-items>
                            </v-col>
                        </v-row>
                    </v-toolbar>
                </v-card>
            </v-dialog>
        </v-card-text>
    </v-footer>
</template>


<script>
import axios from "axios";
//   import store from '../store/store'

export default {
    name: "Footer",
    data() {
        return {
            dialog: false,
            protocols: {},
            nameRules: []
        }
    },
    methods: {
        async sendProtocolToBackend() {
            this.dialog = false
            console.log("Dodano protokół")
            return await axios
                .post(this.$store.state.idAddress + "/protocols/",
                    JSON.stringify(this.protocols), {
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                        },
                    })
                .then((response) => {
                    JSON.stringify(this.protocols), this.headers;
                    console.log(response)
                    // this.getProtocolById()

                })
                .catch(function(error) {
                    console.log("jebac errory " + error + " this protocol is  " + this.protocols.title)
                });
        }
    }
};
</script>

<style scoped>

</style>