<template>
  <div class="panel-body">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VuePanelBody"
};
</script>

<style scoped>
.panel-body {
  padding: 20px;
}
</style>