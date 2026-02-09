class GJHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <style>
        /* common style */
        body > * {
        width: 1200px;
        margin: 0 auto;
    }
        /* //common style */
    /* header */


header h1 {}
header h1 a {
    background: url(./images/bg_logo.png) no-repeat left top;
    display: block; width: 85px; height: 30px;
    text-indent: -9999px;
}
header nav {}
header nav a{color: #fff; margin-left: 30px;}
header nav a:first-child {margin-left: 18px;}
header nav a span{
    background: url(../images/ico_rsv.png); 
    background-repeat: no-repeat;
    width: 16px; height: 14px;
    margin-left: 5px;
    display: inline-block;
}
header>a#mobile_nav {display: none;}
</style>

<header>
    <h1><a href="index.html">그랜드조선부산호텔</a></h1>
    <nav>
        <a href="sub_rooms.html">RESERVATION</a>
        <a href="sub_dining.html">OFFERS</a>
        <a href="sub_activity.html">MY RESERVATION</a>
    </nav>
    <a href="#" id="mobile_nav">전체보기</a>
</header>

`;

//변수
const header = document.querySelector('header');
const body = document.querySelector('body,html');
header.style.background = '#00000050';
//1.header-nav
window.addEventListener('scroll',function(){
    if(body.scrollTop > 50){
        header.style.background = '#b29d95';
    }else{
        header.style.background = '#00000050';
    }
})
    }
}
customElements.define('grandjosun-header', GJHeader);