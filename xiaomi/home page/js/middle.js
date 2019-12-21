// 创建class 渲染页面 + 交互
class Nave {
    constructor(data, box) {
        this.data = data;
        this.box = box;
    }
    init() {
        this.renderUI();
        this.cut();
    }
    renderUI() {
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
    // 添加划入事件 划入切换内容
    cut() {
        let self = this
        $(this.box).find(".tab-list").on("mouseenter", "li", function () {
            let index = $(this).index();
            $(self.box).find(".tab-list li").eq(index).addClass("tab-active").siblings().removeClass("tab-active");
            $(self.box).find(".span2").eq(index).addClass("current").siblings().removeClass("current");
        })
    }
}




