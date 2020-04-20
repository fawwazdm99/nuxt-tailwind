import { RequestGet, getDataIndex } from "@/helper";
export const state = () => ({
  memberData: [],
});
export const mutations = {
  addMemberData(state, data) {
    state.memberData = data;
  },
};
export const actions = {
  async getMemberData({ commit }) {
    const data = await RequestGet("users");
    commit("addMemberData", data);
  },
};

export const getters = {
  getMemberByIndex: (state) => (id) => {
    const index = getDataIndex(state.memberData, id);
    return state.memberData[index];
  },
};
