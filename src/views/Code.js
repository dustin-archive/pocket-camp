
import { h } from 'ultradom'

const Code = (s, a, v, data) =>
  h('div', {
    style: {
      whiteSpace: 'pre'
    }
  }, JSON.stringify(data, null, '  '))

export default Code
