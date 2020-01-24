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

export default vm => {
  Object.values(prFunctions).forEach(prFunctions => {
    if (prFunctions.hasOwnProperty('subName')) {
      vm.$pr[prFunctions.name][prFunctions.subName] = prFunctions.prfunction
    } else {
      vm.$pr[prFunctions.name] = prFunctions.prfunction
    }
  })

  // vm.$pr.loading.close = prLoading.close
}
