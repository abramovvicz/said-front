<template>
  <v-footer color="#bc3a37" app inset>
    <v-card-text style="height: 50px; position: relative">
      <v-fab-transition>
        <router-link class="toolbar-items" to="/measurement">
          <v-btn color="pink" dark absolute top right fab>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </router-link>
      </v-fab-transition>
    </v-card-text>
  </v-footer>
</template>


<script>
//   import api from '../../axios-auth.js'
//   import store from '../store/store'

export default {
  name: "Footer",
  data: () => ({}),
};
</script>

<style scoped>
</style>