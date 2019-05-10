var mySwiper = new Swiper('.swiper-container', {
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

})
mySwiper.el.onmouseover = function () { //鼠标放上暂停轮播
  mySwiper.autoplay.stop();
}
mySwiper.el.onmouseleave = function () {
  mySwiper.autoplay.start();
}


var toTop = document.querySelector('.toTop');
window.onscroll = function () {
  var v = document.body.scrollTop || document.documentElement.scrollTop;
  if (v > 300) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  };
};
$('.toTop').click(function () {
  $('html,body').animate({
    scrollTop: 0
  }, 300, 'linear');
});


$('.yuan').mouseenter(function () {
  $(this).siblings('.fang').css({
    display: 'block'
  });
});
$('.yuan').mouseleave(function () {
  $(this).siblings('.fang').css({
    display: 'none'
  });
});



$('.item').mouseenter(function () {
  $(this).find('.bpic').stop().animate({
    top: -30
  }, 100, 'linear');
  $(this).css("box-shadow", "0 0 15px 0 ");
});
$('.item').mouseleave(function () {
  $(this).find('.bpic').stop().animate({
    top: -20
  }, 100, 'linear');
  $(this).css("box-shadow", "0 0 0 0 ");

});

var an = document.querySelector('.an');
var box  = document.querySelector('.box');
an.onclick = function () {
  if(box.style.display == 'block') {
    box.style.display = 'none';
  } else {
    box.style.display = 'block';
  }
}  
var an2 = document.querySelector('.an2');
var box2  = document.querySelector('.box2');
an2.onclick = function () {
  if(box2.style.display == 'block') {
    box2.style.display = 'none';
  } else {
    box2.style.display = 'block';
  }
}  


var lis = document.querySelectorAll('.tab-name li');
var uls = document.querySelectorAll('.content ul');
for(var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  lis[i].onclick = function() {
    var num = this.index;
    for(var j = 0; j < lis.length; j++) {
      lis[j].className = "";
      uls[j].className = "tab-card";
      uls[j].style.display = 'none';
    }
    this.className = 'active2';
    lis[num].className = 'active';
    uls[num].style.display = 'block';

  }
}



