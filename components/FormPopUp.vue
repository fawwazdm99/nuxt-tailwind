<template>
  <div>
    <div
      class="bg-gray-800 opacity-50 fixed z-40 w-full h-full"
      @click="closePopUp"
    ></div>
    <div class="form-modal modal-position">
      <p>Make a new post</p>
      <form @submit.prevent="addBlogData">
        <input
          v-model="titleModel"
          type="text"
          placeholder="Insert title"
          class="p-2 w-full border-2 border-green-200 focus:outline-none rounded-lg"
        />
        <textarea
          v-model="bodyModel"
          placeholder="Insert some content"
          class="p-2 w-full border-2 border-green-200 focus:outline-none resize-none mt-4 rounded-lg"
        />
        <button type="submit" class="submit-btn mt-4">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closePopUp: {
      type: Function,
      default: () => false,
    },
  },
  data() {
    return {
      titleModel: "",
      bodyModel: "",
    };
  },
  methods: {
    addBlogData() {
      const data = {
        id: Math.random() * 1000,
        title: this.titleModel,
        body: this.bodyModel,
        editingTitle: false,
        editingBody: false,
        comments: [],
      };
      this.$store.commit("blog/addBlogData", data);
      this.closePopUp();
    },
  },
};
</script>

<style></style>
