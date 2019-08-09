<template>
  <button class="btn" :type="type" :class="{ 'btn-block': block }">
    <slot />
  </button>
</template>

<script>
export default {
  name: "VueButton",

  props: {
    type: {
      type: String,
      required: false,
      default: "button"
    },

    block: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped>
.btn {
  display: inline-block;
  transition: 0.2s all linear;
  cursor: pointer;
  background: #4d94b8;
  border: none;
  color: #fff;
  border-radius: 4px;
  line-height: 40px;
  margin: 0 auto;
  font-size: 18px;
}

.btn:hover {
  background: #069;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>