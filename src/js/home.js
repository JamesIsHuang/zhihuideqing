/**
 * Created by hw on 2016/9/17.
 */

$(function(){
    $('.home li').mouseover(function(){
        $(this).css({'border':'2px solid #F2D454','color':'#F2D454'})
            .find('img').attr({'src':'./images/elecmaphover.png'});
    })
    $('.home li').mouseout(function(){
        $(this).css({'border':'2px solid #4E5469','color':'inherit'})
            .find('img').attr({'src':'./images/elecmap.png'});
    })
    $('.cloudcenter').css({'background':"url('./images/navhover.png') no-repeat 18px 0"})
        .find('.title,.en').css('color','#003333');
})
