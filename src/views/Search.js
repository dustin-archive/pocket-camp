import { h } from 'picodom'

const Search = (state, actions, v, d) =>
  h('input', {
    type: 'text',
    value: decodeURIComponent(state.Router.query.search),
    onkeypress (e) {
      e.keyCode === 13 && actions.Router.route({
        query: {
          search: encodeURIComponent(e.target.value)
        }
      })
    }
  })

export { Search }
