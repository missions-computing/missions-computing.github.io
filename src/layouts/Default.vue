<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/">
        <v-app-bar-title>Missions Computing</v-app-bar-title>
      </router-link>
      <v-spacer />
      <v-btn plain to="/about/">About Us</v-btn>
      <v-btn plain to="/projects/">Projects</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <v-footer>
      <v-switch
        dense
        inset
        v-model="darkMode"
        @change="modeChanged"
        label="Dark"
      />
      <v-spacer />
      <p class="text--secondary">
        &copy; Copyright {{ new Date().getFullYear() }}
        Taylor Center for Missions Computing
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    modeChanged() {
      this.$vuetify.theme.dark = this.darkMode;
    },
  },
};
</script>

<static-query>
query { metadata { siteName } }
</static-query>
