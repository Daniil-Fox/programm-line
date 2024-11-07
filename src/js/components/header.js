import {throttle} from './../functions/throttle.js'
const header = document.querySelector('header')

if(window.matchMedia("(min-width: 769px)").matches && header){
  const hero = document.querySelector('.hero')
  let isActive = false;
  function sc(){
    if(window.scrollY > hero.scrollHeight){
      if(isActive) return
      header.style.transform = 'translateY(-100%)'
      setTimeout(() => {
        header.style.position = 'fixed'
        header.style.left = '0'
        header.style.right = '0'
        header.style.top = '0'
        header.style.backgroundColor = '#fff'
        isActive = true
      }, 300)
      setTimeout(() => {
        header.style.transform = null
      }, 300)
    } else {
      if(!isActive) return
      header.style.transform = 'translateY(-100%)'
      setTimeout(() => {
        header.style.transform = null
        header.style.position = null
        header.style.left = null
        header.style.right = null
        header.style.top = null
        header.style.backgroundColor = null
        isActive = false
      }, 300)
    }
  }

  let f = throttle(sc)
  window.addEventListener('scroll', f)
}
