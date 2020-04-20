<template>
  <div class="container pt-8 pb-8">
    <div class="flex-column items-center justify-center">
      <img
        src="../assets/svg/error-request.svg"
        alt=""
        class="block mx-auto w-1/2"
      />
      <p class="my-3 text-center">{{ message }}</p>
      <nuxt-link to="/">
        <button
          class="bg-green-600 text-white rounded-lg py-2 px-4 block mx-auto"
        >
          Back to home
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorRequest",
  props: {
    message: {
      type: String,
      default: "Sorry, Something we didn't expected just happen",
    },
  },
};
</script>

<style></style>
