<template lang="pug">
  button(class="pr-button" :class="buttonClasses" role="button" v-on="inputListeners")
    slot
    component(v-if="typeof icon === 'object'" :is="icon" class="bx--temp-fix" :class="`${carbonPrefix}--btn__icon`")
    svg(v-if="typeof icon === 'string'" :class="`${carbonPrefix}--btn__icon`")
      use(:href="icon")
</template>

<script>
export default {
  name: 'PrButton',
  props: {
    icon: {
      type: [String, Object],
      default: undefined,
      validator (val) {
        if (!val || typeof val === 'string') {
          return true
        }
        return val.render !== null
      }
    },
    type: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary', 'tertiary', 'ghost'].includes(val)
    },
    size: {
      type: String,
      default: undefined,
      validator: val => ['', 'block', 'small'].includes(val)
    }
  },
  computed: {
    // Bind listeners at the component level to the embedded input element and
    // add our own input listener to service the v-model. See:
    // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
    inputListeners () {
      return Object.assign({}, this.$listeners, {
        click: event => this.$emit('click', event)
      })
    },
    buttonClasses () {
      let classes = [`${this.carbonPrefix}--btn`, `${this.carbonPrefix}--btn--${this.type.toLowerCase()}`]
      if (this.size === 'small' || (this.size === undefined)) {
        classes.push(`${this.carbonPrefix}--btn--sm`)
      }
      if (this.size === 'field') {
        classes.push(`${this.carbonPrefix}--btn--field`)
      }
      return classes
    }
  }
}
</script>
