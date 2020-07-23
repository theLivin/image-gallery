<template>
  <div>
    <h1 class="logo">
      Image
      <span class="inner-logo">Gallery</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.logo {
  font-family: "Bree Serif", serif;
  font-size: 2.8rem;
  text-align: center;
  background-color: #87cefa;
  color: white;
  display: inline-block;
  width: 100%;
  padding: 30px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  text-shadow: 2px 2px 3px #999;
}

.inner-logo {
  background-color: white;
  color: #87cefa;
  border-radius: 10px;
  padding: 5px;
}
</style>