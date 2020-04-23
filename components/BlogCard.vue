<template>
  <div class="md:w-1/2 md:mx-auto mb-8">
    <p v-if="!blogEditingTitle" class="text-gray-500">
      double tap title to edit
    </p>
    <h3
      v-if="!blogEditingTitle"
      id="blog-title"
      class="font-bold text-green-600 text-lg"
      @dblclick="editBlogTitle(blogId)"
    >
      {{ blogTitle }}
    </h3>
    <input
      v-else
      type="text"
      :value="blogTitle"
      @blur="doneEditBlogTitle(blogId)"
      @change="updateBlogTitle"
    />
    <p
      v-if="!blogEditingBody"
      id="blog-body"
      class="text-gray-700"
      @dblclick="editBlogBody(blogId)"
    >
      {{ blogBody }}
    </p>
    <textarea
      v-else
      :value="blogBody"
      @blur="doneEditBlogBody(blogId)"
    ></textarea>
    <p class="text-gray-500 mt-6">Comment</p>
    <div class="mt-4 mb-4">
      <form @submit.prevent="addComment(blogId)">
        <textarea
          v-model="commentModel"
          placeholder="add some comment..."
          type="textarea"
          class="w-full h-20 border-2 p-2 border-gray-200 resize-none focus:outline-none focus:border-gray-400"
        />
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
    <div
      v-for="(comment, index) in blogComments"
      :key="'comment-' + `${comment.id}`"
      class="border-b-2 border-gray-200"
    >
      <div class="flex justify-between">
        <p class="text-green-600 font-bold">
          {{ comment.name }}
          <span class="text-gray-500 italic text-sm"
            >({{ comment.email }})</span
          >
        </p>
        <img
          src="../assets/svg/icon-x.svg"
          alt
          @click="deleteComment(index, blogId)"
        />
      </div>

      <p class="text-gray-700 text-sm">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogBody: {
      type: String,
      default: "body",
    },
    blogTitle: {
      type: String,
      default: "title",
    },
    blogId: {
      type: String,
      default: "",
    },
    blogComments: {
      type: Array,
      default: () => [],
    },
    blogEditingTitle: {
      type: Boolean,
      default: false,
    },
    blogEditingBody: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      commentModel: "",
    };
  },

  methods: {
    deleteComment(index, blogId) {
      this.$store.dispatch("blog/deleteComment", { index, blogId });
    },
    addComment(blogId) {
      const id = "addComment" + blogId + Math.random() * 1000;
      const name = "guest";
      const email = "guest@gmail.com";
      const body = this.commentModel;
      this.$store.commit("blog/addCommentData", {
        blogId,
        id,
        name,
        email,
        body,
      });
      this.commentModel = "";
    },
    editBlogTitle(blogId) {
      this.$store.commit("blog/editBlogTitle", blogId);
    },
    doneEditBlogTitle(blogId) {
      this.$store.commit("blog/doneEditBlogTitle", blogId);
    },
    editBlogBody(blogId) {
      this.$store.commit("blog/editBlogBody", blogId);
    },
    doneEditBlogBody(blogId) {
      this.$store.commit("blog/doneEditBlogBody", blogId);
    },
    updateBlogTitle(event) {
      const title = event.target.value;
      const blogId = this.blogId;
      this.$store.commit("blog/updateBlogTitle", { blogId, title });
    },
  },
};
</script>

<style></style>
