<?php
    header("Access-Control-Allow-Origin:*");
    $username = $_POST["username"];
    $password = $_POST["password"];
    $phone = $_POST["phone"];
    mysql_connect("localhost","root","");
    mysql_select_db("zbird");
    mysql_query("set names utf8");
    $sql = "INSERT INTO `user` (`username`, `password`, `phone`) VALUES ('$username', '$password', '$phone')";
    $isSucc = mysql_query($sql);
    if($isSucc){
        echo '{"code":1}';
    }else{
        echo '{"code":0}';
    }
    mysql_close();
?>