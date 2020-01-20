import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import PrButton from './PrButton.vue'

export default {
  title: 'Button',
  component: PrButton
}

export const Text = () => ({
  components: { PrButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') }
})

export const Jsx = () => ({
  components: { PrButton },
  render (h) {
    return <my-button onClick={this.action}>With JSX</my-button>
  },
  methods: { action: linkTo('clicked') }
})

export const Emoji = () => ({
  components: { PrButton },
  template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  methods: { action: action('clicked') }
})
