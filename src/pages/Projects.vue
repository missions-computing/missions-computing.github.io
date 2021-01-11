<template>
  <div>
    <h1>Projects</h1>
    <v-row v-for="row in numRows" :key="row">
      <v-col v-for="post in nthRow(row - 1)" :key="post.id">
        <Post :post="post" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Post from "../components/Post";

const POSTS_PER_ROW = 2;

export default {
  name: "Projects",
  components: { Post },
  metaInfo: {
    title: "Projects",
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map((edge) => edge.node);
    },
    numRows() {
      return Math.ceil(this.posts.length / POSTS_PER_ROW);
    },
  },
  methods: {
    nthRow(n) {
      const first = n * POSTS_PER_ROW;
      return this.posts.slice(first, first + POSTS_PER_ROW);
    },
  },
};
</script>

<page-query>
query {
  posts: allPost(
    filter: {
      fileInfo: { directory: { eq: "content/projects" } }
      active: { eq: true }
    }
  ) {
    edges {
      node {
        id
        title
        author
        date
        subtitle
        content
        excerpt
      }
    }
  }
}
</page-query>
