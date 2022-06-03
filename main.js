function toggleMenu() {
  const nav = document.getElementById('nav')

  nav.classList.toggle('active')
}

function menuhide() {
  const nav = document.getElementById('nav')
  const body = document.querySelector('body')

  nav.classList.remove('active')
  body.classList.remove('hide')
}

menu.addEventListener('click', menuhide)

/*               ========            */

const menuBtn = document.querySelector('.menu-btn')

const body = document.querySelector('body')

let menuOpen = false

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    body.classList.add('hide')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    body.classList.remove('hide')
    menuOpen = false
  }

  toggleMenu()
})
