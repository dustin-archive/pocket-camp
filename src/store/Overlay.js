
var init = { overlay: null }

var Overlay = {
  init: function (state, actions) {
    window.addEventListener('click', function (e) {
      !e.target.classList.contains('_overlay') && actions.reset()
    })
    return init
  },
  reset: function (state) {
    if (state.overlay !== null) return init
  },
  toggle: function (state, actions, data) {
    if (state.overlay === data) {
      actions.reset()
    } else {
      return { overlay: data }
    }
  }
}

export { Overlay }
