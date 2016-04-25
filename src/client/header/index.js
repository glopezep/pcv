import $ from 'jquery'
import $nav from '../nav'
import { changeState, onScroll } from '../lib'
// Selectores
var $header = $('.Header')
var $headerButton = $header.find('.Header-button')

// Delegado de eventos
$(document).on('scroll', function (ev) {
  console.log(window.scrollY)
  onScroll(ev, $header)
})

$headerButton.on('click', function (ev) {
  changeState(ev, $nav)
})
