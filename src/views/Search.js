
import { h } from 'ultradom'

const Search = (d, state, actions) =>
  h('input', {
    type: 'text',
    value: decodeURIComponent(state.Router.query.search),
    onkeypress: e => {
      e.keyCode === 13 && actions.Router.route({
        query: {
          search: encodeURIComponent(e.target.value)
        }
      })
    }
  })

export default Search
