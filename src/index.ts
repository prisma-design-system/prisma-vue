import { App } from 'vue'
const ctx = require.context(
  './components/',
  true,
  /^(?!.*(?:\/_|-story\.vue|-test\.vue)).*\.vue$/
)
const prComponents = ctx.keys().map(ctx)

export default {
  install: (app: App): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.values(prComponents).forEach((prComponent: any) => {
      console.log(prComponent.default.name)
      app.component(prComponent.name, prComponent as typeof app)
    })
    // Plugin code goes here
  },
}
