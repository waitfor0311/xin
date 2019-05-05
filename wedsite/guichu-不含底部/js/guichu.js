//原生 js 写一个轮播

//定义一个索引
var index = 0;
//获取可视区域的宽度
var width = $('.visible-area').width();

//【1.点击右按钮实现切换下一张图片】
$('.slider-control-next').click(function () {
    if (index == 0) {
        $('.imgs').css('left', 0)
    }
    //索引增加
    index++
    //计算 ul 要移动到的位置
    var loc = index * -width;
    //使 ul 移动到计算出的位置
    $('.imgs').animate({
        left: loc
    }, 300)

    //切换到第六个图片时，使第一个小点类名为 on
    if (index >= 5) {
        index = 0;
    }
    //改变右下角对应小点的样式
    $('.trig').find('li').eq(index).addClass('on').siblings().removeClass('on');
})

//【2，点击左按钮实现切换上一张图片】
$('.slider-control-prev').click(function () {
    //索引减一
    index--
    //判断索引是否小于0，小于的话，按钮在按下时，直接瞬移到第五张，并改索引为4
    var v = 5 * -width;
    if (index < 0) {
        $('.imgs').css('left', v);
        index = 4;
    }
    //计算 .imgs 要移动到的位置
    var loc = index * -width;
    //使 .imgs 移动到该位置
    $('.imgs').animate({
        left: loc
    }, 300);

    //更改对应小点的样式
    $('.trig').find('li').eq(index).addClass('on').siblings().removeClass('on');
})

//【3.点击小点，切换对应的图片】
$('.trig li').click(function () {
    //获取到所点击的小点的索引
    index = $(this).index();
    //计算该索引对应的图片的位置
    var loc = index * -width;
    //使 .imgs 动画过去
    $('.imgs').animate({
        left: loc
    }, 300)

    //更改对应小点的样式
    $('.trig li').eq(index).addClass('on').siblings().removeClass('on')
    console.log(index)
})

//【4.自动轮播】
var auto = setInterval(function () {
    $('.slider-control-next').click();
}, 2000)

//【5.鼠标进入可视区域轮播暂停,显示左右控制按钮】
$('.visible-area').mouseenter(function () {
    clearInterval(auto);
    $('.slider-control').fadeIn('fast');
})
//【5.鼠标离开可视区域轮播开始】
$('.visible-area').mouseleave(function () {
    //清除上次离开时开启的定时器，要不然会越来越快
    clearInterval(auto);
    auto = setInterval(function () {
        $('.slider-control-next').click();
    }, 2000);
    $('.slider-control').fadeOut('fast');
})

//六小块鼠标进入后
$('.groom-module').mouseenter(function () {
    $(this).find('.card-mark').addClass('card-mark-over');
    $(this).find('.author, .play, .later-watch').stop().fadeIn(300);
})
//离开后
$('.groom-module').mouseleave(function () {
    $(this).find('.card-mark').removeClass('card-mark-over');
    $(this).find('.author, .play, .later-watch').stop().fadeOut(1);
})


//需要的弹幕
danmuSource = [
    '233',
    '火钳刘明',
    '嘴巴嘟嘟',
    '百万填词',
    '恭喜老骚',
    '该来的总会来',
    '舔狗舔到最后果然一无所有',
    '再来亿遍',
    '新人都是魔鬼！',
    '您配么？您配么？您配么?',
    '一给我里giao',
    '鸡你太美',
    '无意冒犯',
    '哈哈哈哈哈',
];

// var aa = $('.danmu p').text(danmuSource[parseInt(Math.random() * danmuSource.length)]).width();
// console.log(aa);

//*大家都在看* 下的五块鼠标进入后

// $('.spread-module').mouseenter(function () {
//     var newP = $('<p></p>').text(danmuSource[parseInt(Math.random() * danmuSource.length)]).appendTo('.danmu-con');
//     var newPWidth = newP.width();
//     newP.css({
//         right: -(newPWidth + 10)
//     });
//     newP.animate({
//         left: -(newPWidth + 10)
//     },5000,'linear')
//     console.log( newP.offsetLeft )
//     if(newP.position().left>160){
//         // $('.danmu-con').children().remove();
//     }
// })
// $('.spread-module').mouseleave(function () {
//     $('.danmu-con').children().remove();
// })

//主内容视频
$('.video-module').mouseenter(function(){
    $(this).find('.dur, .mask, .watch-later').stop().fadeIn(200);
    $(this).find(' .t').css('color','#00a1d6');
    $(this).find('.num').stop().slideUp(300);
})
$('.video-module').mouseleave(function(){
    $(this).find('.dur, .mask, .watch-later').stop().fadeOut(200);
    $(this).find(' .t').css('color','#222');
    $(this).find('.num').stop().slideDown(300);
})