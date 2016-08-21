import $ from 'jquery'
import { changeState } from '../lib'

var $projectList = $('.Projects-list')
var $project = $('.Project')
var $projectInfo = $project.find('Project-bottom')

let projects = [
  { title: 'Partido MODA', description: 'Website con conexion a api de Wordpress', link: 'partido-moda'},
  { title: 'RkCreativa', description: 'Pagina web simple para empresa RkCreativa', link: 'rakcreativa' },
  { title: 'Classiccars', description: 'Ejemplo de una Single Page App', link: 'classiccars.nyc' },
  { title: 'SpiritRO', description: 'Simple maquetacion de una Landing Page', link: 'spiritro' },
  { title: 'Carvis', description: 'Website para empresa Carvis', link: 'carvis' },
  { title: 'Cafap', description: 'App open source con ReactJS para automatizar Cafeterias', link: 'cafapp' }
]

$projectList.on('click', '.Project', function (ev) { changeState(ev, this.children[1]) })

function checkLink (project) {
  if (project.link == 'cafapp') return `<a style='color:white;' href='http://www.github.com/glopezep/${project.link}' target='_blank'>Ver Repositorio</a>`
  return `<a style='color:white;' href='http://www.glopezep.github.io/${project.link}' target='_blank'>Ver en Github Pages</a>`
}

function render (projects) {
  let html = ''

  projects.forEach(project => {
    let template = `
      <li class='Project'>
        <div class='Project-imageContainer'></div>
        <div class='Project-bottom'>
          <h4 class='Project-title'>${project.title}</h4>
          <p Project-description>${project.description}</p>
          ${checkLink(project)}
        </div>
      </li>`
    html += template
  })
  return html
}

$projectList.html(render(projects))
