// main bnr slide
const bnr_slide = document.querySelectorAll('#slide_bnr_wrap .slide')
const slide_bnr_container = document.querySelector('#slide_bnr_wrap .slide_bnr_container')
const next_btn = document.querySelector('#slide_bnr_wrap .next_btn')
const prev_btn = document.querySelector('#slide_bnr_wrap .prev_btn')
let slide_bnr_count = 0

    let main_swcon = new Swiper('.swiper-container',{
    direction:'horizontal',
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
    loop:true,
    navigation:{
        nextEl:'.next_btn',
        prevEl:'.prev_btn'
    }
})

//campain slide
const cam_slide_container = document.querySelector('.cam_slide_wrap .cam_slide_container')
const cam_slide = document.querySelectorAll('.cam_slide_wrap .cam_slide')

let cam_slide_count = 0
let cam_slide_timer = setInterval(cam_slide_func,2000)

function cam_slide_func(){
    cam_slide_count++
    if(cam_slide_count >= cam_slide.length){cam_slide_count=0}
    cam_slide_container.style.transform = `translateX(-${455*cam_slide_count}px)`
}


