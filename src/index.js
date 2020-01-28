import * as prComponents from './components'
import prTheme from './utils/theme.js'
import './style/prisma.styl'
import { injectDirectionClass } from './utils/rtl'
import prFunctions from './functions'

export default {
  install (Vue, options) {
    // Use Components
    Object.values(prComponents).forEach(prComponent => {
      Vue.use(prComponent)
    })

    if (options) {
      if (options.hasOwnProperty('theme')) {
        if (options.theme.hasOwnProperty('colors')) {
          if (typeof window !== 'undefined') {
            prTheme.prfunction(options.theme.colors, options.server)
          }
        }
      }
    }

    Vue.mixin({
      watch: {
        '$pr.rtl': {
          handler (val) {
            injectDirectionClass(val)
          }
        }
      },
      beforeCreate () {
        // create $pr property if not exist
        if (!this.$pr) {
          // define $pr reactive properties
          this.$pr = Vue.observable(options)
          // define $pr functions
          prFunctions(this)
        }
      },
      mounted () {
        // inject the direction class for the initial options
        injectDirectionClass(this.$pr.rtl)
      }
    })
  }
}

// export { prisma }
