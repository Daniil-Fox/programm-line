import {gsap} from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  const tl = gsap.timeline()
  const meanSlider = document.querySelector('.mean__slider')
  tl.to('.mean__slider .swiper-wrapper', {x: () => -(document.querySelector('.mean__slider .swiper-wrapper').scrollWidth - meanSlider.clientWidth)})

  ScrollTrigger.create({
    trigger: '.mean',
    animation: tl,
    start: 'top top',
    end: () => document.querySelector('.mean__slider .swiper-wrapper').scrollWidth,
    scrub: 2,
    pin: true
  })
})
