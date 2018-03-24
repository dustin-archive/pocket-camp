
import { patch } from 'ultradom'
import app from '@whaaaley/pocket'

import Overlay from './store/Overlay'
import Router from './store/Router'

import App from './views/App'
import Main from './views/Main'
import RouterView from './views/RouterView'

let node

const main = app({
  state: {},
  store: {
    Overlay,
    Router
  },
  views: {
    App,
    Main,
    RouterView
  },
  render (views) {
    patch(node, (node = views.RouterView()))
  }
})

main.Router.init()

window.addEventListener('click', main.Overlay.blur)

window.addEventListener('hashchange', main.Router.init)
