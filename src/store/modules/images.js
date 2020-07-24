const state = {
  images: [],
  numberOfImages: 6,
  activeId: 1,
};
const getters = {
  getImages: () => state.images,
  getActiveId: () => state.activeId,
};
const actions = {
  changeActiveId({ commit }, newId) {
    commit("setActiveId", newId);
  },
  fetchImages({ commit }) {
    commit("setImages");
  },
};
const mutations = {
  setActiveId(state, newId) {
    state.activeId = newId;
  },
  setImages(state) {
    for (let i = 1; i <= state.numberOfImages; i++) {
      state.images.push({
        id: i,
        url: `https://placeimg.com/1000/600/any?${i}`,
      });
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
