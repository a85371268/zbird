<?php
    header("Access-Control-Allow-Origin:*");
    $username = $_POST["username"];
    mysql_connect("localhost","root","");
    mysql_select_db("zbird");
    mysql_query("set names utf8");
    $sql = "SELECT * FROM user WHERE username='$username'";
    $res = mysql_query($sql);
    $newarr = array();
    while($arr = mysql_fetch_assoc($res)){
        array_push($newarr,$arr);
    }
    $obj=array("data" => $newarr);
    echo json_encode($obj);
?>