$(() => {
    // 移入（下载App）显示内容
    $("#J_siteDownloadApp").on('mouseover', function (e) {
        e.preventDefault();
        $("#J_siteDownloadApp").addClass("active");
        $(".appcode").css("height", "148px")
    })
    // 移出（下载App）内容消失
    $("#J_siteDownloadApp").on('mouseout', function (e) {
        e.preventDefault();
        $("#J_siteDownloadApp").removeClass("active");
        $(".appcode").css("height", "0")
    })


    // 移入（购物车）显示内容
    $("#J_miniCartTrigger").on('mouseover', function (e) {
        e.preventDefault();
        $("#J_miniCartMenu").css("height", "100px")
    })
    // 移出（购物车）内容消失
    $("#J_miniCartTrigger").on('mouseout', function (e) {
        e.preventDefault();
        $("#J_miniCartMenu").css("height", "0")
    })

    // 鼠标划入form表单高亮
    $("#J_searchForm").hover(function () {
        $(".search-text").css("border-color", "#b0b0b0");
        $(".search-btn").css("border-color", "#b0b0b0");
    }, function () {
        $(".search-text").css("border-color", "#e0e0e0");
        $(".search-btn").css("border-color", "#e0e0e0");
    })

    // 获得焦点时改变样式
    $(".search-text").focus(function () {
        $(".search-text").css("border-color", "#ff6700");
        $(".search-btn").css("border-color", "#ff6700");
        $(".search-hot-words").remove();
    });
    $(".search-text").blur(function () {
        $(".search-text").css("border-color", "#b0b0b0");
        $(".search-btn").css("border-color", "#b0b0b0");
        let words = $(`<div class="search-hot-words"><a href="">小米9 Pro 5G</a><a href="">Redmi Note 8</a> </div>`);
        let form = $(".search-form").append(words);
    });
    // 广告
    let oImgA = ` <a href="##"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8bdd93c2aad57ede093b09d40000a48.jpg?w=2452&h=240"  alt=""></a>`
    $(".home-banner-box").html(oImgA);
    let oImgB = ` <a href="##"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?w=2452&h=240"  alt=""></a>`
    $("#box6").html(oImgB);
    // 视频
    let sp = `
    <ul class="buts">
    <li class="butA">
        <div class="play">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4004fc968de331f702585d58b15aba2.jpg"
                alt="">
            <span class="iconfont-play"></span>
        </div>
        <h3 class="title">小米MIX Alpha 开箱视频</h3>
    </li>
    <li class="butA">
        <div class="play">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/395fdedf0f40206032397e33beed756e.jpg"
                alt="">
            <span class="iconfont-play"></span>
        </div>
        <h3 class="title">小米5G新品手机发布会</h3>
    </li>
    <li class="butA">
        <div class="play">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a134c9f8fffb85a47ac397e7eeba7e8.jpg"
                alt="">
            <span class="iconfont-play"></span>
        </div>
        <h3 class="title">Redmi Note 8 系列发布会</h3>
    </li>
    <li class="butA">
        <div class="play">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c37f64bada7b0b2758f50e50077fe6c.jpg"
                alt="">
            <span class="iconfont-play"></span>
        </div>
        <h3 class="title">小米电视5 创新背后的故事</h3>
    </li>
</ul>
    `
    $("#but").html(sp);
    let xf = `
    <a href="##" class="item">
    <div class="icon">
        <img class="static" src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png"
            alt="">
        <img class="hover" src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"
            alt="">
    </div>
</a>
<a href="##" class="item">
    <div class="icon">
        <img class="static" src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png"
            alt="">
        <img class="hover" src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png"
            alt="">
    </div>
</a>
<a href="##" class="item">
    <div class="icon">
        <img class="static"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png" alt="">
        <img class="hover"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png" alt="">
    </div>
</a>
<a href="##" class="item">
    <div class="icon">
        <img class="static" src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png"
            alt="">
        <img class="hover" src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png"
            alt="">
    </div>
</a>
<a href="##" class="item">
    <div class="icon">
        <img class="static" src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png"
            alt="">
        <img class="hover" src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"
            alt="">
    </div>
</a>
<a href="##" class="item">
    <div class="icon">
        <img class="static" src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png"
            alt="">
        <img class="hover" src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png"
            alt="">
    </div>
</a>
<a href="#" class="item backtop">
    <div class="icon">
        <img class="static" src="../img/totop.png" alt="">
        <img class="hover" src="../img/totop_hover.png" alt="">
    </div>
</a>
    
    `
    $(".home-tool-bar").html(xf);
})






















// 拿数据
// var a = document.getElementsByClassName("brick-list")[12];
// var b = a.getElementsByClassName("brick-item-m");
// var data = []
// for (var i = 0, len = b.length; i < len; i++) {
//     var obj = {};
//     obj.src = b[i].getElementsByTagName("img")[0].src;
//     obj.title = (b[i].getElementsByClassName("title")[0].innerText).trim();
//     obj.desc = b[i].getElementsByClassName("desc")[0].innerText;
//     obj.price1 = b[i].getElementsByClassName("price")[0].getElementsByTagName("span")[0].innerText;
//     obj.price2 = b[i].getElementsByClassName("price")[0].getElementsByTagName("del")[0] ? b[i].getElementsByClassName("price")[0].getElementsByTagName("del")[0].innerText : "";
//     data.push(obj)
// }
// JSON.stringify(data)



// var a = document.getElementsByClassName("brick-list")[1];
// var b = a.getElementsByClassName("brick-item-m")[2];
// src = b.getElementsByTagName("img")[0].src;
// title = b.getElementsByClassName("title")[0].innerText;
// desc = b.getElementsByClassName("desc")[0].innerText;
// price1 = b.getElementsByClassName("price")[0].getElementsByTagName("span")[0].innerText;
// price2 = b.getElementsByClassName("price")[0].getElementsByTagName("del")[0].innerText;
// 拿数据
// var ul = document.getElementsByClassName("children-list clearfix")[6];
// var li = ul.getElementsByTagName("li");
// var data = [];
// for (var i = 0, len = li.length; i < len - 1; i++) {
//     var arr = {};
//     arr.src = li[i].getElementsByClassName("figure figure-thumb")[0].getElementsByTagName("img")[0].src;
//     arr.title = li[i].getElementsByClassName("title")[0].innerText;
//     arr.price = li[i].getElementsByClassName("price")[0].innerText;
//     data.push(arr);
// }
// JSON.stringify(data);

// var a = document.getElementsByClassName("children-list")[33];
// var b = a.getElementsByTagName("li");
// var data = [];
// for (var i = 0, len = b.length; i < len; i++) {
//     var obj = {};
//     obj.src = b[i].getElementsByClassName("thumb")[0].src;
//     obj.text = b[i].getElementsByClassName("text")[0].innerText;
//     data.push(obj)
// }
// console.log(JSON.stringify(data));




