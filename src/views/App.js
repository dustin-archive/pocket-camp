import { h } from 'picodom'

import { Router } from './Router'

const App = (state, a, v, d) =>
  h('a', { href: '#Main' }, 'Tap to start!')

export { App }
