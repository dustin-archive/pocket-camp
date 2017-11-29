import { h } from 'picodom'

const NotFound = h('div', null, [
  h('div', null, '404')
])

// const Router = (state, a, views, d) => ({
//   '': views.App(),
//   '/main': views.Main()
// })[state.Router.path] || NotFound

const Router = (state, a, views, d) => {
  const fn = views[state.Router.path]
  return typeof fn === 'function' && fn() || NotFound
}

export { Router }
