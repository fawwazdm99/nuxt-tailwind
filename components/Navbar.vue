<template>
  <nav
    class="flex py-3 px-6 bg-white shadow-lg justify-between fixed w-full z-50"
  >
    <nuxt-link to="/">
      <img src="../assets/img/logo.png" alt="" class="w-8" />
    </nuxt-link>

    <nuxt-link to="/blog">
      <button
        class="py-1 px-2 border-2 text-green-900 border-green-200 rounded-lg hover:bg-green-200 hover:border-0 hover:text-gray-700"
      >
        Blog
      </button>
    </nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
