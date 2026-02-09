class GJFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
        /* footer */
footer {
    padding: 80px 16px;
    background: #222;
    color: #fff;
}
footer .f_top,footer .f_btm {
    max-width: 1400px; min-width: 375px;
    margin: 0 auto;
}
footer .f_top {
    margin-bottom: 10px;
    display: flex; flex-flow: row nowrap;
    justify-content: space-between;
}
footer .f_top .menu {}
footer .f_top .menu a {color: #fff; font-size: 0.875rem;}
footer .f_top .menu a:last-child {}
footer .f_top .site {color: #fff;}
footer .f_btm {}
footer .f_btm p {
    color: #ccc;
    font-size: 0.750rem;
    font-weight: 300;
}
footer .f_btm p:nth-child(2) {
    margin: 8px 0;
}
    </style>
    
        <footer>
        <div class="f_top">
            <div class="menu">
                <a href="#">이용약관</a>
                <a href="#">이메일무단수집금지</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">호텔정책</a>
            </div>
            <a href="#" class="site">FAMILY SITES</a>
        </div>
        <div class="f_btm">
            <p>서울시 중구 소공로 106 대표이사 현재양 T.02-000-0000 F. 02-000-0000</p>
            <p>사업자 등록번호 104-00-00000 통신판매신고번호 중구 0623호</p>
            <p>&copy; 2020 SHINSEGAE CHOSUN HOTEL Co. All rights reserved.</p>
        </div>
    </footer>
        `;
    }
}
customElements.define('grandjosun-footer', GJFooter);