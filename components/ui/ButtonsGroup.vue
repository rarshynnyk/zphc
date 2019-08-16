<template>
  <div class="buttons-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ButtonsGroup"
};
</script>

<style>
.buttons-group {
  max-width: 250px;
  margin: 0 auto 35px;
}

.buttons-group .btn:not(:last-child) {
  margin-bottom: 17px;
}
</style>