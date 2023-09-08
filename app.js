import side from './scripts/sidebar.js'

// ------------- Showing the side with javascript-----------

side.map((linked) => {
  const container = document.querySelector('.container')
  const lis = document.createElement('div')
  container.appendChild(lis)
  lis.className = 'list'

  const { number, name, link } = linked
  lis.innerHTML = `
            <div class="list-content">
            <div class="list-content-link"><a href="${link}">${number}</a></div>
            <div class="list-content-text">
              <h5>Step ${number}</h5>
              <p>${name}</p>
            </div>
          </div>
  `
})

//------------------ ADD-ONS javascript
const checkBox = document.querySelectorAll('.check')
checkBox.forEach((check) => {
  check.addEventListener('click', changeBG)
  function changeBG() {
    check.style.backgroundColor = 'blue'
  }
})

// select plan ends here

// ========================
// The Button========

// select plan

const selectPlan = document.getElementById('left')
const changeMonthly = document.getElementById('cp1')
const changeYearly = document.getElementById('cp2')
changeMonthly.addEventListener('click', changePlan)
changeYearly.addEventListener('click', changePlan2)
const monthP = document.getElementById('planM')
const yearP = document.getElementById('planY')

function changePlan() {
  selectPlan.style.paddingRight = '40px'
  selectPlan.style.paddingLeft = '2px'
  yearP.style.display = 'none'
  monthP.style.display = 'flex'
}

function changePlan2() {
  selectPlan.style.paddingLeft = '40px'
  selectPlan.style.paddingRight = '2px'
  yearP.style.display = 'flex'
  monthP.style.display = 'none'
}

// const Mplan = [
//   { id: 1, level: 'Arcade', paragraph: '$9 / mo' },
//   { id: 2, level: 'Advanced', paragraph: '$12 / mo' },
//   { id: 3, level: 'Pro', paragraph: '$15 / mo' },
// ]

// const Yplan = [
//   { id: 1, level: 'Arcade', paragraph: '$90 / yr' },
//   { id: 2, level: 'Advanced', paragraph: '$120 / yr' },
//   { id: 3, level: 'Pro', paragraph: '$150 / yr' },
// ]
