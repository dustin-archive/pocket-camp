
var Overlay = {
  blur: function (data, state) {
    if (!data.target.classList.contains('_overlay') && state.overlay != null) {
      return { overlay: null }
    }
  },
  toggle: function (data, state) {
    var overlay = state.overlay
    return { overlay: overlay === data ? null : data }
  }
}

export default Overlay
