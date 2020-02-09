// Functions

// import prNotifications from './prNotifications/index.js'
// import prLoading from './prLoading/index.js'
// import prDialog from './prDialog/index.js'

// theme
import prTheme from '../utils/theme.js'

const prFunctions = {
  // prNotifications,
  // prLoading,
  prTheme
  // prDialog
}

export default Vue => {
  // vm.$pr.loading.close = prLoading.close
  Vue.prototype.$pr = prFunctions
}
