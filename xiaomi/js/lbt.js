$(() => {
    class Nav {
        constructor(data) {
            this.data = data;
            this.index = 0;
            this.width = 992;
            this.timer = null;
        }
        init() {
            this.renderUI();
            this.dynamic();
            this.live();
            // this.fn4();
        }
        renderUI() {
            let li = this.data.map(element => {
                return `
                <li class="swiper-slide">
                    <a href="##">
                        <div class="content">
                            <div class="thumb">
                                <img src=${element.src} alt="">
                            </div>
                            <h3 class="title">${element.title}</h3>
                            <p class="desc">${element.desc}</p>
                            <p class="price">
                                <span>${element.price1}</span>
                                元
                                <del>${element.price2}</del>
                            </p>
                        </div>
                    </a>
                </li>
                `
            }).join("");
            let _ul = ` <ul class="swiper-wrapper">${li}</ul>`;
            $(".flashsale-list").html(_ul);

        }
        dynamic() {
            // 开启一个定时器 每隔10秒钟切换一次
            this.timer = setInterval(() => {
                this.next()
            }, 4000);
            $(".swiper-flashsale-prev").on("click", () => {
                console.log("上一张");
                this.prev()
            })
            $(".swiper-flashsale-next").on("click", () => {
                this.next()
                console.log("下一张");
            })
        }
        live() {
            $(".swiper-controls").hover(
                () => { clearInterval(this.timer) },
                () => { this.dynamic() }
            );
            $(".swiper-wrapper").hover(
                () => { clearInterval(this.timer) },
                () => { this.dynamic() }
            );
        }
        next() {
            this.index++;
            if (this.index > this.data.length / 4 - 1) {
                this.index = 0
            }
            let ng = (this.index * this.width);
            $(".swiper-wrapper").css({
                left: -ng + "px"
            })

        }
        prev() {
            this.index--;
            if (this.index < 0) {
                this.index = this.data.length / 4 - 1;
            }
            let ng = (this.index * this.width);
            $(".swiper-wrapper").css({
                left: -ng + "px"
            })
        }
        随机颜色

        rgb() {//rgb颜色随机
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var rgb = '(' + r + ',' + g + ',' + b + ')';
            return rgb;
        }

    }
    // 发送网络请求拿到数据  调用class创建实例对象
    $.get({
        url: "../sever/data1.php",
        dataType: "json",
        success(data) {
            let manager = new Nav(data);
            manager.init();
        }
    })
})









