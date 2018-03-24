
import { h } from 'ultradom'

const NotFound = d =>
  h('div', null, [
    h('div', null, '404')
  ])

const RouterView = (d, state, a, views) => ({
  '': views.App,
  '/main': views.Main
}[state.Router.path] || NotFound)()

export default RouterView
