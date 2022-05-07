import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0056B3",
        secondary: "#38AAF0",
        accent: "#235AFC",
        lightBlue: "#38BDFF",
        button: "#FCC023",
      },
    },
  },
});
