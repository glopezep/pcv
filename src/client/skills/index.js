import $ from 'jquery'

let $skills = $('.Skills-list')

let skills = [
  { name: 'HTML5', level: 100 },
  { name: 'CCS3', level: 100 },
  { name: 'Responsive Design', level: 80 },
  { name: 'Jade', level: 90 },
  { name: 'Stylus', level: 90 },
  { name: 'Sass', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'ReactJS', level: 80 },
  { name: 'Redux', level: 70 },
  { name: 'AngularJS', level: 50 },
  { name: 'Backbone', level: 50 },
  { name: 'NodeJS', level: 80 },
  { name: 'MongoDB', level: 80 },
  { name: 'Browserify', level: 90 },
  { name: 'Babel', level: 90 },
  { name: 'Java', level: 50 }

]

let colors = {
  green: '#02d610',
  orange: '#FFA077',
  red: '#ff0000'
}


function checkLevel (level) {
  if (level >= 80) return colors.green
  else if (level >= 60 && level <= 79) return colors.orange
  else return colors.red
}


function render (skills) {
  let html = ''
  skills.forEach(skill => {
    let template = `<li style='border-bottom-color:${checkLevel(skill.level)}' class='Skill'>
      <div class='Skill-left'><span style='color:${checkLevel(skill.level)}' class='Skill-value'>${skill.name}</div>
      <div class='Skill-right'><span style='color:${checkLevel(skill.level)}' class='Skill-value'>${skill.level}</span></div>
    </li>`
    html += template
  })
  return html
}

$skills.html(render(skills))
