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
var effctFunction = {
    resource:function(){

    }
}
function init(){
    homeEffect();
    rememberMe();
    inputHover();
}

init();
