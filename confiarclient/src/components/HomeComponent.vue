<template>
  <div clas="home-view">
    <v-carousel cycle height="320">
      <v-carousel-item>
        <v-img
          :src="require('../assets/baner1.jpg')"
          class="black--text align-end"
          contain
        >
        </v-img>
        ></v-carousel-item
      >
      <v-carousel-item>
        <v-img
          :src="require('../assets/baner2.jpg')"
          class="black--text align-end"
          contain
        >
        </v-img>
        ></v-carousel-item
      >
    </v-carousel>

    <home-section>
      <template v-slot:title> ¿Buscas asesoría jurídica? </template>
      <template v-slot:content>
        <v-text
          >No gaste dinero en vano, a través de los botones de contacto puede
          separar y agendar una cita con uno de nuestros abogados quien le
          orientara y responderá sus dudas de manera gratuita y virtual dentro
          de cualquier parte del país. Nuestro compromiso es dar seguridad
          jurídica a nuestros clientes antes de iniciar cualquier tipo de
          actuación o solicitar dinero.</v-text
        >
        <v-card-actions class="justify-center mt-2">
          <v-btn class="secondary">Contactar</v-btn>
        </v-card-actions>
      </template>
      <v-card-actions class="justify-center">
        <v-btn class="secondary"> contactar </v-btn>
      </v-card-actions>
    </home-section>
    <home-section>
      <template v-slot:title>{{ services.title }}</template>
      <template v-slot:content>{{ services.text }}</template>
    </home-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeSection from "../components/HomeSection.vue";

export default Vue.extend({
  name: "HomeComponent",

  components: {
    HomeSection,
  },

  data: () => ({
    services: {
      title: "Nuestros servicios",
      text: "Ipsum qui sint ad qui in exercitation pariatur labore incididunt id incididunt aliqua. Non mollit velit ex ea occaecat reprehenderit mollit Lorem proident do do minim. Nisi excepteur quis dolor magna laborum occaecat qui. Amet cillum ipsum Lorem laboris enim sint laboris duis sint nostrud amet minim.",
    },
  }),
});
</script>
<style lang="scss">
.home-view {
  margin-bottom: 50px;
}
.contacto {
  vertical-align: middle !important;
}
</style>
