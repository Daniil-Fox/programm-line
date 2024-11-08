const menu = document.querySelector('.menu')
const header = document.querySelector('header')

if(menu){
  const menuBtn = document.querySelector('.header__burger')
  const menuItems = menu.querySelectorAll('.nav__link')
  menuBtn.addEventListener('click', e => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    document.body.classList.toggle('menu-active')
  })

  menuItems.forEach(link => {
    link.addEventListener('click', e => {
      menu.classList.remove('active')
      document.body.classList.remove('menu-active')
    })
  })

  header.addEventListener('click', e => {
    e.stopPropagation()
  })
  menu.addEventListener('click', e => {
    e.stopPropagation()
  })
  document.querySelector('.site-container').addEventListener('click', e => {
    menu.classList.remove('active')
    menuBtn.classList.remove('active')
    document.body.classList.remove('menu-active')
  })
}
