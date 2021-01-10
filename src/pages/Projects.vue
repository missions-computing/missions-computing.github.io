<template>
  <Layout>
    <h1>Projects</h1>
    <v-row>
      <v-col v-for="edge in $page.posts.edges" :key="edge.node.id">
        <Post :post="edge.node" />
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
import Post from "../components/Post";
export default {
  name: "Projects",
  components: { Post },
  metaInfo: {
    title: "Projects",
  },
};
</script>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id title author date subtitle content
      }
    }
  }
}
</page-query>
