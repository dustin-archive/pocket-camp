
import { patch } from 'picodom'
import app from '@whaaaley/paperapp'

import * as store from './store'
import * as views from './views'

let node

const paper = app({
  store,
  views,
  render (views) {
    patch(node, (node = views.Router()))
  }
})

paper.Overlay.init()
paper.Router.init()
