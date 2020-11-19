<template>
  <v-app-bar color="white" light fixed>
    <img
      class="mr-3"
      :src="require('../assets/pozarowka-logo.gif')"
      height="40"
    />
    <v-spacer></v-spacer>

  <router-link class="toolbar-items" to="/measurementView">
  <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </router-link>


    <router-link class="toolbar-items" to="/measurements">
      <v-btn icon>
        <v-icon>mdi-clipboard-text-outline</v-icon>
      </v-btn>
    </router-link>


    <!-- <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-app-bar>
</template>