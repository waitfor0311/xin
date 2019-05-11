// 【头部 main-menu 鼠标进入,显示下面隐藏的细节】
$('.main-menu a').mouseenter(function(){
    $(this).siblings('.i-frame')      //找到i-frame
    .addClass('animate')    //添加类名
    .end() //
    .parent()
    .siblings()
    .find('.i-frame')
    .removeClass('animate')
});

$('.main-menu .i-frame').mouseleave(function(){
    $(this).removeClass('animate')
})
$('.main-menu a').mouseleave(function(){
    $(this).siblings('.i-frame').removeClass('animate')
})

//【输入框鼠标进入变色】
$('.search-keyword').mouseenter(function(){
    $('.search-keyword').addClass('bg-white');
    $('.search-submit').addClass('bg-white');
})
$('.search-keyword').mouseleave(function(){
    $('.search-keyword').removeClass('bg-white');
    $('.search-submit').removeClass('bg-white');
})
$('.search-submit').mouseenter(function(){
    $('.search-keyword').addClass('bg-white');
    $('.search-submit').addClass('bg-white');
})
$('.search-submit').mouseleave(function(){
    $('.search-keyword').removeClass('bg-white');
    $('.search-submit').removeClass('bg-white');
})


//

//【鼠标进入 primary-menu 下的 li 显示此 li 下的细分类】
$('.channel').mouseenter(function(){
    //设置此li下的ul显示，兄弟li下的ul隐藏
    $(this).find('.sub-nav').css('display','block').end().siblings().find('.sub-nav').css('display','none')
})
$('.channel').mouseleave(function(){
    $(this).find('.sub-nav').css('display','none')
})

//鼠标进入 sub-nav 下 li 动画
$('.sub-nav li').mouseenter(function(){
    $(this).find('.left-arrow').stop().animate({left:20},200)
    $(this).find('i').stop().animate({left:33},200);
    var $i=$(this).children('i').width();
    var dis = $i + 38;
    $(this).find('.right-arrow').css('opacity','1');
    $(this).find('.right-arrow').stop().animate({left:dis},200);
    
})
$('.sub-nav li').mouseleave(function(){
    $(this).find('.left-arrow').stop().animate({left:10},200);
    $(this).find('i').stop().animate({left:28},200);
    $(this).find('.right-arrow').css('opacity','0');
    $(this).find('.right-arrow').css('left',110);
})
//【鼠标点击 primary-menu 下的 li 时更改 li 的颜色和下边框】
$('.channel').click(function(){
    $(this).css('border-bottom','#00a1d6 2px solid') .find('.nav-name').css('color','#00a1d6').end().siblings().css('border-bottom','none').find('.nav-name').css('color','#222');
})
