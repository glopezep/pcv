import $ from 'jquery'
import { changeState } from '../lib'

var $project = $('.Project')
var $projectInfo = $project.find('Project-bottom')

$project.on('click', function (ev) {
  changeState(ev, this.children[1])
})
