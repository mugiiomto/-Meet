// 第一次和你相遇，获取元素
var day = document.querySelector('.day');
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');

//我们在一起已经，获取元素
var day_01 = document.querySelector('.day_01');
var hour_01 = document.querySelector('.hour_01');
var minute_01 = document.querySelector('.minute_01');
var second_01 = document.querySelector('.second_01');

//第一次送礼物
var day_02 = document.querySelector('.day_02');
var hour_02 = document.querySelector('.hour_02');
var minute_02 = document.querySelector('.minute_02');
var second_02 = document.querySelector('.second_02');

//第一次牵手
var day_03 = document.querySelector('.day_03');
var hour_03 = document.querySelector('.hour_03');
var minute_03 = document.querySelector('.minute_03');
var second_03 = document.querySelector('.second_03');

var oldTime = Date.parse("February 18, 2020");//认识的时间的毫秒数
var old_Time_01 = Date.parse("February 18, 2021");//在一起时时间的毫秒数
var old_Time_02 = Date.parse("November 18, 2020");//第一次送礼物的时间的毫秒数
var old_Time_03 = Date.parse("May 1, 2021");//第一次牵手的时间的毫秒数

//认识到现在
countDown();//先调用一次这个函数，防止第一次刷新页面有空白
setInterval(countDown, 1000)//开启定时器实现自动变化
function countDown() {
    var nowTime = +new Date();//当前时间总的毫秒数
    var times = (nowTime - oldTime) / 1000;//认识到现在经过了多少毫秒数
    var d = parseInt(times / 60 / 60 / 24); // 天
    d = d < 10 ? '0' + d : d;
    day.innerHTML = d;
    var h = parseInt(times / 60 / 60 % 24); //时
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h;
    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    minute.innerHTML = m;
    var s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s;
}

// 我们在一起到现在现在
countDown_01();//先调用一次这个函数，防止第一次刷新页面有空白
setInterval(countDown_01, 1000)//开启定时器实现自动变化
function countDown_01() {
    var nowTime = +new Date();//当前时间总的毫秒数
    var times = (nowTime - old_Time_01) / 1000;//在一起到现在经过了多少毫秒数
    var d = parseInt(times / 60 / 60 / 24); // 天
    d = d < 10 ? '0' + d : d;
    day_01.innerHTML = d;
    var h = parseInt(times / 60 / 60 % 24); //时
    h = h < 10 ? '0' + h : h;
    hour_01.innerHTML = h;
    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    minute_01.innerHTML = m;
    var s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;
    second_01.innerHTML = s;
}

//第一次送礼物
countDown_02();//先调用一次这个函数，防止第一次刷新页面有空白
setInterval(countDown_02, 1000)//开启定时器实现自动变化
function countDown_02() {
    var nowTime = +new Date();//当前时间总的毫秒数
    var times = (nowTime - old_Time_02) / 1000;//第一次送礼物到现在经过了多少毫秒数
    var d = parseInt(times / 60 / 60 / 24); // 天
    d = d < 10 ? '0' + d : d;
    day_02.innerHTML = d;
    var h = parseInt(times / 60 / 60 % 24); //时
    h = h < 10 ? '0' + h : h;
    hour_02.innerHTML = h;
    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    minute_02.innerHTML = m;
    var s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;
    second_02.innerHTML = s;
}

//第一次牵手
countDown_03();//先调用一次这个函数，防止第一次刷新页面有空白
setInterval(countDown_03, 1000)//开启定时器实现自动变化
function countDown_03() {
    var nowTime = +new Date();//当前时间总的毫秒数
    var times = (nowTime - old_Time_03) / 1000;//第一次送礼物到现在经过了多少毫秒数
    var d = parseInt(times / 60 / 60 / 24); // 天
    d = d < 10 ? '0' + d : d;
    day_03.innerHTML = d;
    var h = parseInt(times / 60 / 60 % 24); //时
    h = h < 10 ? '0' + h : h;
    hour_03.innerHTML = h;
    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    minute_03.innerHTML = m;
    var s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;
    second_03.innerHTML = s;
}