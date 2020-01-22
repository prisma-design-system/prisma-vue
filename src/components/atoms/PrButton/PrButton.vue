<template lang="html">
  <button> dsd </button>
</template>

<script>
// import _color from '../../utils/color.js'
export default {
  name: 'PrButton',
  data () {
    return {
      buttonStyles: {
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        cursor: 'pointer',
        fontSize: 15,
        padding: '3px 10px',
        margin: 10
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
  template: `
    <button :style="buttonStyles" @click="onClick">
      <slot></slot>
    </button>
  `
}
</script>
