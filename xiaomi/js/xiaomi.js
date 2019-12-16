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
    let oImg = ` <a href="##"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8bdd93c2aad57ede093b09d40000a48.jpg?w=2452&h=240"  alt=""></a>`
    $(".home-banner-box").html(oImg);
})






















// 拿数据
var a = document.getElementsByClassName("brick-list")[6];
var b = a.getElementsByClassName("brick-item-m");
var data = []
for (var i = 0, len = b.length; i < len; i++) {
    var obj = {};
    obj.src = b[i].getElementsByTagName("img")[0].src;
    obj.title = (b[i].getElementsByClassName("title")[0].innerText).trim();
    obj.desc = b[i].getElementsByClassName("desc")[0].innerText;
    obj.price1 = b[i].getElementsByClassName("price")[0].getElementsByTagName("span")[0].innerText;
    obj.price1 = b[i].getElementsByClassName("price")[0].getElementsByTagName("del")[0].innerText;
    data.push(obj)
}
JSON.stringify(data)



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



