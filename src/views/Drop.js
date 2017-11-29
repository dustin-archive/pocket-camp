import { h } from 'picodom'

const Drop = (state, actions, v, data) => children =>
  h('div', {
    class: 'drop _overlay'
  }, [
    h('button', {
      onclick (e) {
        e.stopPropagation()
        actions.Overlay.toggle(data)
      }
    }, data),
    h('div', {
      class: 'drop-region',
      style: state.Overlay.overlay !== data && {
        display: 'none'
      }
    }, children)
  ])

export { Drop }
