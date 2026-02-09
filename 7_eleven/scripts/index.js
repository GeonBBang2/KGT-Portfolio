// mainSlide
const slideMain = document.querySelectorAll('.main_slide_container .main_slide');
const slideMainContainer = document.querySelector('.main_slide_wrap .main_slide_container');
const prevBtn = document.querySelector('.slide_btn.prev');
const nextBtn = document.querySelector('.slide_btn.next');
const pagination = document.querySelector('.slide_pagination');

let slideIndex = 0;
let timer = null;
const INTERVAL = 5000;

slideMain.forEach(() => {
  const bar = document.createElement('div');
  bar.className = 'bar';
  const fill = document.createElement('span');
  fill.className = 'fill';
  bar.appendChild(fill);
  pagination.appendChild(bar);
});
const fills = pagination.querySelectorAll('.bar .fill');

function goToSlide(n) {
  slideIndex = (n + slideMain.length) % slideMain.length;
  slideMainContainer.style.transform = `translateX(-${100 * slideIndex}%)`;
  resetBars();
  animateBar(slideIndex);
  resetTimer();
}

function nextSlide() { goToSlide(slideIndex + 1); }
function prevSlide() { goToSlide(slideIndex - 1); }

function resetBars() {
  fills.forEach(fill => {
    fill.style.transition = 'none';
    fill.style.width = '0%';
    void fill.offsetWidth;
  });
}

function animateBar(i) {
  const fill = fills[i];
  if (!fill) return;
  fill.style.transition = `width ${INTERVAL}ms linear`;
  fill.style.width = '100%';
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, INTERVAL);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

goToSlide(0);

// mainSlide

// event slide
const slide_dis = document.querySelectorAll('.event_slide_container .slide');
const slide_dis_container = document.querySelector('#event_slide_wrap .event_slide_container');
const slide_pagenation = document.querySelectorAll('#event_wrap .pagenation a');
let slide_dis_count = 0
let slide_dis_timer = setInterval(slide_dis_func, 2500)
function slide_dis_func() {
    slide_dis_count++
    if (slide_dis_count >= slide_dis.length) { slide_dis_count = 0 }
    slide_dis_container.style.transform = `translateX(-${500 * slide_dis_count}px)`;
}
slide_pagenation[0].addEventListener('click', function (e) {
    e.preventDefault();
    slide_dis_count++
    if (slide_dis_count <= slide_dis.length) { slide_dis_count = 0 }
    slide_dis_container.style.transform = `translateX(${slide_dis_count * (500)}px)`;
})
slide_pagenation[1].addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(slide_dis_timer)
    slide_pagenation[1].style.display = 'none'
    slide_pagenation[2].style.display = 'inline-block'
})
slide_pagenation[2].addEventListener('click', function (e) {
    e.preventDefault();
    slide_dis_timer = setInterval(slide_dis_func, 2500);
    slide_pagenation[2].style.display = 'none';
    slide_pagenation[1].style.display = 'inline-block';
})
slide_pagenation[3].addEventListener('click', function (e) {
    e.preventDefault();
    slide_dis_count++
    if (slide_dis_count >= slide_dis.length) { slide_dis_count = 0 }
    slide_dis_container.style.transform = `translateX(-${slide_dis_count * (500)}px)`;
})

// 탭 앵커/패널 수집
const tabWrap = document.querySelector('.p_event_title');
const tabs = tabWrap ? tabWrap.querySelectorAll('a') : [];
const panels = [
    document.querySelector('.plusone'),
    document.querySelector('.plustwo'),
    document.querySelector('.wmdwjd'),
    document.querySelector('.discount'),
    document.querySelector('.pb_product'),
];

// 안전 가드
if (!tabs.length || panels.some(p => !p)) {
    console.warn('탭 또는 패널 요소를 찾을 수 없습니다.');
} else {
    // 표시/활성 전환 함수
    const activate = (idx) => {
        panels.forEach((p, i) => {
            p.style.display = i === idx ? 'block' : 'none';
        });
        tabs.forEach((t, i) => {
            t.classList.toggle('active', i === idx);
        });
    };

    // 이벤트 위임: a 클릭 처리
    tabWrap.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (!a || !tabWrap.contains(a)) return;
        e.preventDefault();
        const idx = Array.prototype.indexOf.call(tabs, a);
        if (idx > -1) activate(idx);
    });

    // 초기 상태 (첫 번째 탭 활성)
    activate(0);
}
