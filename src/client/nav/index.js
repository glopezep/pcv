import $ from 'jquery'
import Hammer from 'hammerjs'
import { changeState } from '../lib'

var $nav = $('.Nav')
var $appContainer = $('.App-container')

var hammerPanel = new Hammer($appContainer)
var sidePanel = new Hammer($nav)

hammerPanel.on('swiperight', () => {
  changeState(null, sidePanel)
})

export default $nav
