        const product = document.querySelectorAll('main > div')
        const h2 = document.querySelectorAll('h2')
        const product_info = document.querySelectorAll('.product_info')
        const product_row1 = document.querySelectorAll('.product_row1')
        const product_row2 = document.querySelectorAll('.product_row2')
        const product_row3 = document.querySelectorAll('.product_row3')
        const p_3child = document.querySelectorAll('main > div >p:nth-child(3)')
        const p_4child = document.querySelectorAll('main > div >p:nth-child(4)')
        const p_5child = document.querySelectorAll('main > div >p:nth-child(5)')
        
        setTimeout(function(){
            window.scrollTo(0,0)
            h2[0].classList.add('slide_h2')
            product_info[0].classList.add('slide_product_info')
            product_row1[0].classList.add('slide_product_row1')
            product_row2[0].classList.add('slide_product_row2')
            product_row3[0].classList.add('slide_product_row3')
            p_3child[0].classList.add('slide_p_3child')
            p_4child[0].classList.add('slide_p_4child')
        },200)
        
        window.addEventListener('scroll',function(){
            if(product[1].getBoundingClientRect().top <= 250){
                h2[1].classList.add('slide_h2')
            product_info[1].classList.add('slide_product_info')
            product_row1[1].classList.add('slide_product_row1')
            product_row2[1].classList.add('slide_product_row2')
            product_row3[1].classList.add('slide_product_row3')
            p_3child[1].classList.add('slide_p_3child')
            p_4child[1].classList.add('slide_p_4child')
            p_5child[0].classList.add('slide_p_5child')
            }

            if(product[2].getBoundingClientRect().top <= 250){
                h2[2 ].classList.add('slide_h2')
            product_info[2 ].classList.add('slide_product_info')
            product_row1[2 ].classList.add('slide_product_row1')
            product_row2[2 ].classList.add('slide_product_row2')
            product_row3[2 ].classList.add('slide_product_row3')
            p_3child[2 ].classList.add('slide_p_3child')
            p_4child[2 ].classList.add('slide_p_4child')
            }
        })