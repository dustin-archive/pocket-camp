
import { h } from 'ultradom'

const Menu = () =>
  h('div', null, 'menu')

const Top = () =>
  h('div', null, [
    h('div', null, 'level'),
    h('div', null, 'leaves'),
    h('div', null, 'bells')
  ])

const Right = () =>
  h('div', null, [
    Menu(),
    h('div', null, 'goals'),
    h('div', null, 'camera'),
    h('div', null, 'layout'),
    h('div', null, 'campers')
  ])

const Bottom = () =>
  h('div', null, [
    h('div', null, 'items'),
    h('div', null, 'special'),
    h('div', null, 'map'),
    h('div', null, 'contacts'),
    h('div', null, 'more')
  ])

const Main = (s, a, v, d) =>
  h('div', null, [
    Top(),
    h('br'),
    Right(),
    h('br'),
    Bottom()
  ])

export default Main
