//변수
const header = document.querySelector('header')
const body = document.querySelector('body,html')
//1.header-nav
window.addEventListener('scroll',function(){
    if(body.scrollTop > 50){
        header.style.background = '#b29d95'
    }else{
        header.style.background = 'none'
    }
})




