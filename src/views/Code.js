
import { h } from 'ultradom'

const Code = data =>
  h('div', {
    style: {
      whiteSpace: 'pre'
    }
  }, JSON.stringify(data, null, '  '))

export default Code
