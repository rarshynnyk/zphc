<template>
  <span class="btn" :class="{ 'btn-block': block }">
    <a v-if="to" :href="to" :target="target">
      <slot />
    </a>
    <button v-else :type="type" @click="click">
      <slot />
    </button>
  </span>
</template>

<script>
export default {
  name: "VueButton",

  props: {
    to: {
      type: String,
      required: false,
      default: ""
    },

    target: {
      type: String,
      required: false,
      default: ''
    },

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
  },

  methods: {
    click(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style scoped>
span {
  display: inline-block;
}

.btn {
  display: inline-block;
}

.btn > * {
  display: block;
  width: 100%;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  -webkit-appearance: none;
  color: inherit;
  background: #4d94b8;
  transition: 0.2s all linear;
  border: none;
  color: #fff;
  border-radius: 4px;
  line-height: 40px;
  margin: 0 auto;
  font-size: 18px;
}

.btn:hover > * {
  background: #069;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>