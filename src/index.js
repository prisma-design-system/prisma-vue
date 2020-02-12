import prTheme from './utils/theme.js'
import './style/prisma.styl'
import prFunctions from './functions'

const ctx = require.context('./components/', true, /^(?!.*(?:\/_|-story\.vue|-test\.vue)).*\.vue$/)
const prComponents = ctx.keys().map(ctx)

export default {
  install (Vue, options) {
    // Use Components
    Object.values(prComponents).forEach(prComponent => {
      Vue.component(prComponent.name, prComponent)
    })

    if (options) {
      if (options.hasOwnProperty('theme')) {
        if (options.theme.hasOwnProperty('mode')) {
          if (options.theme.mode !== 'lighten') {
            prTheme.change(options.theme.mode, options.server)
          }
        }
        if (options.theme.hasOwnProperty('colors')) {
          if (typeof window !== 'undefined') {
            prTheme.prfunction(options.theme.colors, options.server)
          }
        }
      }
    }
    prFunctions(Vue)
  }
}

export { PrButton } from './components/atoms/pr-button'
