
import { h } from 'ultradom'

const Drop = (data, state, actions) => children =>
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

export default Drop
