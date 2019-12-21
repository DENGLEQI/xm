<?php
    header('Content-Type:text/html;charset=utf-8');
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $db = mysqli_connect("127.0.0.1","root","","yz");  
    // 检查用户名
    $sql = "SELECT * FROM userList WHERE username = '$username'";
    $result = mysqli_query($db,$sql);
    // print_r($result);
    // print_r(mysqli_fetch_array($result));
    $data = array("status"=>"","msg"=>"","data"=>"");
    if(mysqli_num_rows($result) == "0"){
        $data["status"] = "error";
        $data["msg"] = "该用户名不存在!";
    }else{
        $a = mysqli_fetch_array($result);
        if($a["password"] !== $password){
            $data["status"] = "error";
            $data["msg"] = "密码错误!";
            // print_r(mysqli_fetch_array($result));
        }else{
            $data["status"] = "success";
            $data["msg"] = "登入成功!";
        }
        // print_r($a);
    }
    echo json_encode($data,true);
?>