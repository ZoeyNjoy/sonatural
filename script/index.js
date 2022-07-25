$(function(){
    $('.slide').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true
      });

    $('.slide a').eq(0).css('backgroundColor','#fad3d2');
    $('.slide a').eq(1).css('backgroundColor','#f5f2e7');
    $('.slide a').eq(2).css('backgroundColor','#ebe4dc');
    $('.slide a').eq(3).css('backgroundColor','#d8e7be');

    // menu
    $('nav .gnb li').on({
        mouseenter: function() {
            $(this).parents().find('.sub').show();
        },
        mouseleave: function() { 
            $(this).parents().find('.sub').hide();
        }
    });
    $('nav .sub').on({
        mouseenter: function() {
            $(this).show();
        },
        mouseleave: function() { 
            $(this).hide();
        }
    });


}); // 끝