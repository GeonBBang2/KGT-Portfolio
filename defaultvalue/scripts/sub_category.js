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

    let like_btn = document.querySelectorAll('.p_like')
// main-products-like_btn
like_btn.forEach(function(target,index){
    target.addEventListener('click',function(e){
        e.preventDefault()
        target.style.color = '#f00'
    })
})

let menu1_mobile_a = document.querySelectorAll('.menu1_mobile>a')
let menu1 = document.querySelectorAll('.menu1>a')

menu1_mobile_a[0].classList.remove('active')
menu1_mobile_a[3].classList.add('active')

menu1[0].classList.remove('active')
menu1[3].classList.add('active')
