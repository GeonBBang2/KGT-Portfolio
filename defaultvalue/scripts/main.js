// main-slide
let main_slide = document.querySelectorAll('#main_slide_wrap .slide')
let main_slide_timer = setInterval(main_slide_function,3000)
let num = 0
function main_slide_function(){
    for(let j of main_slide){j.style.opacity =0}
    num++
    if(num > main_slide.length-1){num = 0}
    main_slide[num].style.opacity = 1
}

// main-category
$('.lnb').hide()
    $('.gnb>li').on('mouseover',function(){
        $(this).find('.lnb').stop().slideDown()
        //==$(this) == 현재 이벤트 대상 (forEach의 target)
        //객체.find() 자식,자손 찾기
    })
    $('.gnb>li').on('mouseout',function(){
        $(this).find('.lnb').stop().slideUp()
    })

// main-products-like_btn
let like_btn = document.querySelectorAll('.p_like')

like_btn.forEach(function(target,index){
    target.addEventListener('click',function(e){
        e.preventDefault()
        target.style.color = 'red'
    })
})