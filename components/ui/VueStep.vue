<template>
  <div class="step">
    <div class="step-header">{{ header }}</div>
    <div class="step-body" v-html="text" />
  </div>
</template>

<script>
export default {
  name: "VueStep",

  props: {
    header: {
      type: String,
      default: "",
      required: false
    },

    text: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>

<style scoped>
.step {
  text-align: left;
}

.step {
  margin-bottom: 15px;
}

.step-body {
  font-size: 90%;
  color: #555;
}
</style>