
const Overlay = {
  blur: (data, state) => {
    if (!data.target.classList.contains('_overlay') && state.overlay != null) {
      return { overlay: null }
    }
  },
  toggle: (data, state) => {
    const overlay = state.overlay
    return { overlay: overlay === data ? null : data }
  }
}

export default Overlay
