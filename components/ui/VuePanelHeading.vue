<template>
  <div class="panel-heading">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VuePanelHeading"
};
</script>

<style>
.panel-heading {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
