<template>
  <div class="row">
    <div
      class="col-md-4 mr-auto mt-3"
      v-for="image in getImages"
      :key="image.id"
      @click="imageClicked(image.id)"
    >
      <ImageThumbnail :image="image" class="image" />
    </div>
  </div>
</template>

<script>
import ImageThumbnail from "./ImageThumbnail";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ImagesArea",
  components: {
    ImageThumbnail,
  },
  computed: {
    ...mapGetters(["getImages"]),
  },
  methods: {
    ...mapActions(["changeActiveId"]),
    imageClicked: function (imageId) {
      this.changeActiveId(imageId);
    },
  },
};
</script>

<style >
.image {
  width: 100%;
}

img.image:hover {
  transition: 1s ease;
  position: absolute;
  z-index: 3;
  width: 104%;
  transform: rotate(-4deg);
}
</style>