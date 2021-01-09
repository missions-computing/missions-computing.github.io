<template>
  <v-app>
    <v-app-bar app dense>
      <v-app-bar-title>Missions Computing</v-app-bar-title>
      <v-spacer />
      <v-btn plain>About Us</v-btn>
      <v-btn plain>Projects</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <v-footer>
      <v-spacer />
      &copy; Copyright {{ new Date().getFullYear() }}
      Taylor Center for Missions Computing
    </v-footer>
  </v-app>
</template>

<static-query>
query { metadata { siteName } }
</static-query>
