// 공지사항 
$('.cau .box .btn').on('click',function(){
    $('.cau').hide();
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
    allowTouchMove: true,
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
$('nav li').on('mouseenter', function() {
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
  // $('.s_btn').click(function(){

  // });




// 끝