<template>
  <div
    class="rounded-lg bg-white shadow-md text-center py-4 md:m-4 md:w-1/5 my-4 w-full"
  >
    <nuxt-link :to="'member/' + memberId">
      <div class="container">
        <img
          :src="img"
          alt=""
          class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto block shadow-md"
        />
        <h5 class="font-bold text-md mt-2 text-green-600">
          {{ firstName }} {{ lastName }}
        </h5>
        <div class="flex items-center justify-center">
          <p class="text-sm text-gray-600">{{ email }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    firstName: { type: String, default: "first_name" },
    lastName: { type: String, default: "last_name" },
    email: { type: String, default: "email" },
    img: { type: String, default: "img" },
    memberId: { type: String, default: "1" },
  },
};
</script>

<style></style>
