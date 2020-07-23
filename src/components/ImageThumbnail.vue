<template>
  <img :src="image.url" alt="An image should be here." />
</template>

<script>
export default {
  name: "ImageThumbnail",
  props: {
    image: {
      type: Object,
    },
  },
};
</script>

<style>
</style>