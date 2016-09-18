/**
 * Created by hw on 2016/9/17.
 */

function homeNavClick(){
    //home页的导航模块鼠标滑过效果
    $('.home .content li').mouseover(function(){
        $(this).css({'border':'2px solid #F2D454','color':'#F2D454'})
            .find('img').attr({'src':'./images/elecmaphover.png'});
    })
    $('.home .content li').mouseout(function(){
        $(this).css({'border':'2px solid #4E5469','color':'inherit'})
            .find('img').attr({'src':'./images/elecmap.png'});
    })
    $('.cloudcenter').css({'background':"url('./images/navhover.png') no-repeat 18px 0"})
        .find('.title,.en').css('color','#003333');
    //左边导航鼠标滑过效果
    $('.leftnav .leftnav-des div').mouseover(function(){
        $(this).css({'background':'#ffcc33'})
            .find('a').css('color','#330033');
    })
    $('.leftnav .leftnav-des div').mouseout(function(){
        $(this).css({'background':'none'})
            .find('a').css('color','#ffcc33');
    })

}
function scrollChange(){
    $(".scrollable").scrollable({
        vertical: true,
        mousewheel: true
    });
}
function init(){
    homeNavClick();
    scrollChange();
}
$(function(){
    init();
})
