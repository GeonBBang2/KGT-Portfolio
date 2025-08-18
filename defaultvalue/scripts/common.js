// search btn
let search_btn = document.querySelector('header .search_btn')
let search_slide = document.querySelector('#search_slide')
let close_btn = document.querySelector('.close_btn')

search_btn.addEventListener('click',function(e){
    e.preventDefault()
    search_slide.style.height= '400px'
})
close_btn.addEventListener('click',function(e){
    e.preventDefault()
    search_slide.style.height= 0
})
// mobile menu
let moblie_menu_btn = document.querySelector('.moblie_menu_btn')
let moblie_close_btn = document.querySelector('.moblie_close_btn')
let mobile_menu = document.querySelector('.mobile_menu')
moblie_close_btn.style.display = 'none'

moblie_menu_btn.addEventListener('click',function(e){
    e.preventDefault()
    mobile_menu.style.height = '420px'
    moblie_menu_btn_img.style.display = 'none'
    moblie_close_btn.style.display = 'block'
})

moblie_close_btn.addEventListener('click',function(e){
    e.preventDefault()
    mobile_menu.style.height = 0
    moblie_menu_btn_img.style.display = 'block'
    moblie_close_btn.style.display = 'none'
})