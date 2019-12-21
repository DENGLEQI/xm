$(() => {
    $(".navtab-link").eq(0).on("click", function () {
        // $(this).css("color", "orange").siblings().css("color", "")
        console.log(this);
        $(".loginbox").css("display", "block");
        $(".right").css("display", "none");
        $(this).css("color", "#ff6700");
        $(".navtab-link").eq(1).css("color", "")
    })
    $(".navtab-link").eq(1).on("click", function () {
        console.log(this);
        $(".loginbox").css("display", "none");
        $(".right").css("display", "block");
        $(this).css("color", "#ff6700");
        $(".navtab-link").eq(0).css("color", "")
    })
    $("#login-button").on("click", function () {
        let username = $("#username").val();
        let password = $("#password").val();
        // console.log(username, password);
        $.ajax({
            type: "post",
            url: "../sever/login.php",
            data: `username=${username}&password=${password}`,
            dataType: "json",
            success: function (response) {
                console.log(response);
                if (response.status == "success") {
                    window.location.href = "http://127.0.0.1/xiaomi/home%20page/html/xiaomi.html";
                } else {
                    alert(response.msg)
                }
                // { "status": "error", "msg": "\u5bc6\u7801\u9519\u8bef!", "data": "" }
            }
        });
    })
})