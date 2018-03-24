
import { encode, decode } from '@whaaaley/query-string'

const Router = {
  init: () => {
    const hash = window.location.hash
    const index = hash.indexOf('?')
    return {
      query: decode(hash.slice(index)),
      path: hash.slice(1, index === -1 ? hash.length : index)
    }
  },
  route: (data, state) => {
    window.location.hash = (data.path || state.path) + encode(data.query || state.query)
  }
}

export default Router
