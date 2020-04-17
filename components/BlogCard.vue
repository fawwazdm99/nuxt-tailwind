<template>
  <div class="md:w-1/2 md:mx-auto mb-8">
    <h3 class="font-bold text-green-600 text-lg">{{ blogTitle }}</h3>
    <p class="text-gray-700">
      {{ blogBody }}
    </p>
    <p class="text-gray-500 mt-6">Commentar</p>
    <div class="mt-4 mb-4">
      <form @submit.prevent="addComment(blogId)">
        <textarea
          v-model="commentModel"
          placeholder="add some comment..."
          type="textarea"
          class="w-full h-20 border-2 border-gray-200 resize-none focus:outline-none focus:border-gray-400"
        />
        <button
          type="submit"
          class="bg-green-600 text-white py-1 px-4 rounded-lg block ml-auto"
        >
          Submit
        </button>
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
          alt=""
          @click="deleteComment(index, blogId)"
        />
      </div>

      <p class="text-gray-700 text-sm">
        {{ comment.body }}
      </p>
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
      const id = "addComment" + blogId;
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
  },
};
</script>

<style></style>
