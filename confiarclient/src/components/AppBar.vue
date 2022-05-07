<template>
  <v-container>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          :src="require('../assets/logo.png')"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />

        <v-card-title> Confiar Grupo Legal </v-card-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn text>
        <span class="mr-2">Nuestros servicios</span>
        <v-icon>mdi-face-agent</v-icon>
      </v-btn>

      <v-btn text>
        <span class="mr-2">Sobre nosotros</span>
        <v-icon>mdi-plus-box-outline</v-icon>
      </v-btn>

      <v-btn text>
        <span class="mr-2">Contacto</span>
        <v-icon>mdi-phone-ring</v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppBar",
});
</script>