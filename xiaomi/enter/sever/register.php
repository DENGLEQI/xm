<?php
$db = mysqli_connect("127.0.0.1","root","","yz");
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$phone = $_REQUEST["phone"];
// echo $username.$password.$phone;

$sql = "INSERT INTO `userlist` ( `username`, `password`, `phone`) VALUES ('$username', '$password', '$phone')";
$resulet = mysqli_query($db,$sql);

// print_r($resulet);
$data = array("status"=>"","msg"=>"","data"=>"");
if($resulet){
  $data["status"] = "success";
  $data["msg"] = "恭喜你，注册成功";
}else{
  $data["status"] = "error";
  $data["msg"] = "抱歉，用户名或者手机号已经被注册了!";
}
echo json_encode($data,true)
?>