
var Overlay = {
  blur: function (state, a, data) {
    if (!data.target.classList.contains('_overlay') && state.overlay != null) {
      return { overlay: null }
    }
  },
  toggle: function (state, a, data) {
    var overlay = state.overlay
    return { overlay: overlay === data ? null : data }
  }
}

export default Overlay
