let menu1_mobile_a = document.querySelectorAll('.menu1_mobile>a')
let menu1 = document.querySelectorAll('.menu1>a')

menu1_mobile_a[0].classList.remove('active')
menu1_mobile_a[1].classList.add('active')

menu1[0].classList.remove('active')
menu1[1].classList.add('active')

let default_bg = document.querySelector('.default_bg')
let default_filter = document.querySelector('.default_filter')

window.addEventListener('scroll',function(){
    if(default_bg.getBoundingClientRect().top <= 250){
        default_filter.style.height = '50vh'
    }
})
