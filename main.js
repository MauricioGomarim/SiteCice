const btnMobile = document.getElementById('btn-Mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')

  nav.classList.toggle('active')
}

function menuhide() {
  const nav = document.getElementById('nav')

  nav.classList.remove('active')
}

btnMobile.addEventListener('click', toggleMenu)
menu.addEventListener('click', menuhide)
