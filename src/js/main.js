import './_components.js';


const sign = document.querySelector('.sign')

if(sign){
  const items = document.querySelectorAll('.sign__item')

  for(let i  = 0; i < items.length / 2; i++){
    const maxHeight = Math.max(items[i].scrollHeight, items[i+(items.length / 2)].scrollHeight)
    items[i].style.height = maxHeight + 'px'
    items[i+(items.length / 2)].style.height = maxHeight + 'px'
  }
}


