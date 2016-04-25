import $ from 'jquery'

export function changeState (ev, element) {
  ev.preventDefault()
  $(element).toggleClass('is-active')
}

export function onScroll (ev, element) {
  if (window.scrollY >= 380) $(element).addClass('is-fixed')
  else $(element).removeClass('is-fixed')
}
