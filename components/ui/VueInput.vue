<template>
  <div class="form-group">
    <label v-if="label">{{ label }}</label>
    <input :value="value" :type="type" @change="change" />
  </div>
</template>

<script>
export default {
  name: "VueInput",

  props: {
    value: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "text"
    },

    label: {
      type: String,
      required: false,
      default: ""
    }
  },

  methods: {
    change({ target: { value } }) {
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped>
.form-group {
  font-size: 80%;
  margin-bottom: 10px;
  text-align: left;
  outline: none;
}

input {
  padding: 4px 6px;
  width: 100%;
}
</style>