const tab_title = document.querySelectorAll('#tab_title a')
const tab_c = document.querySelectorAll('#tab_contents .tab_c')
console.log(tab_title,tab_c);

tab_title[0].addEventListener('click',function(){
    for(let i of tab_c){i.style.display='block'}
    for(let j of tab_title){j.classList.remove('active')}
    tab_title[0].classList.add('active')
})
tab_c.forEach(function(target,index){
    console.log(target,index);
    tab_title[index+1].addEventListener('click',function(e){
        e.preventDefault()
        for(let i of tab_c){i.style.display='none'}
        target.style.display='block'
        //클릭한 제목 활성화 클래스 적용
        for(let j of tab_title){j.classList.remove('active')}
        tab_title[index+1].classList.add('active')
    })
})

/* tab_title.forEach(function(target,index){
    target.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of tab_title){i.classList.remove('active')}
        tab_title[index].classList.add('active')
        for(let j of tab_c){j.style.display = 'none'}
        tab_c[index-1].style.display = 'block'
    })
    tab_title[0].addEventListener('click',function(){
        for(let i of tab_c){i.style.display = 'block'}
    })
}) */














