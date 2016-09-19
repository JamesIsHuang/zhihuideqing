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

function init(){
    var wheels=$('.wheel').mouseWheel();
    homeNavClick();
}
(function(a,window,undefined){

    var supportsTransitions = (function() {
        var s = document.documentElement.style || document.body.style,
            v = ['ms', 'O', 'Moz', 'Webkit'];
        if (s.transition === '') {
            return true;
        }

        while (v.length) {
            if (v.pop() + 'Transition' in s) {
                return true;
            }
            return false;
        }
    })();

    a.fn.mouseWheel=function(option){
        var _this=$(this),
            winW=874,
            winH=620,
            section=_this.children('.section'),
            index=0,
            lastAnimation = 0,
            wrap;
        var defaults={
            onload:null,
            orident:'vertical',
            keybord:true,
            ease:'linear',
            speend:1000,
            quietPeriod:100 // 滚动事件停滞时间，数值越大阻尼感越强
        }
        var opt=$.extend({},defaults,option);

        section.each(function(i,n){
            $(n).addClass('section_'+parseInt(i+1));
            $(n).css({width:winW,height:winH});
            $('body,html').addClass('initBody')
        });

        $(this).wrap('<div class="wrapper"></div>');
        $('.wrapper').css({width:winW,height:winH});

        if (section.length>1) {
            $('<ul class="page"></ul>').appendTo('.wrapper');
            if (supportsTransitions) {
                _this.css({
                    'transform':'translate3d(0,0,0)',
                    'transition':'all '+opt.speend+'ms'
                })
            }else {
                _this.css({width:winW,height:winH,'position':'absolute','left':0}).animate({top: 0},opt.speend)
            }

            for (var i = 0; i < section.length; i++) {
                var li=document.createElement('li');
                var t=i+1;
                li.innerHTML= '<a href=#section_'+t+' data-index=index_'+t+'><span>'+t+'</span></a>';
                $('.page')[0].appendChild(li);
            };
            $('.page').find('li').first().addClass('active');
            var pageH=$('.page')[0].offsetHeight;
            $('.page').css({'height':pageH,'margin-top':-pageH/2});
            $('.page').find('li').on('click',function(){
                var aa=$(this);
                var hash=aa.find('a').attr('href').split('#')[1];
                //console.log(hash)
                aa.addClass('active').siblings().removeClass('active')
                index=aa.index();
                moveUp(index)

                if (history.replaceState) {
                    history.pushState({}, document.title, '#' + hash);
                }
                else {
                    location.hash = hash;
                }
            })
        };

        function initScroll(d){
            var timeNow = new Date().getTime();
            // 如果跟上次动画的时间差小于停滞时间
            if (timeNow - lastAnimation < opt.quietPeriod + opt.speend) {
                return;
            }
            if (d>0) {
                index--;
                if (index<0) {
                    index=0;
                };
                moveUp(index)
            }else if (d<0){
                index++;
                if (index>section.length-1) {
                    index=section.length-1;
                };
                moveUp(index)
            };
            lastAnimation = timeNow;
        }

        function moveUp(num){
            var posY=-num*winH+'px';
            $('.page').find('li').removeClass('active').eq(num).addClass('active');
            if (opt.orident==='vertical') {
                if (supportsTransitions) {
                    _this.css({
                        'transform':'translate3d(0,'+posY+',0)',
                        'transition':'all '+opt.speend+'ms'
                    })
                }else {
                    _this.animate({top:posY},opt.speend)
                }
            };

            _this.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){

            })
        }

        $(document).on('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
            var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            e.preventDefault();
            initScroll(delta);
        })

        function windwSize(w,h){

            section.css({'width':w,'height':h});
            $('.wrapper').css({'width':w,'height':h});
            $('body,html').addClass('initBody')
        }

        $(window).on('resize',function(){
            winW=874,
                winH=620,
                windwSize(winW,winH)
            moveUp(index)
        })

        if (opt.keybord===true) {
            $(document).on('keyup',function(e){
                var key=e.keyCode;
                if (key==38) {
                    index--;
                    if (index<0) {
                        index=0;
                        return
                    };
                    moveUp(index)
                }else if(key==40){
                    index++;
                    if (index>=section.length) {
                        index=section.length;
                        return;
                    };
                    moveUp(index)

                }
            })
        };
    }
})(jQuery,window);


$(function(){
    init();
})
