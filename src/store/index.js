import Vue from "vue";
import Vuex from "vuex";
import images from "./modules/images";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    images,
  },
});
