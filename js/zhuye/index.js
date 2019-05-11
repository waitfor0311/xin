var log = console.log;
/*第一排视频项*/
var slide_item = document.querySelectorAll(".swiper-right-box .item");
//top鼠标交互事件
for (var i = 0; i < slide_item.length; i++) {
    slide_item[i].onmouseenter = function () {
        var span = this.children[1];
        var title = span.innerText;
        span.style.display = "none";
        //获取图片高度
        var h = this.children[0].offsetHeight;
        //获取图片top
        var t = this.children[0].offsetTop;
        //创建盒子(背景)
        var b = document.createElement("div");
        b.style.height = h + "px";
        b.style.top = t + "px";
        b.className = "active";
        b.innerHTML = `
            <div class="title">${title}</div>
            <div>
                <b>up主:??????</b>
                <b>up主:13.6万</b>
                <i></i>
            </div>
        `;
        this.appendChild(b);

    };
    slide_item[i].onmouseleave = function () {
        var title = this.children[1];
        title.style.display = "inline";
        var b = this.children[2];
        this.removeChild(b);
    };
}
//推广动漫交互
var tg = document.querySelectorAll(".generalize-bottom-left-test");
for (var i = 0; i < tg.length; i++) {
    tg[i].onmouseenter = function () {
        //获取第一个子元素img
        var img = this.children[0];
        //获取标题内容
        var title = this.children[1];
        title.style.color = "skyblue";
        //获取img宽高
        var h = img.offsetHeight;
        var w = img.offsetWidth;
        //创建div并设置样式
        var div = document.createElement("div");
        div.className = "bg";
        div.style.width = w + "px";
        div.style.height = h + "px";
        this.appendChild(div);
        var p = document.createElement("p");
        p.style.height = 22 + "px";
        p.innerHTML = `
            <span>20:02</span>
            <i></i>
        `;
        //让p标签始终在图片底部
        p.style.top = (h - 25) + "px";
        div.appendChild(p);
    };
    tg[i].onmouseleave = function () {
        var title = this.children[1];
        title.style.color = "";
        var div = this.children[2];
        this.removeChild(div);
    };
}
//视频项进出交互事件
var dh = document.querySelectorAll(".donghua-body-box");
for (var i = 0; i < dh.length; i++) {
    dh[i].onmouseenter = function () {
        //获取播放数以及观看人数元素
        var bfs = this.children[2];
        //设置动画
        // bfs.className = "down";
        bfs.className = "down";
        //获取第一个子元素img
        var img = this.children[0];
        //获取标题内容
        var title = this.children[1];
        title.style.color = "skyblue";
        //获取img宽高
        var h = img.offsetHeight - 10;
        var w = img.offsetWidth;
        //创建div并设置样式
        var div = document.createElement("div");
        div.className = "bg";
        div.style.width = w + "px";
        div.style.height = h + "px";
        this.appendChild(div);
        var p = document.createElement("p");
        p.innerHTML = `
            <span>20:02</span>
            <i></i>
        `;
        div.appendChild(p);
    };
    dh[i].onmouseleave = function () {
        var title = this.children[1];
        title.style.color = "";
        var div = this.children[3];
        this.removeChild(div);
        //获取播放数以及观看人数元素
        var bfs = this.children[2];
        //设置动画02
        bfs.className = "up";
    };
}

//特别推荐进出交互
var tj = document.querySelectorAll(".tebietuijian-bottom-left-box");
for (var i = 0; i < tj.length; i++) {
    tj[i].onmouseenter = function () {
        var i = document.createElement("i");
        //描述
        var ms = this.children[2];
        ms.style.color = "skyblue";
        this.appendChild(i);
        var img = this.children[0];
        var w = img.offsetWidth;
        var h = img.offsetHeight;
        i.style.top = (h - i.offsetHeight - 6) + "px";
        i.style.left = (w - i.offsetWidth - 6) + "px";
    }
    tj[i].onmouseleave = function () {
        var i = this.children[3];
        this.removeChild(i);
        //描述
        var ms = this.children[2];
        ms.style.color = "";
    }
}

//侧边栏鼠标交互(弹出盒子)
function tanchu(that, div, src) {
    //弹出盒子
    var h = that.offsetHeight;
    div.className = "active";
    div.style.bottom = (h + 2) + "px";
    // 盒子内容
    div.innerHTML = `
    <h6>《博人传2 火影忍者新时代》十尾恶化与九尾背水一战 十尾分裂者巢穴</h6>
    <p><span class = "left">用户名</span><span class="line">|</span><span class = "right">2019-05-05 19:00</span></p>
    <em class="hr"></em>
    <div class="content">
        <img src="${src}" >
        <span>这是一个忍者的世界。从小身上封印着邪恶的九尾妖狐，鸣人受尽了村人的冷落，只是拼命用各种恶作剧试图吸引大家的注意力。好在还是有依鲁卡老师关心</span>
    </div>
    <em class="hr"></em>
    <p><span class="glyphicon glyphicon-play-circle"></span>71.5万<span class="glyphicon glyphicon-list-alt"></span>6650<span class="glyphicon glyphicon-star-empty"></span>1.6万<span class="glyphicon glyphicon-download"></span>2.2万</p>
    `;
    that.append(div);
    //文字样式
    var tit = that.children[1];
    tit.style.color = "skyblue";

};
var rbox = document.querySelectorAll(".donghua-body-right >.donghua-body-right-quanbu:not(:first-child)");
for (var i = 0; i < rbox.length; i++) {
    rbox[i].addEventListener("mouseenter", function () {
        //弹出盒子
        var div = document.createElement("div");
        tanchu(this, div, "./images/cebianlan.webp");
        var that = this;
        div.addEventListener("mouseenter", function () {
            var tit = that.children[1];
            tit.style.color = "";
            that.removeChild(this);
        });
    });
    rbox[i].addEventListener("mouseleave", function () {
        var tit = this.children[1];
        tit.style.color = "";
        var div = this.children[2];
        this.removeChild(div);
    });
}
//查看更多
var ckgd = document.querySelectorAll(".donghua-body-right-quanbu-gengduo");
for (var i = 0; i < ckgd.length; i++) {
    ckgd[i].addEventListener("mouseenter", function () {
        this.style.background = "gold";
    });
    ckgd[i].addEventListener("mouseleave", function () {
        this.style.background = "";
    });
}
var fjckgd = document.querySelectorAll(".fanju-body-right-quanbu-gengduo");
for (var i = 0; i < fjckgd.length; i++) {
    fjckgd[i].addEventListener("mouseenter", function () {
        this.style.background = "gold";
    });
    fjckgd[i].addEventListener("mouseleave", function () {
        this.style.background = "";
    });
}
//番剧弹出
var fjbox = document.querySelectorAll(".fanju-body-right-quanbu");
for (var i = 0; i < fjbox.length; i++) {
    fjbox[i].addEventListener("mouseenter", function () {
        let wz = this.children[1];
        wz.style.color = "skyblue";
    });
    fjbox[i].addEventListener("mouseleave", function () {
        let wz = this.children[1];
        wz.style.color = "";
    });
}
//右盒子(给标题第一个设置弹出盒子)
//>:first-child获取第一个亲儿子 
var rbox_f = document.querySelectorAll(".donghua-body-right >:first-child");
for (var i = 0; i < rbox_f.length; i++) {
    rbox_f[i].addEventListener("mouseenter", function (e) {
        var i = document.createElement("i");
        //获取img
        var img = this.children[1];
        var h = img.offsetHeight;
        var w = img.offsetWidth;
        //基于上级定位元素的left值
        var l = img.offsetLeft;
        this.appendChild(i);
        var icon = this.children[3];
        var iwh = icon.offsetHeight;
        //设置样式
        i.style.left = (w + l - iwh - 3) + "px";
        i.style.top = (h - iwh - 1) + "px";
        //弹出盒子
        var div = document.createElement("div");
        var wz = this.children[2];
        wz.style.color = "skyblue";
        var src = img.src;
        tanchu(this, div, src);
        var that = this;
        div.addEventListener("mouseenter", function () {
            var tit = that.children[2].children[0];
            tit.style.color = "";
            that.removeChild(this);
            var i = that.children[3];
            that.removeChild(i);
        });
    });
    rbox_f[i].addEventListener("mouseleave", function () {
        var tit = this.children[2].children[0];
        tit.style.color = "";
        var wz = this.children[2];
        wz.style.color = "";
        var i = this.children[3];
        this.removeChild(i);
        var div = this.children[3];
        this.removeChild(div);
    });
}
//楼梯导航
var ul = document.querySelector(".louti");
var li = document.querySelectorAll(".louti li");
var lt = document.querySelectorAll(".lt");
//给予下标
for (var i = 0; i < lt.length; i++) {
    lt[i].index = i;
}
for (var i = 0; i < li.length; i++) {
    li[i].index = i;
}
//回到顶部隐藏
var db = document.querySelector(".xiangshang");

function scrollHide(topValue) {
    if (topValue > 400) {
        db.style.transition = "0.3s";
        ul.style.transition = "0.3s";
        db.style.bottom = "-10px";
        ul.style.top = "0";
    } else {
        db.style.bottom = "";
        ul.style.top = "";
    }
}
//滚动条动画封装
const ScrollTop = (number = 0, time, fn) => {
    log(time);
    if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number;
        return number;
    }
    const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
    let spacingInex = time / spacingTime; // 计算循环的次数
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
    let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
    let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
            spacingInex--;
            ScrollTop(nowTop += everTop);
        } else {
            clearInterval(scrollTimer); // 清除计时器
            if (fn instanceof Function) {
                fn();
            }
        }
    }, spacingTime);
    log(fn instanceof Function);
}
//点击跳转
ul.addEventListener("click", function (e) {
    var t = e.target;
    if (t.nodeName == "LI") {
        let index = t.index;
        let lt_top = lt[index].offsetTop;
        log(index, lt_top);
        ScrollTop(lt_top, 400, function () {
            log("进入");
            for (var i = 0; i < li.length; i++) {
                li[i].className = "";
            }
            li[index].className = "active";
        });
    }
});
//滚动切换
window.addEventListener("scroll", function (e) {
    var topValue = document.documentElement.scrollTop || document.body.scrollTop;
    scrollHide(topValue);
    for (var i = lt.length - 1; i >= 0; i--) {
        if (topValue >= lt[i].offsetTop) {
            li[i].className = "active";
            if (i == 0) {
                li[i].nextElementSibling.className = "";
            } else if (i == lt.length - 1) {
                li[i].previousElementSibling.className = "";
            } else {
                li[i].nextElementSibling.className = "";
                li[i].previousElementSibling.className = "";
            }
            return;
        } else {
            li[i].className = "";
        }
    }
});
//回到顶部
db.addEventListener("click", function () {
    ScrollTop(0, 400);
});
//tab切换
var items = document.querySelectorAll(".fanju-bottom-left");
var tab = document.querySelectorAll(".fanju-top-left-riqi");
var datas = [
    {index:0,num:24,title:"魔偶马戏团",src:"momxt.webp"},
    {index:1,num:19,title:"皿三昧",src:"xsw.webp"},
    {index:2,num:20,title:"贤者之孙",src:"xzzs.webp"},
    {index:3,num:30,title:"盾之勇者成名录",src:"dzrz.webp"},
    {index:4,num:22,title:"黑色四叶草",src:"hssyc.webp"},
    {index:5,num:21,title:"钻石王牌 actII",src:"zswp.webp"},
    {index:6,num:28,title:"异世界四重奏",src:"ysjscz.webp"},
    {index:7,num:25,title:"智龙迷城",src:"zlmic.webp"}
];
for (var i = 0; i < tab.length; i++) {
    for(var j = 0;j<8;j++){
        tab[i].children[j].index = j;
    }
    tab[i].addEventListener("click", function (e) {
        let t = e.target;
        if (t.nodeName == "SPAN") {
            let index = t.index;
            var del = this.parentNode.parentNode.nextElementSibling.children[0];
            var dels = del.querySelectorAll(".fanju-bottom-left-box");
            for(var o = dels.length-1;o>=0;o--){
                del.removeChild(dels[o]);
            }
            var data = [];
            for(var o = 0;o<datas[index].num;o++){
                data.push({title:datas[index].title,src:datas[index].src,jisu:datas[index].num});
            }
            log(data);
            var html = template('tab1', {
                datas:data
            });
            del.innerHTML = html;
        }
    });
}