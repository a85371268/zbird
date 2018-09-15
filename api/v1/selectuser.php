<?php
    header("Access-Control-Allow-Origin:*");
    $username = $_POST["username"];
    mysql_connect("localhost","root","");
    mysql_select_db("zbird");
    mysql_query("set names utf8");
    $sql = "SELECT username FROM user WHERE username='$username'";
    $res = mysql_query($sql);
    $arrs=array();
    while($arr = mysql_fetch_assoc($res)){
        array_push($arrs,$arr);
    }
     $obj=array("data" => $arrs);
    echo json_encode($obj);
    mysql_close();
    
?>