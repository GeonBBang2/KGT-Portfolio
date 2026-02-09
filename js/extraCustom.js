// ------------------------------------ DOM선언 및 기본설정 ------------------------------------

const portfolioContainer = document.querySelector('.portfolioItemContainer');
const portfolioItems = portfolioContainer.querySelectorAll('.portfolioItem');
const prevBtn = document.querySelector('.PFItemsPrevBtn');
const nextBtn = document.querySelector('.PFItemsNextBtn');
const playPortFolio = document.querySelector('.playPortFolio');
const portfolioStartBtn = document.querySelector('.startBtn');
const closeCircleIcon = document.querySelector('.closeCircleIcon');
const htmlElement = document.documentElement;

const totalItems = portfolioItems.length;
let isMoving = false;
const transitionDuration = 300;

const portfolioStyles = {
  0: { rt: -60, top: 31, off: 12, sc: 1 },
  1: { rt: -45, top: 21, off: 3, sc: 1 },
  2: { rt: -30, top: 12, off: 0, sc: 1 },
  3: { rt: -15, top: 6.5, off: -1, sc: 1 },
  4: { rt: 0, top: 2, off: 0, sc: 1.3 }, // 중앙
  5: { rt: 15, top: 6.5, off: 1, sc: 1 },
  6: { rt: 30, top: 12, off: 0, sc: 1 },
  7: { rt: 45, top: 21, off: -3, sc: 1 },
  8: { rt: 60, top: 31, off: -12, sc: 1 },
  9: { rt: 90, top: 41, off: -1, sc: 1 },
  default: { rt: 0, top: 0, off: 0, sc: 1 }
};



// ------------------------------------ 포지션 업데이트 및 슬라이드 제어 ------------------------------------

function updateItemPositions() {
  const items = portfolioContainer.querySelectorAll('.portfolioItem');
  items.forEach((item, index) => {
    item.style.transition = `all ${transitionDuration / 1000}s ease-in-out`;
    const style = portfolioStyles[index] || portfolioStyles.default;

    item.style.setProperty('--item-index', index);
    item.style.setProperty('--item-scale', style.sc);
    item.style.setProperty('--item-rotate-factor', style.rt);
    item.style.setProperty('--item-top-factor', style.top);
    item.style.setProperty('--item-offset-factor', style.off);

    viewBtnUpdate()
  });
}

function moveSlide(direction) {
  const isOverlayOpen = document.querySelector('.pp_overlay');
  if (isMoving || !playPortFolio.classList.contains('PPactive') || isOverlayOpen) return;
  isMoving = true;

  const items = portfolioContainer.querySelectorAll('.portfolioItem');

  items.forEach((item, index) => {
    const nextIdx = direction > 0 ? index - 1 : index + 1;
    const style = portfolioStyles[nextIdx] || portfolioStyles.default;

    item.style.setProperty('--item-index', nextIdx);
    item.style.setProperty('--item-scale', style.sc);
    item.style.setProperty('--item-rotate-factor', style.rt);
    item.style.setProperty('--item-top-factor', style.top);
    item.style.setProperty('--item-offset-factor', style.off);
  });

  setTimeout(() => {
    if (direction > 0) {
      portfolioContainer.appendChild(portfolioContainer.firstElementChild);
    } else {
      portfolioContainer.prepend(portfolioContainer.lastElementChild);
    }

    const currentItems = portfolioContainer.querySelectorAll('.portfolioItem');
    currentItems.forEach(el => el.style.transition = 'none');

    updateItemPositions();

    setTimeout(() => { isMoving = false; }, 50);
  }, transitionDuration);
}



// ------------------------------------ 이벤트 및 UI제어 ------------------------------------
const disableCarousel = () => {
  playPortFolio.classList.add('PPactiveEnd');
  setTimeout(() => {
    playPortFolio.classList.remove('PPactive');
    htmlElement.classList.remove('hiddenScrollBar');
    document.body.style.overflow = 'auto';
  }, 300);
};

portfolioStartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  playPortFolio.classList.remove('PPactiveEnd');
  playPortFolio.classList.add('PPactive');
  htmlElement.classList.add('hiddenScrollBar');
  document.body.style.overflow = 'hidden';
  updateItemPositions();
});

// 버튼 클릭시
if (closeCircleIcon) closeCircleIcon.addEventListener('click', disableCarousel);
if (prevBtn) prevBtn.addEventListener('click', () => moveSlide(-1));
if (nextBtn) nextBtn.addEventListener('click', () => moveSlide(1));

// 키보드 클릭시
document.addEventListener('keydown', (e) => {
  if (!playPortFolio.classList.contains('PPactive')) return;
  if (e.key === 'Escape') disableCarousel();
  if (e.key === 'ArrowLeft') moveSlide(-1);
  if (e.key === 'ArrowRight') moveSlide(1);
});

document.addEventListener('wheel', (e) => {
  if (!playPortFolio.classList.contains('PPactive')) return;
  if (e.deltaY > 0) {
    moveSlide(1);
  } else {
    moveSlide(-1);
  }
}, { passive: true });

window.addEventListener('resize', () => {
  if (playPortFolio.classList.contains('PPactive')) updateItemPositions();
});


// ------------------------------------ 모바일 터치 스와이프 ------------------------------------
let touchStartX = 0;
portfolioContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

portfolioContainer.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) moveSlide(diff > 0 ? 1 : -1);
}, { passive: true });


// ------------------------------------ 각 버튼별 링크버튼 활성화 ------------------------------------
function viewBtnUpdate() {
  const items = portfolioContainer.querySelectorAll('.portfolioItem');
  const viewBtns = document.querySelectorAll('.viewBtnCon a');

  const activeItem = items[4];
  if (!activeItem) return;

  const links = activeItem.querySelectorAll('.links a');

  viewBtns.forEach((btn, idx) => {
    if (links[idx]) {
      btn.href = links[idx].href;
      btn.target = "_blank"
      btn.parentElement.style.opacity = '1';
    } else {
      btn.parentElement.style.opacity = '0';
    }
  });
}

// ------------------------------------ Technical Experience ------------------------------------
// ------------------------------------ Technical Experience 카테고리별 아이템 활성화 ------------------------------------
const filterButtons = document.querySelectorAll('.type a');
const items = document.querySelectorAll('.TEItem');

filterButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // 1. 활성화 클래스 변경
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 2. 필터링 로직
    const filterValue = button.getAttribute('data-filter');

    items.forEach(item => {
      if (filterValue === '*' || item.getAttribute('data-filter') === filterValue) {
        item.style.display = 'flex';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 1);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ------------------------------------ Technical Experience 카테고리별 아이템 활성화 ------------------------------------

const TEItemsData = [
  {
    title: "고영테크놀러지 사내 eLearning",
    category: "WordPress",
    description: `오픈소스 CMS를 기업 환경에 맞게 커스터마이징하여 사내 교육 플랫폼 구성 <br>
                사용자 편의성을 극대화한 인터페이스 디자인 및 반응형 웹 퍼블리싱 수행 <br>
                유지보수와 기능 확장을 고려한 모듈형 컴포넌트 방식의 퍼블리싱 및 테마 커스터마이징`,
    img: "img/portfolio/kohyoung_logo.png",
    stacks: ["wp_logo", "html_logo", "css3_logo", "js_logo", "php_logo"],
    link: ""
  },
  {
    title: "만트럭버스코리아",
    category: "WordPress",
    description: `사용자 편의성을 극대화한 인터페이스 디자인 및 반응형 웹 퍼블리싱 수행 <br>
   WordPress를 활용한 웹사이트 유지보수 및 콘텐츠 관리 <br>
                대규모 제품 라인업 데이터의 체계적 카테고리화를 통해 정보 접근성 및 브랜드 신뢰도 강화`,
    img: "img/portfolio/mantruckbus_logo.png",
    stacks: ["wp_logo", "html_logo", "css3_logo", "js_logo"],
    link: "https://mantruck.co.kr/"
  },
  {
    title: "좋은습관",
    category: "WordPress",
    description: `온라인에서 수업 프로그램 콘텐츠 관리 및 자동화<br>
                각 섹션별 미리보기 서비스 제공 <br>
                다양한 디바이스에서 사용할 수 있는 인터페이스 디자인 및 반응형 웹 퍼블리싱 수행`,
    img: "img/portfolio/gh_logo.png",
    stacks: ["wp_logo", "html_logo", "css3_logo", "js_logo"],
    link: ""
  },
  {
    title: "메르세데스-벤츠 파이낸셜 서비스 코리아",
    category: "WordPress",
    description: `사용자 편의성을 극대화한 인터페이스 디자인 및 반응형 웹 퍼블리싱 수행 <br>
              WordPress를 활용한 웹사이트 유지보수 및 콘텐츠 관리 <br>
              WordPress 플러그인을 활용한 콘텐츠 관리 `,
    img: "img/portfolio/mbfsk_logo_bgedited.png",
    stacks: ["wp_logo", "html_logo", "css3_logo", "js_logo"],
    link: "https://mercedes-benz-financial.co.kr/"
  },
  {
    title: "신한동해오픈",
    category: "WordPress",
    description: `WordPress를 활용한 웹사이트 유지보수 및 콘텐츠 관리 <br>
    대규모 트래픽 집중 환경을 고려한 부하 최소화 및 최적화된 반응형 웹 퍼블리싱`,
    img: "img/portfolio/shinhan-open_logo.png",
    stacks: ["wp_logo", "html_logo", "css3_logo", "js_logo"],
    link: "http://shinhanopen.com/"
  },
  {
    title: "검진라인",
    category: "WordPress",
    description: `사용자 편의성을 극대화한 인터페이스 디자인 및 반응형 웹 퍼블리싱 수행 <br>
   WordPress를 활용한 웹사이트 유지보수 및 콘텐츠 관리<br>
                `,
    img: "img/portfolio/sjcore_logo.png",
    stacks: ["wp_logo", "html_logo", "css3_logo", "js_logo"],
    link: "https://sjcore.co.kr/"
  },
  {
    title: "메르세데스-벤츠 코리아",
    category: "AEM",
    description: `AEM을 활용한 웹사이트 유지보수 및 콘텐츠 관리`,
    img: "img/portfolio/mercedes-benz_logo.png",
    stacks: ["AEM_logo"],
    link: "https://www.mercedes-benz.co.kr/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE&utm_source=google&utm_medium=cpc&utm_campaign=C.B.AO.G_NA_LA_KR_google_sea&utm_content=google_sea_cross_brandkeyword_kw_title_give_n&utm_term=&gad_source=1&gad_campaignid=22175719335&gbraid=0AAAAApKw1KtU0A8NlUV3VZt5U3WTp031I&gclid=CjwKCAiAqKbMBhBmEiwAZ3UboOYNROlt07XC0md2B9v85b4ifwrfy8wXjN3s7Nu4QuHnflhPRK70xhoCnH8QAvD_BwE"
  },
  {
    title: "메르세데스-벤츠 트럭",
    category: "AEM",
    description: `AEM을 활용한 웹사이트 유지보수 및 콘텐츠 관리`,
    img: "img/portfolio/mb-trucks_logo.png",
    stacks: ["AEM_logo"],
    link: "https://www.mercedes-benz-trucks.com/kr/ko/home.html"
  },
  {
    title: "SK C&C 헬프데스크",
    category: "Freshdesk",
    description: ` <br> 기업 전용 디자인 시스템을 반영하기 위해 CSS 및 Liquid 문법을 활용한 솔루션 UI/UX 커스터마이징  <br>
                Freshdesk 고유의 Liquid 템플릿 엔진을 분석하여 동적 데이터 구조에 최적화된 조건부 렌더링 구현
                `,
    img: "img/portfolio/sk-cnc_logo.png",
    stacks: ["freshdesk_logo", "html_logo", "css3_logo", "js_logo"],
    link: ""
  },
  {
    title: "고영테크놀러지 헬프데스크",
    category: "Freshdesk",
    description: `기업 전용 디자인 시스템을 반영하기 위해 CSS 및 Liquid 문법을 활용한 솔루션 UI/UX 커스터마이징 <br>
                Freshdesk 고유의 Liquid 템플릿 엔진을 분석하여 동적 데이터 구조에 최적화된 조건부 렌더링 구현 <br>
                `,
    img: "img/portfolio/kohyoung_logo.png",
    stacks: ["freshdesk_logo", "html_logo", "css3_logo", "js_logo"],
    link: ""
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.TEItem');
  const popup = document.querySelector('.TEItemDescWrap');
  const bg = document.querySelector('#TEBG');
  const closeBtns = document.querySelectorAll('.TEItemDescCloseBtn');

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      updatePopupContent(index);
      showPopup();
    });
  });


  function updatePopupContent(index) {
    const data = TEItemsData[index];
    if (!data) return;

    popup.querySelector('.TEItemDescConTitle').textContent = data.title;
    popup.querySelector('.TEItemDescConText').innerHTML = data.description;
    popup.querySelector('.TEItemDescTop img').src = data.img;
    popup.querySelector('.TEItemDescTop img').alt = data.title;

    const stackList = popup.querySelector('.TEItemDescStackList');
    stackList.innerHTML = '';
    data.stacks.forEach(src => {
      const img = document.createElement('img');
      img.src = `img/portfolio/${src}.png`;
      img.alt = `${src}`;
      stackList.appendChild(img);
    });

    let popupLink = popup.querySelector('.TEItemDescBtns .TEItemDescLinks');
    if (data.link != "") {
      popupLink.style.display = "block";
      popupLink.textContent = "바로가기"
      popupLink.target = "_blank"
      popupLink.href = `${data.link}`
    } else if (data.link == "") {
      popupLink.style.display = "none";
    }
  }

  function showPopup() {
    popup.classList.add('active');
    bg.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hidePopup() {
    popup.classList.remove('active');
    bg.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  closeBtns.forEach(btn => btn.addEventListener('click', hidePopup));
  bg.addEventListener('click', hidePopup);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hidePopup();
    }
  });
});


