import { h } from 'picodom'

const Code = (s, a, v, data) =>
  h('div', {
    style: {
      whiteSpace: 'pre'
    }
  }, JSON.stringify(data, null, '  '))

export { Code }
