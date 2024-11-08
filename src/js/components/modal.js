const modal = document.querySelector('.modal-main')


if(modal){
  const modalButtons = document.querySelectorAll('.modal-btn')

  modalButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()

      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  })


}


const allModals = document.querySelectorAll('.modal')

if(allModals.length > 0){
  allModals.forEach(m => {
    const modalBody = m.querySelector('.modal__body')
    const modalClose = m.querySelector('.modal__close')

    modalBody.addEventListener('click', e => {
      e.stopPropagation()
    })



    modalClose.addEventListener('click', e => {
      m.classList.remove('active')
        document.body.style.overflow = null
    })

    if(window.matchMedia("(max-width: 768px)").matches){
      m.addEventListener('swiped-down', function(e) {
        m.classList.remove('active')
        document.body.style.overflow = null
      });
    } else {
      m.addEventListener('click', e => {
        m.classList.remove('active')
          document.body.style.overflow = null
      })
    }
  })
}
