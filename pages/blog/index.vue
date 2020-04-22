<template>
  <div>
    <form-pop-up v-if="isPopUp" :close-pop-up="closePopUp" />
    <navbar />
    <section class="container pt-20">
      <div v-for="(blog, index) in blogs" :key="'post-' + `${index}`">
        <blog-card
          :blog-title="blog.title"
          :blog-body="blog.body"
          :blog-comments="blog.comments"
          :blog-id="blog.id"
          :blog-editing-title="blog.editingTitle"
          :blog-editing-body="blog.editingBody"
        />
      </div>
      <div
        class="fixed bottom-0 right-0 md:mr-12 md:mb-12 mr-4 mb-4 bg-green-600 text-white z-30 w-12 h-12 text-center d-flex items-center justify-center rounded-full"
        @click="modalPopUp"
      >
        <p class="text-3xl">+</p>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import blogCard from "@/components/BlogCard";
import formPopUp from "@/components/FormPopUp";
export default {
  name: "Blog",
  components: {
    navbar,
    blogCard,
    formPopUp,
  },
  async fetch({ store, params }) {
    await store.dispatch("blog/getBlogData");
  },
  data() {
    return {
      isPopUp: false,
    };
  },
  computed: {
    blogs() {
      return this.$store.state.blog.blogData;
    },
  },
  methods: {
    modalPopUp() {
      this.isPopUp = true;
    },
    closePopUp() {
      this.isPopUp = false;
    },
  },
};
</script>

<style></style>
