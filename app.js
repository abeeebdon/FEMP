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
