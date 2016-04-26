import $ from 'jquery'
import Hammer from 'hammerjs'
import { changeState } from '../lib'

var $nav = $('.Nav')
var mainPanel = document.getElementById('App-container')

var hammerPanel = new Hammer(mainPanel)

hammerPanel.on('swiperight', function (ev) {
  changeState(ev, $nav)
})

hammerPanel.on('swipeleft', function (ev) {
  if ($nav.hasClass('is-active')) $nav.removeClass('is-active')
})
export default $nav
