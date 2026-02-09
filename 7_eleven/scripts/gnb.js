//slide lnb
$('.lnb').hide()
$('.nav_bg').hide()
//서브메뉴 마우스 이벤트 시 출력
$('.gnb').on('mouseover', function () {
    $('.lnb').stop().slideDown()
    $('.nav_bg').stop().slideDown()
    $('#header_bg').css("backgroundColor", "#fff")
})
$('.nav_bg').on('mouseover', function () {
    $('.lnb').stop().slideDown()
    $('.nav_bg').stop().slideDown()
    $('#header_bg').css("backgroundColor", "#fff")
})
$('.gnb').on('mouseout', function () {
    $('.lnb').stop().slideUp()
    $('.nav_bg').stop().slideUp()
    $('#header_bg').css("backgroundColor", "#ffffff50")
})
$('.nav_bg').on('mouseout', function () {
    $('.lnb').stop().slideUp()
    $('.nav_bg').stop().slideUp()
    $('#header_bg').css("backgroundColor", "#ffffff50")
})
