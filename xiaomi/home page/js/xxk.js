$(() => {
    // 设计class => 选项卡
    class NavManager {
        constructor(data) {
            this.data = data;
        }
        init() {
            this.renderUI();
            this.dynamic();
        }
        renderUI() {
            let res = "";
            this.data.forEach(element => {
                let lisStr = element.list.map((ele) => {
                    return `
            <li>
                <a href="">
                    <div class="figure figure-thumb"><img src=${ele.src} alt="${ele.title}" width="160" height="110">
                    </div>
                    <div class="title">${ele.title}</div>
                    <p class="price">${ele.price}</p>
                </a>
            </li>
            
            `
                }).join("");
                res += `<ul class = "children-list">${lisStr}</ul>`
            })
            let te = `<div class = "container">${res}</div>`;
            $(".header-nav-menu").html(te);
        }
        dynamic() {
            $(".nav-item").on("mouseenter", function () {
                $(".header-nav-menu").css("display", "block");
                $(".header-nav-menu").addClass("slide-up");
                $(".children-list").eq($(this).index() - 1).addClass("clearfix");
            });
            $(".nav-item").on("mouseleave", function () {
                $(".header-nav-menu").css("display", "none");
                $(".children-list").eq($(this).index() - 1).removeClass("clearfix");
            })
            $(".nav-item").eq(7).on("mouseenter", function () {
                $(".header-nav-menu").css("display", "none");
            })
            $(".nav-item").eq(8).on("mouseenter", function () {
                $(".header-nav-menu").css("display", "none");
            })
        }
    }

    // 发送网络请求获取数据  调用class创建实例对象
    $.get({
        url: "../sever/data.php",
        dataType: "json",
        success(data) {
            let manager = new NavManager(data);
            manager.init();
        }
    });
})

