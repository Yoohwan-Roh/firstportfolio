// gnb 마우스 호버
$(".smallNav").hide();
$(".bigNav > li").on('mouseenter', function() {
  $(".bigNav > li").not($(this)).children('a').css({ color: "#fff" })
  $(this).children('a').css({ color: "#000"})
  $(".bigNav > li").not($(this)).children('.smallNav').slideUp();
  $(this).children('.smallNav').slideDown(500);
})
.on('mouseleave', function() {
    $(this).children('a').css({ color: "#fff"})
    $(this).children('.smallNav').slideUp();
})
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
