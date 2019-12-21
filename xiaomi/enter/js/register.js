$(() => {

    // 用户名
    $("#usernameID").blur(function () {
        let reg = /^[a-zA-Z]{2,6}$/;
        let text = $.trim($(this).val());
        if (text.length == 0) {
            $(this).addClass("red");
            $(this).next().text("用户名不能为空！");
        } else if (!reg.test(text)) {
            $(this).addClass("red");
            $(this).next().text("用户名不规范！");
        } else {
            $(this).removeClass("red");
            $(this).next().text("");
        }
    })

    // 手机号
    $("#phoneID").blur(function () {
        let reg = /^1[3-9]\d{9}$/;
        let text = $.trim($(this).val());
        if (text.length == 0) {
            $(this).addClass("red");
            $(this).next().text("手机号不能为空！");
        } else if (!reg.test(text)) {
            $(this).addClass("red");
            $(this).next().text("请输入正确的手机号码！");
        } else {
            $(this).removeClass("red");
            $(this).next().text("");
        }
    })

    // 密码
    $("#passwordA").blur(function () {
        let password = /^[0-9a-zA-Z]{3,6}$/;
        let text = $.trim($(this).val());
        if (text.length == 0) {
            $(this).addClass("red");
            $(this).next().text("密码不能为空！");
        } else if (!password.test(text)) {
            $(this).addClass("red");
            $(this).next().text("您输入的密码不符合规范！");
        } else {
            $(this).removeClass("red");
            $(this).next().text("");
        }
    })

    // 确认密码
    $("#passwordB").blur(function () {
        if ($.trim($(this).val()) != $.trim($("#passwordA").val())) {
            $(this).addClass("red");
            $(this).next().text("您输入的密码不符合规范！");
        } else {
            $(this).removeClass("red");
            $(this).next().text("");
        }
    })

    /* 实现图形验证码 */
    let captcha1 = new Captcha({
        dotNum: 10,//点的数量
        lineNum: 10,//线条数量
        fontSize: 40,//字体大小
        length: 4,//验证码的长度
    });
    let code;
    captcha1.draw(document.querySelector('#captcha'), r => {
        code = r.toUpperCase();
    });


    $("#imageCode").blur(function () {
        if ($.trim($(this).val()).toUpperCase() != code) {
            $(this).addClass("red");
            $(this).next().text("请输入正确的图形验证码！");
        } else {
            $(this).removeClass("red");
            $(this).next().text("");
        }
    })

    $("#registerBtn").click(function () {
        $("#usernameID,#phoneID,#imageCode,#passwordA,#passwordB").trigger("blur");
        if ($(".red").length != 0) {
            alert("请输入正确的注册信息");
        } else if ($("#protocol").is(":checked") == false) {
            alert("请阅读并同意用户协议！！！");
        } else {
            $.ajax({
                type: "post",
                url: "../sever/register.php",
                data: `username=${$("#usernameID").val()}&password=${$("#passwordA").val()}&phone=${$("#phoneID").val()}`,
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    if (response.status == "success") {
                        window.location.href = "http://127.0.0.1/xiaomi/enter/html/enter.html";
                    } else {
                        alert(response.msg)
                    }
                }
            });
        }
    })
})