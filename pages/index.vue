<template>
  <div>
    <navbar />
    <section>
      <div class="container">
        <div class="pt-20 items-center justify-center flex-column">
          <div class="md:flex items-center justify-center">
            <p class="text-3xl text-gray-600 text-center">It's all about</p>
            <img src="../assets/img/tailwind.png" alt="" class="w-64" />
          </div>
          <div>
            <p class="text-center">
              A utility-first CSS framework for
              <strong class="text-green-600"
                >rapidly building custom designs.</strong
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mt-10">
        <h1 class="text-center text-4xl font-bold text-green-600">
          Meet our member
        </h1>
        <p class="text-center">
          Our member spread all over the world with variative background
        </p>
        <div
          v-if="!members.error"
          class="md:flex md:flex-wrap items-center justify-center"
        >
          <member-card
            v-for="(member, index) in members"
            :key="index"
            :first-name="member.first_name"
            :last-name="member.last_name"
            :img="member.avatar"
            :email="member.email"
            :member-id="member.id.toString()"
          />
        </div>
        <error-request v-else :message="members.message" />
      </div>
      <!-- <p>{{ members }}</p> -->
    </section>
    <div class="py-4 bg-green-600 mt-4">
      <p class="text-center text-gray-200">
        mini example nuxt.js + tailwind.css
      </p>
    </div>
  </div>
</template>

<script>
import memberCard from "@/components/MemberCard";
import navbar from "@/components/Navbar";
import errorRequest from "@/components/ErrorRequest";
export default {
  components: {
    memberCard,
    navbar,
    errorRequest,
  },
  async fetch({ store, params }) {
    await store.dispatch("member/getMemberData");
  },
  computed: {
    members() {
      return this.$store.state.member.memberData;
    },
  },
};
</script>

<style></style>
