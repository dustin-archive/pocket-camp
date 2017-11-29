import { h } from 'picodom'

const App = (state, actions, views, d) =>
  h('div', null, [
    h('h1', null, 'Router:'),
    h('button', {
      onclick () {
        actions.Router.route({ path: '/foo', query: { foo: 'bar' } })
      }
    }, 'foo'),
    h('br'),
    h('button', {
      onclick () {
        actions.Router.route({ path: '/baz', query: { qux: 'corge' } })
      }
    }, 'baz'),
    h('br'),
    h('h1', null, 'Drop:'),
    views.Drop('one')([
      h('div', null, 'one')
    ]),
    views.Drop('two')([
      h('div', null, 'two')
    ]),
    views.Drop('three')([
      h('div', null, 'three')
    ]),
    h('br'),
    h('h1', null, 'State:'),
    views.Code(state)
  ])

export { App }
