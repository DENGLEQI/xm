$(() => {
    // 商品倒计时

    let djs = `
    <div class="round">10:00 场</div>
    <img src="../img/sg_03.jpg" alt="">
    <div class="desc">距离结束还有</div>
    <div class="countdown">
        <span id="time"></span>
        <i>:</i>
        <span id="minute"></span>
        <i>:</i>
        <span id="second"></span>
    </div>
    `
    $(".flashsale-countdown").html(djs);
    let time = $("#time");
    let minute = $("#minute");
    let second = $("#second");
    let target = new Date(2019, 11, 25, 14, 58, 00);
    /* 开启定时器计算并显示倒计时 */
    let timer = setInterval(function () {
        let currentDate = new Date();
        let offset = Math.round((target.getTime() - currentDate.getTime()) / 1000);
        if (offset <= 0) {
            $(".desc").text("本场已结束");
            time.text(00);
            minute.text(00);
            second.text(00);
            /* 关闭倒计时 */
            clearInterval(timer);
        }
        let h = tool(Math.floor(offset / 60 / 60 % 24));
        let m = tool(Math.floor(offset / 60 % 60));
        let s = tool(Math.floor(offset % 60));
        function tool(num) { //一位数补零
            return num < 10 ? "0" + num : num;
        }
        time.text(h);
        minute.text(m);
        second.text(s);

    }, 1000);


})