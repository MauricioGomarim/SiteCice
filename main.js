const btnMobile = document.getElementById('btn-Mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')
  const body = document.getElementById('hide')

  nav.classList.toggle('active')
  body.classList.toggle('hide')
}

btnMobile.addEventListener('click', toggleMenu)
