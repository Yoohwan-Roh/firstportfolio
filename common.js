//기본값
$(".smallNav").hide();
$(".qckHover").hide();
// gnb 토글
let togState = 1;
$("#gnb .togBtn").on('click', function() {
  if (togState == 1 ) {
  togState = 0;
  // $(this).animate({ left: "500px" })
  $(this).addClass('active')
  $("#gnb").animate({ left: "0px" })
}
  else {
  togState = 1;
  $(this).removeClass('active')
  $(this).animate({ left: "610px" })
  $("#gnb").animate({ left: "-600px" })
}
})

//gnb 마우스 호버
let gnbHovState = 0;
$(".bigNav > li").on('mouseenter', function() {
  gnbHovState = 1;
  $(".bigNav > li").not($(this)).children('a').css({ textDecoration: "none" })
  $(this).children('a').css({ textDecoration: "underline"})
  $(".bigNav > li").not($(this)).children('.smallNav').hide();
  $(this).children('.smallNav').stop().slideDown(500);
})
.on('mouseleave', function() {
    gnbHovState = 0;
    $(this).children('a').css({ textDecoration: "none" })
    $(this).children('.smallNav').stop().slideUp();
})
$(".smallNav > li").on('mouseenter', function() {
  if (gnbHovState == 1) {
    $(".smallNav > li").not($(this)).children('a').stop().css({ textDecoration: "none" })
    $(this).children('a').stop().css({ textDecoration: "underline"})
  }
})
.on('mouseleave', function() {
    $(this).children('a').stop().css({ textDecoration: "none" })
})

//슬라이드 플러그인
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//qckWrap 마우스 호버
$(".qckIcon > div > a").hover(function() {
  $(this).prev($(".qckHover")).stop().fadeIn();
  $(this).next('p').css({ borderBottom: "3px solid #666" });
}, function() {
  $(this).prev($(".qckHover")).stop().fadeOut();
  $(this).next('p').css({ border: "0" });
})

//숫자 카운팅
let p = document.querySelector('.counting');
let p2 = document.querySelector('.counting2');
let n= 1;
let n2= 1;
let state = 1;
window.addEventListener('scroll', function() {
  if ( window.scrollY >= 1100 && state == 1 ) {
    state = 0;
    counting1();
    counting2();
  }
})
let counting1 = () => {
  p.innerText = ++n;
  if (n==362) return false;
  setTimeout(function() {
    counting1()
  }, 3)
}
let counting2 = () => {
  p2.innerText = ++n2;
  if (n2==8) return false;
  setTimeout(function() {
    counting2()
  }, 200)
}

//인기검색어
let timer = 700;
let rankSlide = () => {
  $(".ranking ol li").each(function() {
    $(".ranking ol li").hide();
    $(this).delay($(this).index()*timer).slideDown();
  })
}
rankSlide();
setInterval(rankSlide, 8000);

//contact us 호버
$(".contact").mouseenter(function() {
  $(this).css({ background: "#000"})
  $(this).children('a').css({ color: "#fff", fontSize: "18px"})
  $(this).children('a').innerText("&#9993");
})
$(".contact").mouseleave(function() {
  $(this).css({ background: "#fff"})
  $(this).children('a').css({ color: "#000", fontSize: "16px"})
})
