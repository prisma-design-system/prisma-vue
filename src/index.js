import * as prComponents from './components'
import { injectDirectionClass } from './utils/rtl'
// import prisma from './components/prisma'

export default {
  install (Vue, options) {
    // Use Components
    Object.values(prComponents).forEach(prComponent => {
      Vue.use(prComponent)
    })

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
