<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Layout from "./layouts/Default";

export default {
  name: "App",
  components: {
    Layout,
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
};
</script>
