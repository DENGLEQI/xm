$(() => {
    // 吸顶效果
    let obj = document.getElementById("wrap");
    let ot = obj.offsetTop;
    document.onscroll = function () {
        let st = document.body.scrollTop || document.documentElement.scrollTop;
        obj.setAttribute("data-fixed", st >= ot ? "fixed" : "")
    }
    let str = decodeURI(window.location.search.slice(1));
    // console.log(str);

    function queryString2Obj(queryString) {
        let o = {};
        let arr = queryString.split("&");
        arr.forEach(function (item) {
            let data = item.split("=");
            let key = data[0];
            let val = data[1];
            o[key] = val;
        })
        return o;
    };
    let data = queryString2Obj(str);
    let h2 = $("h2");
    let priceA = $(".price");
    let title = $(".yi");
    let titleB = $(".pr");
    let img = $(".src");
    h2.text(data.title);
    priceA.text(data.title);
    title.text(data.title);
    titleB.text(data.priceA);
    img[0].src = data.src;
})