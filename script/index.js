// 공지사항 
$('.cau .box .btn').on('click',function(){
    $('.cau').hide();
});

var nav = $("header").offset().top;
$(window).scroll(function() {
  	var window = $(this).scrollTop();

    // $("main").hide();
    if(nav <= window){
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
});

// 메인 슬라이드
var swiper = new Swiper('.slide', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed : 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
    }
  });


// PC용 메뉴바
/* $('nav li').on('mouseenter', function() {
  $(this).parents().find('.sub').show();
});
$('nav li').off('mouseleave');
$('nav .sub').on({
  mouseenter: function() {
      $(this).show();
  },
  mouseleave: function() { 
      $(this).hide();
  }
});*/

$(".nav li .sub").on('mousemove', function () {
  $(this).next().find('.snb').toggleClass('on');
});

 //모바일 메뉴바
var burger = $('.m_bar');
burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-1');
  })
});

$("header .m_bar").on('click', function () {
    $('.m_nav nav').toggleClass('on');
    $('.m_nav .logo').toggleClass('move');
  });
$(".sub").on('click', function () {
    $(this).next().slideToggle();
  });  
$(".depth_02 li a").on('click', function () {
    $(this).next().slideToggle();
  });


  // 이벤트 슬라이드
  var swiper = new Swiper(".event_slide", {
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        allowTouchMove: false,
        loop: false,
        autoplay: false,
      },
      768: {
        slidesPerView: 'auto',
        allowTouchMove: false,
        loop: false,
        autoplay: false,
      },
      640: {
        slidesPerView: 'auto',
        allowTouchMove: true,
        loop: true,
      },
    },
    centeredSlides: true,
    loop: true,
    speed : 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
  });


// 끝