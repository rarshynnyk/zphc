<template>
  <vue-container>
    <br />
    <vue-logo />
    <br />
    <br />
    <br />
    <buttons-group>
      <vue-button block to="form" target="_blank">校验 - Anticounterfeiting</vue-button>
      <vue-button block to="https://zphcgroup.com/" target="_blank">关于我们 - ZPHC Group</vue-button>
      <vue-button block to="mailto:support@zphc.hk" target="_blank">电子邮件 - support@zphc.hk</vue-button>
    </buttons-group>
  </vue-container>
</template>

<script>
import VueContainer from '~/components/ui/VueContainer.vue'
import VueLogo from '~/components/ui/VueLogo.vue'
import VueButton from '~/components/ui/VueButton.vue'
import ButtonsGroup from '~/components/ui/ButtonsGroup.vue'

export default {
  components: {
    VueContainer,
    VueLogo,
    VueButton,
    ButtonsGroup,
  },
}
</script>