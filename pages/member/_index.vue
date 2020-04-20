<template>
  <div>
    <navbar />
    <div class="container pt-20">
      <p class="text-green-600 font-bold text-center">Member detail</p>
      <p class="text-black text-center">this is some dynamic page</p>
      <member-card
        :key="member.id"
        :first-name="member.first_name"
        :last-name="member.last_name"
        :img="member.avatar"
        :email="member.email"
        :member-id="member.id.toString()"
      />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
import memberCard from "@/components/MemberCard";
export default {
  components: {
    navbar,
    memberCard,
  },
  data() {
    return {
      params: "",
    };
  },
  computed: {
    member() {
      return this.$store.getters["member/getMemberByIndex"](
        this.$route.params.index
      );
    },
  },
  created() {
    this.params = this.$route.params;
  },
};
</script>

<style></style>
