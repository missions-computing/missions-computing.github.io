<template>
  <v-card elevation="2" height="100%">
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.subtitle }}</v-card-subtitle>
    <v-card-text>{{ post.excerpt }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
};
</script>
