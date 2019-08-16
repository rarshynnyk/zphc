<template>
  <div :class="{ [color]: color }" class="alert">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VueAlert',

  props: {
    color: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped>
.alert {
  display: block;
  margin: 10px 0;
  padding: 10px;
  background: #d6ad33;
  font-size: 16px;
  color: #000;
  text-align: center;
  font-family: Tahoma, Helvetica, Arial;
}

.error {
  background: #c30;
  color: #fff;
}

.success {
  background: #6f9;
}
</style>