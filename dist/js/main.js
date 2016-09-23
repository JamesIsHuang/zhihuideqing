/**
 * Created by hw on 2016/9/17.
 */
//home
function homeEffect(){
    //home页的导航模块鼠标滑过效果
    $('.home .content li').mouseover(function(){
        $(this).css({'border':'2px solid #F2D454','color':'#F2D454'})
            .find('img').attr({'src':'./images/elecmaphover.png'});
    })
    $('.home .content li').mouseout(function(){
        $(this).css({'border':'2px solid rgba(255,255,255,0)','color':'#171631'})
            .find('img').attr({'src':'./images/elecmap.png'});
    })
    //左边导航鼠标滑过效果
    $('.leftnav .leftnav-des div').mouseover(function(){
        $(this).css({'background':'#F2D454'})
            .find('a').css('color','#330033');
        $(this).siblings('p').css('color','#3399cc');
    })
    $('.leftnav .leftnav-des div').mouseout(function(){
        $(this).css({'background':'none'})
            .find('a').css('color','#F2D454');
        $(this).siblings('p').css('color','#999');
    })
    //右边导航
    $('.page .active').find('.img1').attr('src','./images/yellowline.png');
    if(/mobileplatform\.html/.test(location.href)){
        $('.page li').css('left','0');
        $('.page').find('img').last()
            .css({'position':'relative','left':'100px','top':'3px'});
        $('.page .active').find('img').last().attr('src','./images/bigyecircle.png')
            .css({'position':'relative','left':'96px','top':'3px'});
    }else{
        $('.page .active').find('img').last().attr('src','./images/bigyecircle.png')
            .css({'position':'relative','left':'-3px','top':'3px'});
    }

    $('.bigdata li').mouseover(function(){
        $(this).find('img').attr('src','./images/original-hover.png');
        $(this).find('p').css('color','#ffcc66');
    })
    $('.bigdata li').mouseout(function(){
        $(this).find('img').attr('src','./images/original.png');
        $(this).find('p').css('color','#fff');
    })
    $('.newscontent li').mouseover(function(){
        $(this).css('background','#53566E').find('img').attr('src','./images/newcircle2.png');
    })
    $('.newscontent li').mouseout(function(){
        $(this).css('background','none').find('img').attr('src','./images/newcircle1.png');
    })

    //个人中心小人
    $('#loginorout').click(function(){
        if($(this).find('img').attr('src')=='./images/avatar1.png'){
            $(this).find('img').attr('src','./images/avatar.png');
            $('#personal').remove();
        }else{
            $(this).find('img').attr('src','./images/avatar1.png');
            var html = "<div class='content'  id='personal'><img src='./images/smallsan.png'/><p><a href='./personal.html'>个人中心</a></p><p><a>账号设置</a></p><p style='border: 0'><a>退出</a></p></div>";
            $(this).parent().after(html);
        }
    })
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
            winW=804,
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
            speed:1000,
            quietPeriod:100 // 滚动事件停滞时间，数值越大阻尼感越强
        }
        var opt=$.extend({},defaults,option);

        section.each(function(i,n){
            $(n).addClass('section_'+parseInt(i+1));
            $(n).css({width:winW,height:winH});
            //$('body,html').addClass('initBody')
        });

        $(this).wrap('<div class="wrapper"></div>');
        $('.wrapper').css({width:winW,height:winH});
        function addRightNav(){
            $('<ul class="page"></ul>').appendTo('.right-des');
            if (supportsTransitions) {
                _this.css({
                    'transform':'translate3d(0,0,0)',
                    'transition':'all '+opt.speed+'ms'
                })
            }else {
                _this.css({width:winW,height:winH,'position':'absolute','left':0}).animate({top: 0},opt.speed)
            }
            var wordDes = ['数据资源','大数据分析','特色功能','新闻公告'];
            for (var i = 0; i < section.length; i++) {
                var li=document.createElement('li');
                var t=i+1;
                if(/mobileplatform\.html/.test(location.href)){

                    li.innerHTML= '<a href=#section_'+t+' data-index=index_'+t+'>' +
                        '<span><img class=\"img2\" src=\"./images/smbluecircle.png\"/></span></a>';
                }else{
                    li.innerHTML= '<span id=data'+t+'>'+wordDes[i]+'</span><a href=#section_'+t+' data-index=index_'+t+'>' +
                        '<span><img class=\"img1\" src=\"./images/smallline.png\"/><img class=\"img2\" src=\"./images/smbluecircle.png\"/></span></a>';
                }
                $('.page')[0].appendChild(li);
            };
            $('.page').find('li').eq(1).css({'position':'relative','left':'-12px'});
            $('.page').find('li').first().addClass('active');

            var pageH=$('.page')[0].offsetHeight;
            $('.page').css({'height':pageH,'margin-top':-pageH/2});
        }
        if (section.length>1) {
            addRightNav();
            $('.page').find('li').on('click',function(){
                var aa=$(this);
                var hash=aa.find('a').attr('href').split('#')[1];
                aa.addClass('active').siblings().removeClass('active');
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
            if (timeNow - lastAnimation < opt.quietPeriod + opt.speed) {
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
            //右边导航效果
            $('.img1').attr('src','./images/smallline.png');

            $('.active .img1').attr('src','./images/yellowline.png');
            if(/mobileplatform\.html/.test(location.href)){
                $('.page li').css('left','0');
                $('.img2').attr('src','./images/smbluecircle.png').css({'position':'relative','left':'100px','top':'0px'});
                $('.page').find('img').last()
                    .css({'position':'relative','left':'100px','top':'3px'});
                $('.page .active').find('img').last().attr('src','./images/bigyecircle.png')
                    .css({'position':'relative','left':'96px','top':'3px'});
            }else{
                $('.img2').attr('src','./images/smbluecircle.png').css({'position':'relative','left':'0','top':'0px'});
                $('.page .active').find('img').last().attr('src','./images/bigyecircle.png')
                    .css({'position':'relative','left':'-3px','top':'3px'});
            }
            if (opt.orident==='vertical') {
                if (supportsTransitions) {
                    _this.css({
                        'transform':'translate3d(0,'+posY+',0)',
                        'transition':'all '+opt.speed+'ms'
                    })
                }else {
                    _this.animate({top:posY},opt.speed)
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
            //$('body,html').addClass('initBody')
        }

        $(window).on('resize',function(){
            winW=804,
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

//login
function inputHover(){
    $("input[name='username'],input[name='password']").mouseover(function(){
        $(this).css({'border':'2px solid #ffcc33'});
    })

    $("input[name='username'],input[name='password']").mouseout(function(){
        $(this).css({'border':'2px solid #999999'});
    })
}
function rememberMe(){
    if($.cookie('absms_crm2_userName')!=undefined){
        $("#rememberMe").attr("checked", true);
    }else{
        $("#rememberMe").attr("checked", false);
    }

    if($('#rememberMe:checked').length>0){
        $('.username').val($.cookie('absms_crm2_userName'));
        $('.password').val($.cookie('absms_crm2_password'));
    }

    $("#rememberMe").click(function(){
        if($('#rememberMe:checked').length>0){//设置cookie
            $.cookie('absms_crm2_userName', $('.username').val());
            $.cookie('absms_crm2_password', $('.password').val());
        }else{//清除cookie
            $.removeCookie('absms_crm2_userName');
            $.removeCookie('absms_crm2_password');
        }
    });
}
function init(){
    var wheels=$('.wheel').mouseWheel();
    homeEffect();
    rememberMe();
    inputHover();
}

init();
