export const state = () => ({
  memberData: "",
});
export const mutations = {
  addMemberData(state, data) {
    state.memberData = data;
  },
};
export const actions = {
  async getMemberData({ commit }) {
    const data = await this.$axios.get("https://reqres.in/api/users");
    commit("addMemberData", data);
  },
};
