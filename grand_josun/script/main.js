//1. main-slide
const f_slide = document.querySelectorAll('#slide_check_wrap .slide')
const f_slide_timer = setInterval(f_slide_function,3000)
let num = 0
console.log(f_slide.length);
function f_slide_function(){

    for(let j of f_slide){j.style.opacity =0}
    num++
    if(num > f_slide.length-1){num = 0}
    f_slide[num].style.opacity = 1
}

//2. check in/out open
const check_open = document.querySelector('.check_open')
const bar_num = document.querySelector('.number')
const close_btn = document.querySelector('.check_open .close')

check_open.style.height = 0
bar_num.addEventListener('click',function(){
    check_open.style.height = '526px'
})
close_btn.addEventListener('click',function(){
    check_open.style.height = '0'
})

//3.slide discovery
const slide_dis = document.querySelectorAll('.slide_container .slide')
const slide_dis_container = document.querySelector('#discovery_slide_wrap .slide_container')
const slide_pagenation = document.querySelectorAll('#discovery_wrap .pagenation a')
let slide_dis_count = 0
let slide_dis_timer = setInterval(slide_dis_func,3000)

function slide_dis_func(){
    slide_dis_count++
    if(slide_dis_count >= slide_dis.length){slide_dis_count=0}
    slide_dis_container.style.transform = `translateX(-${600*slide_dis_count}px)`
    for(let i of slide_pagenation){i.classList.remove('active')} 
    slide_pagenation[slide_dis_count].classList.add('active')
}

//3. slide discovery-2 pagenation click -> 이동 

slide_pagenation.forEach(function(target,index){
    target.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of slide_pagenation){i.classList.remove('active')}
        slide_pagenation[index].classList.add('active')
        slide_dis_container.style.transform = `translateX(-${566*index}px)`
        clearInterval(slide_dis_timer)
        slide_dis_count = index
        slide_dis_timer = setI
        nterval(slide_dis_func, 3000)
        console.log(index);
    })
})