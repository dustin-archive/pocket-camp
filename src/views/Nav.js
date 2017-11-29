import { h } from 'picodom'

const Link = (href, value) =>
  h('li', null, [
    h('a', { href }, value)
  ])

const Nav = (s, a, v, d) =>
  h('ul', null, [
    Link('#', 'home'),
    Link('#/404', 'not found'),
    Link('#/about', 'about'),
    Link('#/catalog', 'catalog'),
    Link('#/compare', 'compare'),
    Link('#/contact', 'contact'),
    Link('#/dashboard', 'dashboard'),
    Link('#/foobar', 'foobar'),
    Link('#/inventory', 'inventory'),
    Link('#/post', 'post'),
    Link('#/profile', 'profile'),
    Link('#/settings', 'settings'),
    Link('#/update', 'update')
  ])

export { Nav }
