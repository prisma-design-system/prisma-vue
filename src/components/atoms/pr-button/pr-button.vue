<template lang="pug">
  button(class="pr-button" class="buttonClasses" role="button" v-on="inputListeners")
    slot
    component(v-if="typeof icon === 'object'" :is="icon" class="bx--temp-fix" :class="`${carbonPrefix}--btn__icon`")
    svg(v-if="typeof icon === 'string'" :class="`${carbonPrefix}--btn__icon`")
      use(:href="icon")
</template>

<script lang="ts">
export default {
  name: 'PrButton',

  props: {
    icon: {
      type: [String, Object],
      default: undefined,
      validator: (value: unknown): boolean =>
        !value || typeof value === 'string',
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value: string): boolean =>
        ['primary', 'secondary', 'tertiary', 'ghost'].includes(value),
    },
    size: {
      type: String,
      default: undefined,
      validator: (value: string): boolean =>
        ['', 'block', 'small'].includes(value),
    },
  },
}
</script>
