// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from "vuetify/lib/framework";
import "vuetify/dist/vuetify.min.css";

import Layout from "~/layouts/Default.vue";

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
  });

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({});
}
