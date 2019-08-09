<template>
  <nuxt-link to="/" class="logo">
    <strong>
      <img :src="src" :alt="alt" />
    </strong>
  </nuxt-link>
</template>

<script>
import logoSrc from "~/assets/images/logo.jpg";

export default {
  name: "VueLogo",

  data() {
    return {
      src: logoSrc,
      alt: "ZPHC"
    };
  }
};
</script>

<style scoped>
.logo {
  display: block;
  margin-bottom: 30px;
}

img {
  display: block;
  max-width: 100%;
}
</style>