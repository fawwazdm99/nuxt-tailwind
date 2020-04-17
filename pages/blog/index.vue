<template>
  <div>
    <navbar />
    <section class="container pt-20">
      <div v-for="(blog, index) in blogs" :key="'post-' + `${index}`">
        <blog-card
          :blog-title="blog.title"
          :blog-body="blog.body"
          :blog-comments="blog.comments"
          :blog-id="blog.id.toString()"
        />
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import blogCard from "@/components/BlogCard";
export default {
  name: "Blog",
  components: {
    navbar,
    blogCard,
  },
  async fetch({ store, params }) {
    await store.dispatch("blog/getBlogData");
  },
  computed: {
    blogs() {
      return this.$store.state.blog.blogData;
    },
  },
};
</script>

<style></style>
