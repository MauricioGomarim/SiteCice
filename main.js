// const btnMobile = document.getElementById('menu-btn_burguer')

function toggleMenu() {
  const nav = document.getElementById('nav')

  nav.classList.toggle('active')
}

function menuhide() {
  const nav = document.getElementById('nav')

  nav.classList.remove('active')
}

// btnMobile.addEventListener('click', toggleMenu)

menu.addEventListener('click', menuhide)

const menuBtn = document.querySelector('.menu-btn')

let menuOpen = false

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    menuOpen = false
  }

  toggleMenu()
})
