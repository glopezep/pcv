import $ from 'jquery'

let $educationsList = $('.Educations-list')

let educations = [
  { title: 'High School', location: 'Colegio Espiritu Santo' },
  { title: 'Software Engineering', location: 'UNAPEC - Cursando' },
  { title: 'Frontend Developer', location: 'Platzi' },
  { title: 'Backend Developer', location: 'Platzi' }
]


function render (educations) {
  let html = ''
  educations.forEach(education => {
    let template = `
      <li class="Education">
        <div class="Education-left"><span class="Education-icon icon-study"></span></div>
        <div class="Education-right">
          <h4 class="Education-title">${education.title}</h4>
          <span class="Education-location">${education.location}</span>
        </div>
      </li>`
    html += template
  })
  return html
}

$educationsList.html(render(educations))
