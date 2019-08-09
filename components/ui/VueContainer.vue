<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VueContainer"
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>