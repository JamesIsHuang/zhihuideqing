/**
 * Created by hw on 2016/9/17.
 */
//home
function homeEffect(){

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

function resEditEffect(){
    $('#resourceedit button').on('click',function(e){
        switch ($(this).attr('id')){
            case 'resbutab1':
                $('.tab1').hide();
                $('.tab2').show();
                $('#resourceedit .tab2 .li1').css('background',"url('./images/resedit.png')");
                $('#resourceedit .tab2 .li2').css('background',"url('./images/resedittitleyellow.png')");
                break;
            case 'resbutab2':
                $('.tab1').show();
                $('.tab2').hide();
                break;
            case 'resbutab3':
                $('.tab2').hide();
                $('.tab3').show();
                $('#resourceedit .tab3 .li1').css('background',"url('./images/resedit.png')");
                $('#resourceedit .tab3 .li3').css('background',"url('./images/resedittitleyellow.png')");
                break;
            case 'resbutab4':
                $('.tab2').show();
                $('.tab3').hide();
                $('#resourceedit .tab2 .li1').css('background',"url('./images/resedit.png')");
                $('#resourceedit .tab2 .li2').css('background',"url('./images/resedittitleyellow.png')");
                break;
            case 'resbutab5':
                $('.tab3').hide();
                $('.tab4').show();
                $('#resourceedit .tab4 .li1').css('background',"url('./images/resedit.png')");
                $('#resourceedit .tab4 .li4').css('background',"url('./images/finishyellow.png') no-repeat");
                break;
            case 'resbutab6':
                $('.tab3').show();
                $('.tab4').hide();
                $('#resourceedit .tab4 .li3').css('background',"url('./images/resedittitle.png')");
                break;
        }
    })
    //resource页面下服务填写的选择效果
    $('#resourceedit .tab3 .res-content-div,#resourceedit .tab3 .res-content-div2').on('click','li',function(){
        $(this).siblings('li').find('img').attr('src','./images/res-point.png');
        $(this).find('img').attr('src','./images/res-point-hover.png');
    })
    //服务资源页面
    $('#servicesouce .map li').mouseover(function(){
        $(this).css({'background':'url("./images/serviceicon-1hover.png")','border':'1px solid transparent'});
        $(this).find('img,p').hide();
    })
    $('#servicesouce .map li').mouseout(function(){
        $(this).css({'background':'none','border':'1px solid #fade64'});
        $(this).find('img,p').show();
    })
    //默认,最近时间,最多浏览
    $('#servicesouce .li1 span').click(function(){
        $(this).siblings('span').removeClass('selected');
        $(this).addClass('selected');
    })
}

function init(){
    homeEffect();
    resEditEffect();
}
init();
