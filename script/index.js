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
});

// var underline=document.querySelector('.underline');
//     var menu=document.querySelectorAll('nav li');
//     menu.forEach(function(menu){
//     menu.addEventListener('mouseenter', function(e){
//             underlineEvent(e);
//         });
//     });
// function underlineEvent(e){
//     underline.style.left=e.currentTarget.offsetLeft+'px';
//     underline.style.width=e.currentTarget.offsetWidth+'px';
//     underline.style.top=e.currentTarget.offsetTop+e.currentTarget.offsetHeight+'px';
// }
