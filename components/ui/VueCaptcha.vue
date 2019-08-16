<template>
  <canvas ref="canvas" width="250" height="40" />
</template>

<script>
export default {
  name: 'VueCaptcha',

  data() {
    return {
      charsArray: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lengthOtp: 6,
      captcha: [],
    }
  },

  computed: {
    code() {
      return this.captcha.join('')
    },
  },

  mounted() {
    this.createCaptcha()
  },

  methods: {
    createCaptcha() {
      for (var i = 0; i < this.lengthOtp; i++) {
        const index = Math.floor(Math.random() * this.charsArray.length + 1)
        if (this.captcha.indexOf(this.charsArray[index]) == -1)
          this.captcha.push(this.charsArray[index])
        else i--
      }

      const ctx = this.$refs.canvas.getContext('2d')
      ctx.font = '25px Georgia'

      this.createText(ctx, this.captcha.join(''), 80, 30)

      this.$emit('ready', this.code)
    },

    randomColor() {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },

    createText(ctx, str, x, y) {
      for (var i = 0; i <= str.length; ++i) {
        var ch = str.charAt(i)
        ctx.fillStyle = this.randomColor()
        ctx.fillText(ch, x, y)
        x += ctx.measureText(ch).width
      }
    },
  },
}
</script>


