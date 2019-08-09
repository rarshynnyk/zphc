<template>
  <div class="panel" :class="{ 'panel-offset': offset }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VueContainer",

  props: {
    offset: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};
</script>

<style scoped>
.panel {
  border: 1px solid #e6e6e6;
}

.panel-offset {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>