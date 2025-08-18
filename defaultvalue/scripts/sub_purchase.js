// order_btn_num(수량입력)
let order_num = document.querySelector('#num')
let order_btn_num = document.querySelector('#order_btn_num')
let result_price_num = document.querySelector('.result_price_num')

let price = 35000
let result1 = 0

console.log(order_num,result_price_num);

order_btn_num.addEventListener('click',function(){
    result1 = order_num.value*price
    result_price_num.innerHTML = result1.toLocaleString('ko-kr')
})

// like
let like_btn = document.querySelector('#like_btn')

like_btn.addEventListener('click',function(e){
    e.preventDefault()
    like_btn.style.color = 'red'
})

// 모바일 order
let mobile_order_btn = document.querySelector('#mobile_order_btn')
let mo_order_appear = document.querySelector('.mo_order_appear')
let mo_close_btn = document.querySelector('.mo_close_btn')
let mo_order_num = document.querySelector('.mo_order_appear #num')
let mo_order_btn_num = document.querySelector('.mo_order_appear #order_btn_num')
let mo_result_price_num = document.querySelector('.mo_order_appear .result_price_num')

console.log(mo_order_btn_num);
mo_order_btn_num.addEventListener('click',function(){
    result1 = mo_order_num.value*price
    mo_result_price_num.innerHTML = result1.toLocaleString('ko-kr')
})

mobile_order_btn.addEventListener('click',function(){
    mo_order_appear.style.height = '200px'
})
mo_close_btn.addEventListener('click',function(){
    mo_order_appear.style.height = 0
})
// 모바일 like
let mobile_like_btn = document.querySelector('#mobile_like_btn')

mobile_like_btn.addEventListener('click',function(e){
    e.preventDefault()
    mobile_like_btn.style.color = 'red'
})