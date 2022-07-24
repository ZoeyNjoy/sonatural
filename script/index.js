function moveSlider(index){
    $('.control li').css({
        width:'15px',
        background: 'url(./images/off.svg) center/cover'
    }).eq(index).css({
        width:'35px',
        background:'url(./images/on.svg) center/cover'
    });
};

var cnt=0;

$(function(){
    $('.slide a').eq(0).show();
    $('.slide a:not(:eq(0))').hide();
    setInterval(function(){
        $('.slide a').eq(0).fadeOut(1000).next().fadeIn(1000).end().appendTo('.slide');
    }, 3000);

    $('.slide a').eq(0).css('backgroundColor','#fad3d2');
    $('.slide a').eq(1).css('backgroundColor','#f5f2e7');
    $('.slide a').eq(2).css('backgroundColor','#ebe4dc');
    $('.slide a').eq(3).css('backgroundColor','#d8e7be');


    $('.control li').each(function(i){
        $(this).attr('data-index',i);
    }).click(function(){
        var index = $(this).attr('data-index');
        moveSlider(index);
    });
    setInterval(function(){
        if(cnt<3){
            cnt++;
        }else{
            cnt=0;
        }        
        moveSlider(cnt);    
    },3000);


    // submenu
    $('nav .sub').hide();
    
    $('nav .gnb').mouseover(function(){
        $(this).next().show();
    });
    $('nav .gnb').mouseout(function(){
        $(this).next().hide();
    });
    

    


}); // 끝