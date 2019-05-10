// 定义一个索引
var index = 0;
// 【右侧按钮实现轮播下一项】
$('.arrow-right').click(function () {
  index++;
  // 限制索引
  if (index >= $('.slider li').length) {
    index = 0;
  }
  // 下一个轮播项淡入显示,其他轮播项淡入隐藏
  $('.slider li').eq(index).fadeIn(500).siblings().fadeOut();
  // 找到当前的小点，样式突出显示-增加类名,q其他兄弟小点恢复默认样式-移除类名
  $('.controls a').eq(index).addClass('active').siblings().removeClass('active');

});
// 【左侧按钮实现轮播上一项】
$('.arrow-left').click(function () {
  index--;
  // 限制索引
  if (index < 0) {
    index = $('.slider li').length - 1;
  }
  // 下一个轮播项淡入显示,其他轮播项淡入隐藏
  $('.slider li').eq(index).fadeIn(500).siblings().fadeOut();
  // 找到当前的小点，样式突出显示-增加类名,q其他兄弟小点恢复默认样式-移除类名
  $('.controls a').eq(index).addClass('active').siblings().removeClass('active');

});


// 【点击小点切换】
// 给小点注册事件
$('.controls a').click(function () {
  // 获取小点的索引，赋值给index全局变量
  index = $(this).index();
  // 下一个轮播项淡入显示,其他轮播项淡入隐藏
  $('.slider li').eq(index).fadeIn(500).siblings().fadeOut();
  // 找到当前的小点，样式突出显示-增加类名,q其他兄弟小点恢复默认样式-移除类名
  $('.controls a').eq(index).addClass('active').siblings().removeClass('active');
});

// 自动轮播
var timer;
function autoPlay() {
  // 开启定时器
  timer = setInterval(function () {
    // 触发右侧按钮点击事件
    $('.arrow-right').click();
  }, 3000)
}
autoPlay();

// 鼠标进入轮播区停止自动轮播
$('.slider').mouseenter(function (event) {
  clearInterval(timer);
});

// 鼠标离开轮播区开启自动轮播
$('.slider').mouseleave(function (event) {
  autoPlay();
});
