const state = {
  groups: []
};

const mutations = {
  setGroups: (state, groups) => {
    state.groups = groups;
  }
};

const actions = {
  getGroups({ commit }, res) {
    commit("setGroups", res.data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
