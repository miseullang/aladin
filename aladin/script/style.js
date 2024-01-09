// 메인 슬라이드 배너
const sliderSwiper = new Swiper('.slide_banner .swiper', {
    direction: 'horizontal', //세로 움직임 vertical, 가로 움직임 horizontal
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true, //버튼 클릭 여부
        type: 'bullets', //페이징 타입 설정(종류: bullets, fraction, progress, progressbar)
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween:50, //=>swiper-slide 사이 공백값
    slidesPerView:"auto",// =>css에 지정한 슬라이더의 크기를 사용함
    // =>이값을 지정하지 않으면 기존의 값으로 지정됨
    centeredSlides:true, //=>슬라이더 번호에 맞는 객체의 가로 중앙 정렬
});

// 탭 슬라이드 : 당신을 위한 맞춤 가이드 부분
const tabSwiper = new Swiper('.tab_books_wrap .swiper', {
    direction: 'horizontal', //세로 움직임 vertical, 가로 움직임 horizontal
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true, //버튼 클릭 여부
        type: 'progressbar', //페이징 타입 설정(종류: bullets, fraction, progress, progressbar)
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween:5, //=>swiper-slide 사이 공백값
    slidesPerView:"auto",// =>css에 지정한 슬라이더의 크기를 사용함
    // =>이값을 지정하지 않으면 기존의 값으로 지정됨
});

const tabMenuButs = document.querySelectorAll(".tab_but_wrap>li");
tabMenuButs.forEach(function(tabBut){
    tabBut.addEventListener('click',function(){
        var dataid = this.getAttribute('data-tag');

        document.querySelectorAll(".tab_but_wrap>li").forEach(function(btn) {
            // 모든 버튼에서 'current' 클래스 제거
            btn.classList.remove('current');
        });
        // 클릭된 버튼에 'current' 클래스 추가
        this.classList.add('current');
        // 모든 탭 컨텐츠에서 'current' 클래스 제거
        document.querySelectorAll('.swiper-tab-con').forEach(function(tabCon) {
            tabCon.classList.remove('current');
        });
        // 클릭된 버튼에 해당하는 탭 컨텐츠에 'current' 클래스 추가
        document.getElementById(dataid).classList.add('current');
        
    })
})

// 베스트셀러 부분
const bestSwiper = new Swiper('.bestseller .swiper', {
    direction: 'horizontal', //세로 움직임 vertical, 가로 움직임 horizontal
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true, //버튼 클릭 여부
        type: 'fraction', //페이징 타입 설정(종류: bullets, fraction, progress, progressbar)
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween:30, //=>swiper-slide 사이 공백값
    slidesPerView:"auto",// =>css에 지정한 슬라이더의 크기를 사용함
    // =>이값을 지정하지 않으면 기존의 값으로 지정됨
    centeredSlides:true, //=>슬라이더 번호에 맞는 객체의 가로 중앙 정렬
});

// 알라딘 선물가게
const giftSwiper = new Swiper('.gift_banner .swiper', {
    direction: 'horizontal', //세로 움직임 vertical, 가로 움직임 horizontal
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween:30, //=>swiper-slide 사이 공백값
    slidesPerView:"auto",// =>css에 지정한 슬라이더의 크기를 사용함
    // =>이값을 지정하지 않으면 기존의 값으로 지정됨
});
