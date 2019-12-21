
$(() => {
    class banner {
        constructor(data) {
            this.data = data;
        }
        init() {
            this.renderUIr();
            this.dynamic();
        }
        // ui渲染
        renderUIr() {
            let li = "";
            arr.map((ele) => {
                li += ` <li class="category-item">${ele}</li>`
                let left = ` <ul class="site-category-list">${li}</ul>`
                $("#nb").html(left);
            })
        }
        // 交互
        dynamic() {
            $("#nb").on("mouseenter", ".category-item", function () {
                $(".hl").eq($(this).index() - 1).addClass("cnm").siblings().removeClass("cnm");
            })
            $("#nb").on("mouseleave", ".category-item", function () {
                $(".hl").eq($(this).index() - 1).removeClass("cnm")
            })
            $("#xxk").on("mouseout", ".h1", function () {
                $(".hl").removeClass("cnm");
            })
            // 点击跳转到购物车
            $(".cart-mini").on("click", function () {
                window.location.href = "http://127.0.0.1/xiaomi/shopping/html/shop.html";
                console.log(13);
            })
        }
    }
    let manager = new banner(data);
    manager.init();
})
let data = ["手机 电话卡", "电视 盒子", "笔记本 显示器 平板", "家电 插线板", "出行 穿戴", "智能 路由器", "电源 配件", "健康 儿童", "耳机音响", "生活 箱包"]