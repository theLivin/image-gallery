<template>
  <div id="app">
    <Header />

    <div class="container">
      <ImageCarousel />
      <ImagesArea />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ImageCarousel from "./components/ImageCarousel";
import ImagesArea from "./components/ImagesArea";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    ImageCarousel,
    ImagesArea,
  },
  methods: {
    ...mapActions(["fetchImages"]),
  },
  created() {
    this.fetchImages();
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  margin-bottom: 8%;
}
</style>
