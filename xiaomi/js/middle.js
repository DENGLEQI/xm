
class Nave {
    constructor(data, box) {
        this.data = data;
        this.box = box;
        // this.root = null;
    }
    init() {
        this.renderUI();
        this.cut();
    }
    renderUI() {
        // this.one();
        this.oLi();

    }
    oLi() {
        let a = this.data.more.map((ele, index) => {
            return `<li class=${index == 0 ? "tab-active" : ""}>${ele}</li>`
        }).join("");
        let b = `
            <div class="box-hd">
                <h2 class="title">${this.data.title}</h2>
                <div class="morea"><ul class="tab-list">${a}</ul></div>
            </div>
            `

        let res = "";
        this.data.list.forEach(function (element, index) {
            let li = element.top.map((ele) => {
                return `
                    <li class="brick-item-m">
                        <img src=${ele.src} alt="" class="figure-img">
                        <h3 class="title">${ele.title}</h3>
                        <p class="desc">${ele.desc}</p>
                        <p class="price"><span class="num">${ele.price1}元</span><del><span>${ele.price2}</span></del></p>
                    </li>  
                    `
            }).join("");
            let lis = `
                    <li class="brick-item-s">
                        <div class="figure-img">
                            <img src= ${element.bottom[0].imgA}  alt="">
                        </div>
                        <h3 class="title">${element.bottom[0].titleA}</h3>
                        <p class="price">${element.bottom[0].priceA}</p>
                    </li>
                    <li class="brick-item-x">
                        <div class="figure-more"></div>
                        <div class="mor">
                             浏览更多
                            <small>${element.bottom[0].small}</small>
                        </div>
                    </li>`
            res += ` <div class="span2 ${index == 0 ? "current" : ""}">${li}${lis}</div>`
        })

        let oDiv = `
            <div class="banner"><img src=${this.data.test} alt=""></div>
            <div class="home-brick-box">
                ${b}
                <div class="box-bd">
                    <div class="row">
                        <div class="span1">
                            <li class="brick-item">
                                <img src=${this.data.src1} alt="">
                            </li>
                            <li class="brick-item">
                                <img src=${this.data.src2} alt="">
                            </li>
                        </div>
                        ${res}
                    </div>
                </div>
            </div>
            `
        $(this.box).html(oDiv);
    }
    cut() {
        $(".tab-list").on("mouseenter", "li", function () {
            let index = $(this).index();
            $(".tab-list li").eq(index).addClass("tab-active").siblings().removeClass("tab-active");
            $(".span2").eq(index).addClass("current").siblings().removeClass("current");
        })

    }
}

    // 发送网络请求拿到数据  调用class创建实例对象
    // $.get({
    //     url: "../sever/middle1.php",
    //     dataType: "json",
    //     success(data) {
    //         let manager = new Nave(data, "#box1");
    //         manager.init();
    //     }
    // })
    // $.get({
    //     url: "../sever/middle2.php",
    //     dataType: "json",
    //     success(data) {
    //         let manager = new Nave(data, "#box2");
    //         manager.init();
    //     }
    // })





















// let data = {
//     test: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e63ab43e7c32296f18f34c8efb41534.jpg?thumb=1&w=1299&h=127&f=webp&q=90",
//     src1: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b56fd90a60e3d9e5d87dae9fbd427ea8.jpg?thumb=1&w=248&h=318&f=webp&q=90",
//     src2: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b67de5a8ce9025fb5d8bac66e019d1c3.jpg?thumb=1&w=248&h=318&f=webp&q=90",
//     title: "家电",
//     more: ["热门", "电视影音"],
//     list: [
//         {
//             top: [{
//                 "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg?thumb=1&w=212&h=212&f=webp&q=90",
//                 "title": "米家互联网空调C1（一级能效）",
//                 "desc": "变频节能省电，自清洁",
//                 "price1": "2599",
//                 "price2": "2799元"
//             },
//             {
//                 "src": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=212&h=212",
//                 "title": "米家空调",
//                 "desc": "出众静音，快速制冷热",
//                 "price1": "1699",
//                 "price2": "1799元"
//             },
//             {
//                 "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=212&h=212&f=webp&q=90",
//                 "title": "米家互联网洗烘一体机 Pro 10kg",
//                 "desc": "智能洗烘，省心省力",
//                 "price1": "2999",
//                 "price2": ""
//             },
//             {
//                 "src": "https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633!212x212.jpg",
//                 "title": "小米电视4A 32英寸",
//                 "desc": "人工智能系统，高清液晶屏",
//                 "price1": "699",
//                 "price2": "799元"
//             },
//             {
//                 "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=212&h=212&f=webp&q=90",
//                 "title": "Redmi全自动波轮洗衣机1A 8kg",
//                 "desc": "一键操作，父母都爱用",
//                 "price1": "799",
//                 "price2": ""
//             },
//             {
//                 "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=212&h=212&f=webp&q=90",
//                 "title": "小米全面屏电视E55A",
//                 "desc": "全面屏设计，人工智能语音",
//                 "price1": "1799",
//                 "price2": "2099"
//             },
//             {
//                 "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=212&h=212&f=webp&q=90",
//                 "title": "15.6\" 四核i7 16G 独显 512G",
//                 "desc": "全面均衡的国民轻薄本",
//                 "price1": "4699",
//                 "price2": "4899元"
//             }],
//             bottom: [
//                 {
//                     imgA: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=94&h=94&f=webp&q=90",
//                     titleA: "Air 13.3 2019款",
//                     priceA: "4999元起",
//                     small: "热门"
//                 }
//             ]
//         },
//         {
//             top: [{
//                 "src": "https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633!212x212.jpg",
//                 "title": "小米电视4A 32英寸",
//                 "desc": "人工智能系统，高清液晶屏",
//                 "price1": "699",
//                 "price2": "799元"
//             },
//             {
//                 "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=212&h=212&f=webp&q=90",
//                 "title": "小米全面屏电视E55A",
//                 "desc": "全面屏设计，人工智能语音",
//                 "price1": "1799",
//                 "price2": "2099元"
//             },
//             {
//                 "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3317a291b112aa4712059ad93263668.jpg?thumb=1&w=212&h=212&f=webp&q=90",
//                 "title": "小米全面屏电视E65A",
//                 "desc": "全面屏设计，人工智能语音",
//                 "price1": "2999",
//                 "price2": "3999元"
//             },
//             {
//                 "src": "https://i8.mifile.cn/b2c-mimall-media/ede227c1f0e3472fb8dcfae980d1e43f!212x212.jpg",
//                 "title": "小米电视4X 43英寸",
//                 "desc": "FHD全高清屏，人工智能语音",
//                 "price1": "1199",
//                 "price2": "1499元"
//             },
//             {
//                 "src": "https://i8.mifile.cn/v1/a1/cef8a9c0-2386-5b66-9ed2-6b1d4e4490bf!212x212.jpg",
//                 "title": "小米电视4C 55英寸",
//                 "desc": "4K HDR，人工智能系统",
//                 "price1": "1699",
//                 "price2": "1999元"
//             },
//             {
//                 "src": "https://i8.mifile.cn/b2c-mimall-media/91b59cc6474e0cd777445b15adb13980!212x212.jpg",
//                 "title": "小米电视4A 65英寸",
//                 "desc": "4K HDR，人工智能语音系统",
//                 "price1": "2599",
//                 "price2": "2999元"
//             },
//             {
//                 "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=212&h=212&f=webp&q=90",
//                 "title": "小米壁画电视 65英寸",
//                 "desc": "壁画外观，全面屏，远场语音",
//                 "price1": "6999",
//                 "price2": ""
//             }],
//             bottom: [
//                 {
//                     imgA: "https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b!94x94.jpg",
//                     titleA: "小米盒子4",
//                     priceA: "299",
//                     small: "电视影音"
//                 }
//             ]
//         }
//     ]
// }
