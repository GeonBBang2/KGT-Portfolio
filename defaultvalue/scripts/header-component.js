class DVHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id="search_slide">
        <div class="search_slide_bg">
            <div class="search_slide_top">
                <h3>검색</h3>
                <a href="#" class="close_btn"><img src="images/close.png" alt="닫기"></a>
            </div>
            <div class="search_slide_inner">
                <input type="text" placeholder="검색어를 입력하세요">
                <select name="p_category" id="p_category">
                    <option value="store">상품분류 선택</option>
                    <option value="store">STORE > New Arrivals</option>
                    <option value="store">STORE > Package Set</option>
                    <option value="store">STORE > All</option>
                    <option value="store">STORE > Outwear</option>
                    <option value="store">STORE > Top</option>
                    <option value="store">STORE > T-shirt</option>
                    <option value="store">STORE > Knit</option>
                    <option value="store">STORE > Pants</option>
                    <option value="store">STORE > Handwear</option>
                </select>
                <div class="select_price">
                    <p>가격</p>
                    <input type="text">
                    <span>₩</span>
                    <p>~</p>
                    <input type="text"><span>₩</span>
                </div>
                <div class="select_sequence">
                    <a href="#">상품명순</a>
                    <a href="#">높은가격순</a>
                    <a href="#">낮은가격순</a>
                    <a href="#">제조사순</a>
                </div>
                <button type="submit">검색</button>
            </div><!-- search_slide_inner -->
        </div><!-- search_slide_bg -->
    </div><!-- search_slide -->
    <header>
        <!-- 모바일 메뉴 -->
        <div id="mobile_menu_wrap">
            <a href="#" class="moblie_menu_btn">
                <img src="images/menu.png" alt="" id="moblie_menu_btn_img">
            </a>
            <a href="#" class="moblie_close_btn">
                <img src="images/close.png" alt="" id="moblie_close_btn_img">
            </a>
            <div class="mobile_menu">
                <div class="menu1_mobile">
                    <a href="index.html" class="menu1_mobile_part active">HOME</a>
                    <a href="sub_about.html" class="menu1_mobile_part">ABOUT</a>
                    <a href="sub_collection.html" class="menu1_mobile_part">COLLECTION</a>
                    <a href="sub_category.html" class="menu1_mobile_part">CATEGORY</a>
                    <a href="sub_contact.html" class="menu1_mobile_part">CONTACT</a>
                </div><!-- menu1_mobile -->
                <div class="menu2_mobile">
                    <a href="sub_login.html" class="menu2_mobile_part">LOGIN</a>
                    <a href="sub_login.html" class="menu2_mobile_part">MYPAGE</a>
                    <a href="sub_notice.html" class="menu2_mobile_part">NOTICE</a>
                    <a href="sub_review.html" class="menu2_mobile_part">REVIEW</a>
                    <a href="#" class="menu2_mobile_part">ORDER</a>
                    <a href="sub_QNA.html" class="menu2_mobile_part">QNA</a>
                    <a href="#" class="menu2_mobile_part">CART</a>
                </div><!-- menu1_mobile -->
            </div><!-- mobile_menu -->
        </div><!-- mobile_menu_wrap -->
        <h1><a href="index.html"><img src="images/logo.png" alt="디폴트벨류"></a></h1>
        <nav class="menu1">
            <a href="index.html" class="active">HOME</a>
            <a href="sub_about.html">ABOUT</a>
            <a href="sub_collection.html">COLLECTION</a>
            <a href="sub_category.html">CATEGORY</a>
            <a href="sub_contact.html">CONTACT</a>
        </nav>
        <nav class="menu2">
            <a href="sub_login.html">LOGIN</a>
            <a href="sub_login.html">MYPAGE</a>
            <a href="sub_notice.html">NOTICE</a>
            <a href="sub_review.html">REVIEW</a>
            <a href="#">ORDER</a>
            <a href="sub_QNA.html">QNA</a>
            <a href="#">CART</a>
        </nav>
        <a href="#" class="search_btn"><img src="images/search.png" alt="검색"></a>
    </header>
        `;

        // search btn
let search_btn = document.querySelector('header .search_btn');
let search_slide = document.querySelector('#search_slide');
let close_btn = document.querySelector('.close_btn');

search_slide.style.opacity= 0;

search_btn.addEventListener('click',function(e){
    e.preventDefault()
    search_slide.style.height= '400px';
    search_slide.style.opacity= '1';
})
close_btn.addEventListener('click',function(e){
    e.preventDefault()
    search_slide.style.height= 0;
    search_slide.style.opacity= 0;
})
// mobile menu
let moblie_menu_btn = document.querySelector('.moblie_menu_btn');
let moblie_close_btn = document.querySelector('.moblie_close_btn');
let mobile_menu = document.querySelector('.mobile_menu');
// let moblie_menu_btn_img = document.querySelector('.#moblie_menu_btn_img');
moblie_close_btn.style.display = 'none';

moblie_menu_btn.addEventListener('click',function(e){
    e.preventDefault()
    mobile_menu.style.height = '420px';
    moblie_menu_btn_img.style.display = 'none';
    moblie_close_btn.style.display = 'block';
})

moblie_close_btn.addEventListener('click',function(e){
    e.preventDefault()
    mobile_menu.style.height = 0;
    moblie_menu_btn_img.style.display = 'block';
    moblie_close_btn.style.display = 'none';
})


window.addEventListener('load', function() {
    const currentPath = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll('.menu1 a');

    menuLinks.forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === "" && href === "index.html")) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('load', function() {
    const currentPath = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll('.menu1_mobile a');

    menuLinks.forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === "" && href === "index.html")) {
            link.classList.add('active');
        }
    });
});

  }
}
customElements.define('defaultvalue-header', DVHeader);