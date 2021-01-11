<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>
        <g-link to="/"> Missions Computing </g-link>
      </v-app-bar-title>
      <v-spacer />
      <v-btn plain><g-link to="/about/">About Us</g-link></v-btn>
      <v-btn plain><g-link to="/projects">Projects</g-link></v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <v-footer>
      <v-spacer />
      <p class="text--secondary">
        &copy; Copyright {{ new Date().getFullYear() }}
        Taylor Center for Missions Computing
      </p>
    </v-footer>
  </v-app>
</template>

<static-query>
query { metadata { siteName } }
</static-query>
