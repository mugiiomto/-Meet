var day = document.querySelector('.day');
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var oldTime = Date.parse("February 18, 2021");//在一起的那一天的时间的毫秒数
countDown();//先调用一次这个函数，防止第一次刷新页面有空白
setInterval(countDown, 1000)//开启定时器
function countDown() {
    var nowTime = +new Date();//当前时间总的毫秒数
    var times = (nowTime - oldTime) / 1000;//在一起到现在经过了多少毫秒数
    var d = parseInt(times / 60 / 60 / 24); // 天
    d = d < 10 ? '0' + d : d;
    day.innerHTML = d;
}