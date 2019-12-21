$(() => {
    // 发送网络请求拿到数据  调用class创建实例对象
    $.get({
        url: "../sever/middle1.php",
        dataType: "json",
        success(data) {
            let manager = new Nave(data, "#box1");
            manager.init();
        }
    })
    $.get({
        url: "../sever/middle2.php",
        dataType: "json",
        success(data) {
            let manager = new Nave(data, "#box2");
            manager.init();
        }
    })
    $.get({
        url: "../sever/middle3.php",
        dataType: "json",
        success(data) {
            let manager = new Nave(data, "#box3");
            manager.init();
        }
    })
    $.get({
        url: "../sever/middle4.php",
        dataType: "json",
        success(data) {
            let manager = new Nave(data, "#box4");
            manager.init();
        }
    })
    $.get({
        url: "../sever/middle5.php",
        dataType: "json",
        success(data) {
            let manager = new Nave(data, "#box5");
            manager.init();
        }
    })
})