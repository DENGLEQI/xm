$(() => {
    class banner {
        constructor(data) {
            this.data = data;
        }
        init() {
            this.renderUIr();
            this.cut();
            this.sa();
        }
        // ui渲染
        renderUIr() {
            var box = "";
            this.data.map((ele) => {
                let imgs = "";
                ele.src.map((a, index) => {
                    imgs += ` <img class="figure-img ${index == 0 ? "none" : ""}" src=${a} alt="">`
                })
                let ul = "";
                ele.imgs.map((b) => {
                    ul += `
                   <li class="active">
                        <img src=${b} alt="">
                    </li>
                   `
                }).join("")
                let div = `
                <h2 class="title">${ele.title}</h2>
                <p class="price">
                    ${ele.priceA}
                    <del>${ele.priceB}</del>
                </p>
                `
                box += ` <div class="goods-item"><div class="imgs">${imgs}</div>${div}<ul class="thumb-list">${ul}</ul><div class="shop">加入购物车</div></div>`

            })
            $(".goods-list").html(box);
        }
        cut() {
            $(".goods-item").mouseenter(function () {
                let self = this
                // 划入小图片切换大图片
                $(this).find(".thumb-list").on("mouseenter", ".active", function () {
                    let index = $(this).index();
                    $(self).find(".imgs img").eq(index).addClass("none").siblings().removeClass("none");
                })
                // 划入加入购物车按钮显示
                $(this).find(".shop").mouseenter(function () {
                    $(self).find(".shop").css("opacity", "1");
                })
                $(this).find(".shop").mouseout(function () {
                    $(self).find(".shop").css("opacity", "0");
                })
                $(this).find(".shop").click(function () {
                    event.stopPropagation();
                })
            })
        }
        sa() {
            $(".goods-item").mouseenter(function () {
                $(this).on("click", function () {
                    let title = this.getElementsByClassName("title")[0].innerText;
                    let src = this.getElementsByClassName("figure-img")[0].src;
                    let priceA = this.getElementsByClassName("price")[0].innerText;
                    // console.log(priceA, src, title);
                    var queryString = `title=${title}&priceA=${priceA}&src=${src}`;
                    window.location.href = "../html/details.html" + "?" + queryString;
                })
            })
        }
    }

    // 发送网络请求获取数据  调用class创建实例对象
    $.get({
        url: "../sever/list.php",
        dataType: "json",
        success(data) {
            let manager = new banner(data);
            manager.init();
        }
    });
})


// var data = [{
//     "title": "小米手环4 NFC版",
//     "priceA": "209元",
//     "priceB": "229元",
//     "src": ["https://i1.mifile.cn/a1/pms_1560238127.40319869!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1560238127.40319869!34x34.png"]
// },
// {
//     "title": "米家电磁炉",
//     "priceA": "269元",
//     "priceB": "299元",
//     "src": ["https://i1.mifile.cn/a1/pms_1513822496.31335198!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1513822496.31335198!34x34.jpg"]
// },
// {
//     "title": "知吾煮汤锅 米家定制",
//     "priceA": "89元",
//     "priceB": "99元",
//     "src": ["https://i1.mifile.cn/a1/pms_1513864376.45999722!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1513864376.45999722!34x34.jpg"]
// },
// {
//     "title": "小米9 街头风保护壳",
//     "priceA": "49元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1550475670.62661497!200x200.jpg", "https://i1.mifile.cn/a1/pms_1550475674.33484518!200x200.jpg", "https://i1.mifile.cn/a1/pms_1550475677.43423804!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1550475670.62661497!34x34.jpg", "https://i1.mifile.cn/a1/pms_1550475674.33484518!34x34.jpg", "https://i1.mifile.cn/a1/pms_1550475677.43423804!34x34.jpg"]
// },
// {
//     "title": "小米净水器滤芯 PP棉",
//     "priceA": "59元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1525317355.64747798!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1525317355.64747798!34x34.jpg"]
// },
// {
//     "title": "90分轻薄无缝一体织鹅绒羽绒服",
//     "priceA": "159元",
//     "priceB": "299元",
//     "src": ["https://i1.mifile.cn/a1/pms_1536571975.28359503!200x200.jpg", "https://i1.mifile.cn/a1/pms_1536571972.45916240!200x200.jpg", "https://i1.mifile.cn/a1/pms_1536571970.29753560!200x200.jpg", "https://i1.mifile.cn/a1/pms_1536571966.76731430!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1536571975.28359503!34x34.jpg", "https://i1.mifile.cn/a1/pms_1536571972.45916240!34x34.jpg", "https://i1.mifile.cn/a1/pms_1536571970.29753560!34x34.jpg", "https://i1.mifile.cn/a1/pms_1536571966.76731430!34x34.jpg"]
// },
// {
//     "title": "小米净水器滤芯 后置活性炭",
//     "priceA": "69元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1525316923.85218860!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1525316923.85218860!34x34.jpg"]
// },
// {
//     "title": "米家运动鞋3 男款",
//     "priceA": "189元",
//     "priceB": "199元",
//     "src": ["https://i1.mifile.cn/a1/pms_1566204458.98572409!200x200.jpg", "https://i1.mifile.cn/a1/pms_1566204468.35474786!200x200.jpg", "https://i1.mifile.cn/a1/pms_1566204519.4143609!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1566204458.98572409!34x34.jpg", "https://i1.mifile.cn/a1/pms_1566204468.35474786!34x34.jpg", "https://i1.mifile.cn/a1/pms_1566204519.4143609!34x34.jpg"]
// },
// {
//     "title": "Free Tie真皮板鞋 米家定制 男款",
//     "priceA": "99.5~129元",
//     "priceB": "199元",
//     "src": ["https://i1.mifile.cn/a1/pms_1504510139.65413172!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1504510139.65413172!34x34.jpg"]
// },
// {
//     "title": "小米小背包",
//     "priceA": "29元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1539682803.29879353!200x200.png", "https://i1.mifile.cn/a1/pms_1539682814.42868631!200x200.png", "https://i1.mifile.cn/a1/pms_1539682822.4161014!200x200.png", "https://i1.mifile.cn/a1/pms_1539682892.76448492!200x200.png", "https://i1.mifile.cn/a1/pms_1539682895.62231103!200x200.png", "https://i1.mifile.cn/a1/pms_1565056755.01729088!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1539682803.29879353!34x34.png", "https://i1.mifile.cn/a1/pms_1539682814.42868631!34x34.png", "https://i1.mifile.cn/a1/pms_1539682822.4161014!34x34.png", "https://i1.mifile.cn/a1/pms_1539682892.76448492!34x34.png", "https://i1.mifile.cn/a1/pms_1539682895.62231103!34x34.png", "https://i1.mifile.cn/a1/pms_1565056755.01729088!34x34.jpg"]
// },
// {
//     "title": "小米净水器（厨上式）",
//     "priceA": "1499元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1538138719.13548106!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1538138719.13548106!34x34.jpg"]
// },
// {
//     "title": "小米水质TDS检测笔",
//     "priceA": "29元",
//     "priceB": "39元",
//     "src": ["https://i1.mifile.cn/a1/T19OV_BgKT1RXrhCrK!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/T19OV_BgKT1RXrhCrK!34x34.jpg"]
// },
// {
//     "title": "米家扫拖一体机配件",
//     "priceA": "99元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1573378003.05022908!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1573378003.05022908!34x34.jpg"]
// },
// {
//     "title": "小米旅行箱 青春款",
//     "priceA": "199~299元",
//     "priceB": "349元",
//     "src": ["https://i1.mifile.cn/a1/pms_1573127122.84758967!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1573127122.84758967!34x34.jpg"]
// },
// {
//     "title": "米家扫拖一体机配件",
//     "priceA": "39元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1573377996.94188526!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1573377996.94188526!34x34.jpg"]
// },
// {
//     "title": "米家扫拖机器人1C 配件",
//     "priceA": "49元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1575513174.90658994!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1575513174.90658994!34x34.jpg"]
// },
// {
//     "title": "15.6 Pro i5 8G 1050MAX-Q 256G",
//     "priceA": "6299元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1533266333.04566853!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1533266333.04566853!34x34.jpg"]
// },
// {
//     "title": "空气净化器滤芯",
//     "priceA": "149元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1476425102.6997704!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1476425102.6997704!34x34.jpg"]
// },
// {
//     "title": "米兔儿童滑板车",
//     "priceA": "229元",
//     "priceB": "249元",
//     "src": ["https://i1.mifile.cn/a1/pms_1553484007.64174630!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553483956.58434790!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1553484007.64174630!34x34.jpg", "https://i1.mifile.cn/a1/pms_1553483956.58434790!34x34.jpg"]
// },
// {
//     "title": "米兔折叠婴儿推车",
//     "priceA": "629元",
//     "priceB": "699元",
//     "src": ["https://i1.mifile.cn/a1/pms_1541382619.46034561!200x200.png", "https://i1.mifile.cn/a1/pms_1541382633.6797803!200x200.png", "https://i1.mifile.cn/a1/pms_1541382608.41335243!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1541382619.46034561!34x34.png", "https://i1.mifile.cn/a1/pms_1541382633.6797803!34x34.png", "https://i1.mifile.cn/a1/pms_1541382608.41335243!34x34.png"]
// },
// {
//     "title": "米家扫拖一体机配件",
//     "priceA": "39元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1573377990.56178789!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1573377990.56178789!34x34.jpg"]
// },
// {
//     "title": "小米活塞耳机 清新版",
//     "priceA": "29元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1482321199.12589253!200x200.jpg", "https://i1.mifile.cn/a1/pms_1482321205.78014235!200x200.jpg", "https://i1.mifile.cn/a1/pms_1482321218.65298411!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1482321199.12589253!34x34.jpg", "https://i1.mifile.cn/a1/pms_1482321205.78014235!34x34.jpg", "https://i1.mifile.cn/a1/pms_1482321218.65298411!34x34.jpg"]
// },
// {
//     "title": "15.6 Pro i7 16G 1050MAX-Q 256G",
//     "priceA": "7599元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1533264175.2117303!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1533264175.2117303!34x34.jpg"]
// },
// {
//     "title": "最生活浴巾·青春系列",
//     "priceA": "79元",
//     "priceB": "99元",
//     "src": ["https://i1.mifile.cn/a1/pms_1528169650.48795564!200x200.jpg", "https://i1.mifile.cn/a1/pms_1528169648.33824546!200x200.jpg", "https://i1.mifile.cn/a1/pms_1528169655.74869395!200x200.jpg", "https://i1.mifile.cn/a1/pms_1528169658.32594324!200x200.jpg", "https://i1.mifile.cn/a1/pms_1528169661.75251802!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1528169650.48795564!34x34.jpg", "https://i1.mifile.cn/a1/pms_1528169648.33824546!34x34.jpg", "https://i1.mifile.cn/a1/pms_1528169655.74869395!34x34.jpg", "https://i1.mifile.cn/a1/pms_1528169658.32594324!34x34.jpg", "https://i1.mifile.cn/a1/pms_1528169661.75251802!34x34.jpg"]
// },
// {
//     "title": "米家扫拖一体机配件",
//     "priceA": "39元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1573377985.3036835!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1573377985.3036835!200x200.jpg"]
// },
// {
//     "title": "小米蓝牙项圈耳机 青春版",
//     "priceA": "169元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1540808799.00378416!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1540808799.00378416!200x200.jpg"]
// },
// {
//     "title": "小米手环3 / 4 通用腕带",
//     "priceA": "19.9元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1560134025.18072453!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560134034.37455769!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560134050.49336003!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560134061.99637802!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560134059.75078528!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1560134025.18072453!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560134034.37455769!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560134050.49336003!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560134061.99637802!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560134059.75078528!200x200.jpg"]
// },
// {
//     "title": "小米手环4",
//     "priceA": "169元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1560151939.71121260!200x200.png", "https://i1.mifile.cn/a1/pms_1561468655.97433141!200x200.png", "https://i1.mifile.cn/a1/pms_1560151939.71121260!200x200.png", "https://i1.mifile.cn/a1/pms_1561468665.94245221!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1560151939.71121260!200x200.png", "https://i1.mifile.cn/a1/pms_1561468655.97433141!200x200.png", "https://i1.mifile.cn/a1/pms_1560151939.71121260!200x200.png", "https://i1.mifile.cn/a1/pms_1561468665.94245221!200x200.png"]
// },
// {
//     "title": "小米小钢炮蓝牙音箱2",
//     "priceA": "129元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1576569004.70669919!200x200.jpg", "https://i1.mifile.cn/a1/pms_1576569008.78126187!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1576569004.70669919!200x200.jpg", "https://i1.mifile.cn/a1/pms_1576569008.78126187!200x200.jpg"]
// },
// {
//     "title": "Redmi 8 3GB+32GB",
//     "priceA": "749元",
//     "priceB": "799元",
//     "src": ["https://i1.mifile.cn/a1/pms_1570878871.18682080!200x200.jpg", "https://i1.mifile.cn/a1/pms_1570878880.65599134!200x200.jpg", "https://i1.mifile.cn/a1/pms_1570878886.62973444!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1570878871.18682080!200x200.jpg", "https://i1.mifile.cn/a1/pms_1570878880.65599134!200x200.jpg", "https://i1.mifile.cn/a1/pms_1570878886.62973444!200x200.jpg"]
// },
// {
//     "title": "Redmi 8 4GB+64GB",
//     "priceA": "799元",
//     "priceB": "899元",
//     "src": ["https://i1.mifile.cn/a1/pms_1570878961.4529640!200x200.jpg", "https://i1.mifile.cn/a1/pms_1570878880.65599134!200x200.jpg", "https://i1.mifile.cn/a1/pms_1570878886.62973444!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1570878961.4529640!200x200.jpg", "https://i1.mifile.cn/a1/pms_1570878880.65599134!200x200.jpg", "https://i1.mifile.cn/a1/pms_1570878886.62973444!200x200.jpg"]
// },
// {
//     "title": "8H乳胶床垫",
//     "priceA": "579~979元",
//     "priceB": "999元",
//     "src": ["https://i1.mifile.cn/a1/pms_1493030484.68163070!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1493030484.68163070!200x200.jpg"]
// },
// {
//     "title": "米家黄麻抗菌护脊床垫",
//     "priceA": "959元",
//     "priceB": "999元",
//     "src": ["https://i1.mifile.cn/a1/pms_1560760700.04549862!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560760706.06077848!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560760706.06077848!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560760706.06077848!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1560760700.04549862!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560760706.06077848!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560760706.06077848!200x200.jpg", "https://i1.mifile.cn/a1/pms_1560760706.06077848!200x200.jpg"]
// },
// {
//     "title": "Redmi Note 8 4GB+64GB",
//     "priceA": "999元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1567422901.77463175!200x200.jpg", "https://i1.mifile.cn/a1/pms_1567422872.89633154!200x200.jpg", "https://i1.mifile.cn/a1/pms_1567422854.51919656!200x200.jpg", "https://i1.mifile.cn/a1/pms_1573823207.49662407!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1567422901.77463175!200x200.jpg", "https://i1.mifile.cn/a1/pms_1567422872.89633154!200x200.jpg", "https://i1.mifile.cn/a1/pms_1567422854.51919656!200x200.jpg", "https://i1.mifile.cn/a1/pms_1573823207.49662407!200x200.jpg"]
// },
// {
//     "title": "Redmi Note 8 6GB+64GB",
//     "priceA": "1099元",
//     "priceB": "1199元",
//     "src": ["https://i1.mifile.cn/a1/pms_1567422141.04018158!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1567422141.04018158!200x200.jpg"]
// },
// {
//     "title": "MIJOY 小魔爪按摩器",
//     "priceA": "9.9元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1554703325.56131440!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1554703325.56131440!200x200.jpg"]
// },
// {
//     "title": "8H多功能青春床垫X1",
//     "priceA": "379~659元",
//     "priceB": "699元",
//     "src": ["https://i1.mifile.cn/a1/pms_1509330056.27762473!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1509330056.27762473!200x200.jpg"]
// },
// {
//     "title": "小米VR一体机 超级玩家版",
//     "priceA": "1799~1999元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1554738222.83651040!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1554738222.83651040!200x200.jpg"]
// },
// {
//     "title": "90分框体旅行箱 24英寸",
//     "priceA": "599元",
//     "priceB": "799元",
//     "src": ["https://i1.mifile.cn/a1/pms_1558060620.12577444!200x200.jpg", "https://i1.mifile.cn/a1/pms_1558060620.12577444!200x200.jpg", "https://i1.mifile.cn/a1/pms_1558060644.34712713!200x200.jpg", "https://i1.mifile.cn/a1/pms_1558060683.66948846!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1558060620.12577444!200x200.jpg", "https://i1.mifile.cn/a1/pms_1558060620.12577444!200x200.jpg", "https://i1.mifile.cn/a1/pms_1558060644.34712713!200x200.jpg", "https://i1.mifile.cn/a1/pms_1558060683.66948846!200x200.jpg"]
// },
// {
//     "title": "小米云服务空间月卡",
//     "priceA": "36元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1529376003.55221212!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1529376003.55221212!200x200.png"]
// },
// {
//     "title": "Redmi K20 Pro 尊享版 8GB+512GB",
//     "priceA": "2799元",
//     "priceB": "2999元",
//     "src": ["https://i1.mifile.cn/a1/pms_1569557787.72868035!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557789.01494142!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557791.42599270!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557793.17784741!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1569557787.72868035!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557789.01494142!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557791.42599270!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557793.17784741!200x200.jpg"]
// },
// {
//     "title": "Redmi K20 Pro 尊享版 8GB+128GB",
//     "priceA": "2699元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1569557726.43469147!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557789.01494142!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557791.42599270!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557793.17784741!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1569557726.43469147!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557789.01494142!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557791.42599270!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569557793.17784741!200x200.jpg"]
// },
// {
//     "title": "小米旅行箱 24英寸",
//     "priceA": "379元",
//     "priceB": "399元",
//     "src": ["https://i1.mifile.cn/a1/pms_1553778518.87814930!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553778528.48143756!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553778471.06227735!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569726103.16556135!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1553778518.87814930!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553778528.48143756!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553778471.06227735!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569726103.16556135!200x200.jpg"]
// },
// {
//     "title": "小米旅行箱 20英寸",
//     "priceA": "279元",
//     "priceB": "299元",
//     "src": ["https://i1.mifile.cn/a1/pms_1553831369.32792610!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553778528.48143756!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553778471.06227735!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569726103.16556135!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1553778518.87814930!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553778528.48143756!200x200.jpg", "https://i1.mifile.cn/a1/pms_1553778471.06227735!200x200.jpg", "https://i1.mifile.cn/a1/pms_1569726103.16556135!200x200.jpg"],
// },
// {
//     "title": "米家扫拖机器人1C 配件",
//     "priceA": "39元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1575513144.23655236!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1575513144.23655236!200x200.jpg"]
// },
// {
//     "title": "米家迷你保温杯",
//     "priceA": "49元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1565313911.01343154!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565313919.13423072!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565313927.51611272!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565313940.89492327!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1565313911.01343154!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565313919.13423072!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565313927.51611272!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565313940.89492327!200x200.jpg"]
// },
// {
//     "title": "米家扫拖一体机配件",
//     "priceA": "39元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1573377977.65592605!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1573377977.65592605!200x200.jpg"]
// },
// {
//     "title": "红米6 云服务体验版（移动4G+）",
//     "priceA": "919元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1530066775.91173694!200x200.jpg", "https://i1.mifile.cn/a1/pms_1530066781.74165673!200x200.jpg", "https://i1.mifile.cn/a1/pms_1530066788.81639909!200x200.jpg", "https://i1.mifile.cn/a1/pms_1530066791.9991333!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1530066775.91173694!200x200.jpg", "https://i1.mifile.cn/a1/pms_1530066781.74165673!200x200.jpg", "https://i1.mifile.cn/a1/pms_1530066788.81639909!200x200.jpg", "https://i1.mifile.cn/a1/pms_1530066791.9991333!200x200.jpg"]
// },
// {
//     "title": "小米简约休闲双肩包",
//     "priceA": "89元",
//     "priceB": "99元",
//     "src": ["https://i1.mifile.cn/a1/pms_1565167260.29039988!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565167266.66429305!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565167272.03476367!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565167276.95616772!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1565167260.29039988!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565167266.66429305!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565167272.03476367!200x200.jpg", "https://i1.mifile.cn/a1/pms_1565167276.95616772!200x200.jpg"]
// },
// {
//     "title": "小米经典商务双肩包 2",
//     "priceA": "89元",
//     "priceB": "99元",
//     "src": ["https://i1.mifile.cn/a1/pms_1564540554.40413377!200x200.jpg", "https://i1.mifile.cn/a1/pms_1564540574.35654673!200x200.jpg", "https://i1.mifile.cn/a1/pms_1564540582.91778782!200x200.jpg", "https://i1.mifile.cn/a1/pms_1564540588.98531884!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1564540554.40413377!200x200.jpg", "https://i1.mifile.cn/a1/pms_1564540574.35654673!200x200.jpg", "https://i1.mifile.cn/a1/pms_1564540582.91778782!200x200.jpg", "https://i1.mifile.cn/a1/pms_1564540588.98531884!200x200.jpg"]
// },
// {
//     "title": "米家石英表",
//     "priceA": "349元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1531448937.8625685!200x200.jpg", "https://i1.mifile.cn/a1/pms_1531448942.06232844!200x200.jpg", "https://i1.mifile.cn/a1/pms_1531448945.25069427!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1531448937.8625685!200x200.jpg", "https://i1.mifile.cn/a1/pms_1531448942.06232844!200x200.jpg", "https://i1.mifile.cn/a1/pms_1531448945.25069427!200x200.jpg"]
// },

// {
//     "title": "小米随身蓝牙音箱",
//     "priceA": "59元",
//     "priceB": "69元",
//     "src": ["https://i1.mifile.cn/a1/T1IdZgB5hv1RXrhCrK!200x200.jpg", "https://i1.mifile.cn/a1/T1._C_BKAv1RXrhCrK!200x200.jpg", "https://i1.mifile.cn/a1/T1LqYgBCWv1RXrhCrK!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/T1IdZgB5hv1RXrhCrK!200x200.jpg", "https://i1.mifile.cn/a1/T1._C_BKAv1RXrhCrK!200x200.jpg", "https://i1.mifile.cn/a1/T1LqYgBCWv1RXrhCrK!200x200.jpg"]
// },
// {
//     "title": "小米便携鼠标",
//     "priceA": "89元",
//     "priceB": "99元",
//     "src": ["https://i1.mifile.cn/a1/pms_1478248566.62624407!200x200.jpg", "https://i1.mifile.cn/a1/pms_1478248566.62624407!200x200.jpg", "https://i1.mifile.cn/a1/pms_1524047797.9265920!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1478248566.62624407!200x200.jpg", "https://i1.mifile.cn/a1/pms_1478248566.62624407!200x200.jpg", "https://i1.mifile.cn/a1/pms_1524047797.9265920!200x200.jpg"]
// },
// {
//     "title": "小米小爱音箱 万能遥控版",
//     "priceA": "149元",
//     "priceB": "199元",
//     "src": ["https://i1.mifile.cn/a1/pms_1553484236.82631752!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1553484236.82631752!200x200.jpg"]
// },
// {
//     "title": "Redmi 8A 3GB+32GB",
//     "priceA": "699元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1571387130.65358635!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574763049.66425763!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574763053.46429660!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1571387130.65358635!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574763049.66425763!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574763053.46429660!200x200.jpg"]
// },
// {
//     "title": "Redmi 8A 4GB+64GB",
//     "priceA": "749元",
//     "priceB": "799元",
//     "src": ["https://i1.mifile.cn/a1/pms_1574763047.24037885!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574763049.66425763!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574763053.46429660!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1574763047.24037885!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574763049.66425763!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574763053.46429660!200x200.jpg"]
// },
// {
//     "title": "Redmi Note 8 6GB+128GB",
//     "priceA": "1299元",
//     "priceB": "1399元",
//     "src": ["https://i1.mifile.cn/a1/pms_1567422745.18398983!200x200.jpg", "https://i1.mifile.cn/a1/pms_1567056628.36151800!200x200.png", "https://i1.mifile.cn/a1/pms_1567056611.68392749!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1567422745.18398983!200x200.jpg", "https://i1.mifile.cn/a1/pms_1567056628.36151800!200x200.png", "https://i1.mifile.cn/a1/pms_1567056611.68392749!200x200.png"]
// },
// {
//     "title": "Redmi Note 8 Pro 6GB+128GB",
//     "priceA": "1399元",
//     "priceB": "1599元",
//     "src": ["https://i1.mifile.cn/a1/pms_1567056652.076330!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1567056652.076330!200x200.png"]
// },
// {
//     "title": "小米手表",
//     "priceA": "1299元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1572930591.38839042!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1572930591.38839042!200x200.jpg"]
// },
// {
//     "title": "米家吸顶灯",
//     "priceA": "229元",
//     "priceB": "249元",
//     "src": ["https://i1.mifile.cn/a1/pms_1571379913.70266745!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1571379913.70266745!200x200.jpg"]
// },
// {
//     "title": "黑鲨游戏手机2 Pro 12GB+512GB",
//     "priceA": "3999元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1564309714.83249915!200x200.jpg", "https://i1.mifile.cn/a1/pms_1564309735.38783613!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1564309714.83249915!200x200.jpg", "https://i1.mifile.cn/a1/pms_1564309735.38783613!200x200.jpg"]
// },
// {
//     "title": "8H乳胶弹簧静音床垫",
//     "priceA": "1549~1849元",
//     "priceB": "1899元",
//     "src": ["https://i1.mifile.cn/a1/pms_1502097740.52392774!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1502097740.52392774!200x200.jpg"]
// },
// {
//     "title": "MIJOY 小魔爪按摩器",
//     "priceA": "9.9元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1554703322.64991595!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1554703322.64991595!200x200.jpg"]
// },
// {
//     "title": "Redmi Note 8 Pro 8GB+128GB 全网通版",
//     "priceA": "1599元",
//     "priceB": "1799元",
//     "src": ["https://i1.mifile.cn/a1/pms_1567055141.91938217!200x200.png", "https://i1.mifile.cn/a1/pms_1567056443.78465286!200x200.png", "https://i1.mifile.cn/a1/pms_1567056472.35382892!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1567055141.91938217!200x200.png", "https://i1.mifile.cn/a1/pms_1567056443.78465286!200x200.png", "https://i1.mifile.cn/a1/pms_1567056472.35382892!200x200.png"]
// },
// {
//     "title": "Redmi Note 8 Pro 6GB+64GB 全网通版",
//     "priceA": "1299元",
//     "priceB": "1399元",
//     "src": ["https://i1.mifile.cn/a1/pms_1567056763.45938146!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1567056763.45938146!200x200.png"]
// },
// {
//     "title": "Redmi Note 8 Pro 8GB+256GB 全网通版",
//     "priceA": "1799元",
//     "priceB": "2099元",
//     "src": ["https://i1.mifile.cn/a1/pms_1571582689.68032829!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1571582689.68032829!200x200.png"]
// },
// {
//     "title": "Redmi7A 全网通版 3GB",
//     "priceA": "599元",
//     "priceB": "799元",
//     "src": ["https://i1.mifile.cn/a1/pms_1558861745.85758071!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1558861745.85758071!200x200.jpg"]
// },
// {
//     "title": "米家扫拖一体机配件",
//     "priceA": "39元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1573377967.46921336!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1573377967.46921336!200x200.jpg"]
// },
// {
//     "title": "Redmi7A 全网通版 2GB+32GB",
//     "priceA": "579元",
//     "priceB": "599元",
//     "src": ["https://i1.mifile.cn/a1/pms_1558858244.10347339!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1558858244.10347339!200x200.jpg"]
// },
// {
//     "title": "黑鲨双向快充移动电源",
//     "priceA": "119元",
//     "priceB": "",
//     "src": ["https://i1.mifile.cn/a1/pms_1574851252.20097606!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574851258.95991697!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574851263.90072104!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1574851252.20097606!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574851258.95991697!200x200.jpg", "https://i1.mifile.cn/a1/pms_1574851263.90072104!200x200.jpg"]
// },
// {
//     "title": "小米CC 9e 全网通版 4GB+128GB",
//     "priceA": "1099元",
//     "priceB": "1499元",
//     "src": ["https://i1.mifile.cn/a1/pms_1562032895.79493637!200x200.png"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1562032895.79493637!200x200.png"]
// },
// {
//     "title": "小米极简都市双肩包 2",
//     "priceA": "139元",
//     "priceB": "149元",
//     "src": ["https://i1.mifile.cn/a1/pms_1571835364.03252863!200x200.jpg"],
//     "imgs": ["https://i1.mifile.cn/a1/pms_1571835364.03252863!200x200.jpg"]
// }]

