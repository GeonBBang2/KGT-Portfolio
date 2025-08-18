//1.header-nav
const header_top = document.querySelector('.header_top')
const body = document.querySelector('body,html')

window.addEventListener('scroll',function(){
    if(body.scrollTop > 50){
        header_top.style.height = '0'
    }else{
        header_top.style.height = '80px'
    }
})