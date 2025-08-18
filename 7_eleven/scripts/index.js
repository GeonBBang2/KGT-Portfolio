//slide lnb
$('.lnb').hide()
$('.nav_bg').hide()
//서브메뉴 마우스 이벤트 시 출력
$('.gnb').on('mouseover',function(){
    $('.lnb').stop().slideDown()
    $('.nav_bg').stop().slideDown()
    $('#header_bg').css("backgroundColor","#fff")
})
$('.nav_bg').on('mouseover',function(){
    $('.lnb').stop().slideDown()
    $('.nav_bg').stop().slideDown()
    $('#header_bg').css("backgroundColor","#fff")
})
$('.gnb').on('mouseout',function(){
    $('.lnb').stop().slideUp()
    $('.nav_bg').stop().slideUp()
    $('#header_bg').css("backgroundColor","#ffffff50")
})
$('.nav_bg').on('mouseout',function(){
    $('.lnb').stop().slideUp()
    $('.nav_bg').stop().slideUp()
    $('#header_bg').css("backgroundColor","#ffffff50")
})

//slide main
const slide_main = document.querySelectorAll('.main_slide_container .main_slide');
const slide_main_container = document.querySelector('.main_slide_wrap .main_slide_container');
let slide_main_count = 0;
let slide_main_timer = setInterval(slide_main_func,5000);
function slide_main_func(){
    slide_main_count++
    if(slide_main_count >= slide_main.length){slide_main_count=0}
    slide_main_container.style.transform = `translateX(-${100*slide_main_count}vw)`
}
// event slide
const slide_dis = document.querySelectorAll('.event_slide_container .slide');
const slide_dis_container = document.querySelector('#event_slide_wrap .event_slide_container');
const slide_pagenation = document.querySelectorAll('#event_wrap .pagenation a');
let slide_dis_count = 0
let slide_dis_timer = setInterval(slide_dis_func,2500)
function slide_dis_func(){
    slide_dis_count++
    if(slide_dis_count >= slide_dis.length){slide_dis_count=0}
    slide_dis_container.style.transform = `translateX(-${500*slide_dis_count}px)`
}
slide_pagenation[0].addEventListener('click',function(e){
    e.preventDefault()
    slide_dis_count++
    if(slide_dis_count <= slide_dis.length){slide_dis_count = 0}
    slide_dis_container.style.transform = `translateX(${slide_dis_count*(500)}px)`
})
slide_pagenation[1].addEventListener('click',function(e){
    e.preventDefault()
    clearInterval(slide_dis_timer)
    slide_pagenation[1].style.display = 'none'
    slide_pagenation[2].style.display = 'inline-block'
})
slide_pagenation[2].addEventListener('click',function(e){
    e.preventDefault()
    slide_dis_timer = setInterval(slide_dis_func,2500)
    slide_pagenation[2].style.display = 'none'
    slide_pagenation[1].style.display = 'inline-block'
})
slide_pagenation[3].addEventListener('click',function(e){
    e.preventDefault()
    slide_dis_count++
    if(slide_dis_count >= slide_dis.length){slide_dis_count=0}
    slide_dis_container.style.transform = `translateX(-${slide_dis_count*(500)}px)`
})

// product_event
let product_tab1 = document.querySelector('.p_event_title a:nth-child(1)');
let product_tab2 = document.querySelector('.p_event_title a:nth-child(2)');
let product_tab3 = document.querySelector('.p_event_title a:nth-child(3)');
let product_tab4 = document.querySelector('.p_event_title a:nth-child(4)');
let product_tab5 = document.querySelector('.p_event_title a:nth-child(5)');
let plusone = document.querySelector('.plusone');
let plustwo = document.querySelector('.plustwo');
let wmdwjd = document.querySelector('.wmdwjd');
let discount = document.querySelector('.discount');
let pb_product = document.querySelector('.pb_product');

product_tab1.addEventListener('click',function(e){
    e.preventDefault()
    plusone.style.display = 'block'
    plustwo.style.display = 'none'
    wmdwjd.style.display = 'none'
    discount.style.display = 'none'
    pb_product.style.display = 'none'
    
    product_tab1.classList.add('active')
    product_tab2.classList.remove('active')
    product_tab3.classList.remove('active')
    product_tab4.classList.remove('active')
    product_tab5.classList.remove('active')
})
product_tab2.addEventListener('click',function(e){
    e.preventDefault()
    plusone.style.display = 'none'
    plustwo.style.display = 'block'
    wmdwjd.style.display = 'none'
    discount.style.display = 'none'
    pb_product.style.display = 'none'
    
    product_tab1.classList.remove('active')
    product_tab2.classList.add('active')
    product_tab3.classList.remove('active')
    product_tab4.classList.remove('active')
    product_tab5.classList.remove('active')
})
product_tab3.addEventListener('click',function(e){
    e.preventDefault()
    plusone.style.display = 'none'
    plustwo.style.display = 'none'
    wmdwjd.style.display = 'block'
    discount.style.display = 'none'
    pb_product.style.display = 'none'
    
    product_tab1.classList.remove('active')
    product_tab2.classList.remove('active')
    product_tab3.classList.add('active')
    product_tab4.classList.remove('active')
    product_tab5.classList.remove('active')
})
product_tab4.addEventListener('click',function(e){
    e.preventDefault()
    plusone.style.display = 'none'
    plustwo.style.display = 'none'
    wmdwjd.style.display = 'none'
    discount.style.display = 'block'
    pb_product.style.display = 'none'
    
    product_tab1.classList.remove('active')
    product_tab2.classList.remove('active')
    product_tab3.classList.remove('active')
    product_tab4.classList.add('active')
    product_tab5.classList.remove('active')
})
product_tab5.addEventListener('click',function(e){
    e.preventDefault()
    plusone.style.display = 'none'
    plustwo.style.display = 'none'
    wmdwjd.style.display = 'none'
    discount.style.display = 'none'
    pb_product.style.display = 'block'
    
    product_tab1.classList.remove('active')
    product_tab2.classList.remove('active')
    product_tab3.classList.remove('active')
    product_tab4.classList.remove('active')
    product_tab5.classList.add('active')
})