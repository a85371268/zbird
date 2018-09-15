<?php
    header("Access-Control-Allow-Origin:*");
    $id = $_POST["id"];
    mysql_connect("localhost","root","");
    mysql_select_db("zbird");
    mysql_query("set names utf8");
    $sql = "SELECT * FROM list WHERE id='$id'";
    $res = mysql_query($sql);
    $arrs=array();
    while($arr = mysql_fetch_assoc($res)){
        array_push($arrs,$arr);
    }
     $obj=array("data" => $arrs);
    echo json_encode($obj);
    mysql_close();
?>