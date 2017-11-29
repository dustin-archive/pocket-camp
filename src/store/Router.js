
import { encode, decode } from '@whaaaley/query-string'

var Router = {
  init: function (s, actions) {
    var update = actions.update
    window.addEventListener('hashchange', update)
    update()
  },
  route: function (state, a, data) {
    window.location.hash = (data.path || state.path) + encode(data.query || state.query)
  },
  update: function () {
    var hash = window.location.hash
    var index = hash.indexOf('?')
    return {
      query: decode(hash.slice(index)),
      path: hash.slice(1, index === -1 ? hash.length : index)
    }
  }
}

export { Router }
