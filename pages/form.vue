<template>
  <vue-container>
    <vue-panel offset>
      <vue-panel-heading>
        <h2>ZPHC.HK Anti-Counterfeiting Center</h2>
      </vue-panel-heading>
      <vue-panel-body>
        <p>In order to assure all of you are enjoying the benefits of authentic ZPHC™ products, our company is actively finding the solutions to verify authenticity.</p>
        <p>You can easily identify your purchased kit by the texture of the Anti-Counterfeiting sticker on the package:</p>
        <br />
        <br />
        <vue-step
          v-for="(step, index) in steps"
          :key="index"
          :header="step.header"
          :text="step.text"
        />
        <img :src="src" :alt="alt" class="logo" />
        <form @submit.prevent="submit(model)">
          <vue-input v-model="model.code" label="Type Anti-Counterfeiting code:" />
          <vue-button type="submit">CHECK</vue-button>
        </form>
      </vue-panel-body>
    </vue-panel>
  </vue-container>
</template>

<script>
import VueContainer from "~/components/ui/VueContainer.vue";
import VuePanel from "~/components/ui/VuePanel.vue";
import VuePanelHeading from "~/components/ui/VuePanelHeading.vue";
import VuePanelBody from "~/components/ui/VuePanelBody.vue";
import VueButton from "~/components/ui/VueButton.vue";
import VueInput from "~/components/ui/VueInput.vue";
import VueStep from "~/components/ui/VueStep.vue";
import ButtonsGroup from "~/components/ui/ButtonsGroup.vue";

import img from "~/assets/images/zphc.png";

import txt from "~/assets/zphcCode.txt";

export default {
  components: {
    VueContainer,
    VuePanel,
    VuePanelHeading,
    VuePanelBody,
    VueButton,
    VueInput,
    VueStep,
    ButtonsGroup
  },

  data() {
    return {
      src: img,
      alt: "zphc",
      steps: [
        {
          header: "Step 1",
          text:
            "Observe the sticker carefully before you open the kit. </br>It should be intact and the fibers must be embedded into the Anti-Counterfeiting sticker."
        },
        {
          header: "Step 2",
          text:
            "Query the serial symbols on the sticker. </br>Enter them in the below verification form and press 'Check'."
        }
      ],
      model: {
        code: "",
        captcha: ""
      }
    };
  },

  computed: {
    codes() {
      return txt.split(/\r?\n/) || [];
    }
  },

  methods: {
    submit({ code }) {
      if (this.codes.includes(code)) {
        alert("Success");
      } else {
        alert("Please, type a valid serial number");
      }
    }
  }
};
</script>

<style scoped>
.logo {
  padding-top: 20px;
  padding-bottom: 25px;
}
</style>
