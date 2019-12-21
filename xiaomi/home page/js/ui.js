$(() => {
    class Nav {
        constructor(data) {
            this.data = data;
        }
        init() {
            this.renderUI();
        }
        renderUI() {
            let a = this.data.list.map((ele) => {
                return `
                <li class="brick-item">
                    <img src=${ele.src}
                        alt="" class="figure-img">
                    <h3 class="title">${ele.desc}</h3>
                    <p class="price">
                        <span class="num">${ele.price1}元起</span>
                    </p>
                </li>
                `
            }).join("");
            let _div = `
            <div class="row">
            <div class="span4">
                <img src=${this.data.img}
                    alt="">
            </div>
            <div class="span16">${a}</div></div>`
            $("#box-bd").html(_div);
        }
    }
    // 发送网络请求拿到数据  调用class创建实例对象
    $.get({
        url: "../sever/data2.php",
        dataType: "json",
        success(data) {
            let manager = new Nav(data);
            manager.init();
        }
    })
})






