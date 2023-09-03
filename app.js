import side from './scripts/sidebar.js'

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

// ADD-ONS javascript
const checkBox = document.querySelectorAll('.check')
checkBox.forEach((check) => {
  check.addEventListener('click', changeBG)
  function changeBG() {
    check.style.backgroundColor = 'blue'
  }
})

// select plan

const planItem = document.querySelectorAll('.plan-item')
const selectPlan = document.getElementById('left')
const changeMOnthly = document.getElementById('cp1')
const changeYearly = document.getElementById('cp2')
changeMOnthly.addEventListener('click', changePlan)
changeYearly.addEventListener('click', changePlan2)

function changePlan() {
  selectPlan.style.paddingRight = '40px'
  selectPlan.style.paddingLeft = '0px'

  Mplan.map((planM) => {
    const { id, level, paragraph } = planM
    const plan1 = document.createElement('div')
    const plan = document.querySelector('.plan')
    plan.appendChild(plan1)
    plan1.innerHTML = `
<div class="plan-item">
  <img src="./assets/images/icon-arcade.svg" alt="Arcade" />
  <h3>${level}</h3>
  <p>${paragraph}</p>
</div>
`
    planItem.forEach((planI) => {
      planI.style.display = 'none'
    })
  })
}
function changePlan2() {
  selectPlan.style.paddingLeft = '40px'
  selectPlan.style.paddingRight = '0px'

  Yplan.map((planM) => {
    const { id, level, paragraph } = planM
    const plan1 = document.createElement('div')
    const plan = document.querySelector('.plan')
    plan.appendChild(plan1)
    plan1.innerHTML = `
<div class="plan-item">
  <img src="./assets/images/icon-arcade.svg" alt="Arcade" />
  <h3>${level}</h3>
  <p>${paragraph}</p>
</div>
`
    planItem.forEach((planI) => {
      planI.style.display = 'none'
    })
  })
}

const Mplan = [
  { id: 1, level: 'Arcade', paragraph: '$9 / mo' },
  { id: 2, level: 'Advanced', paragraph: '$12 / mo' },
  { id: 3, level: 'Pro', paragraph: '$15 / mo' },
]

const Yplan = [
  { id: 1, level: 'Arcade', paragraph: '$90 / yr' },
  { id: 2, level: 'Advanced', paragraph: '$120 / yr' },
  { id: 3, level: 'Pro', paragraph: '$150 / yr' },
]

// select plan ends here
