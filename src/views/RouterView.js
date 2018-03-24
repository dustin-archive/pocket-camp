
import { h } from 'ultradom'

const NotFound = () =>
  h('div', null, [
    h('div', null, '404')
  ])

const RouterView = (state, a, views, d) => ({
  '': views.App,
  '/main': views.Main
}[state.Router.path] || NotFound)()

export default RouterView
