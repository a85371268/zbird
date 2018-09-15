//定义header模块儿
define(["cookie"],function() {
    function Header(){};
    Header.prototype.init = function(){
        //1.加载header.html页面
        $("header").load("/html/component/header.html",function(){
            //2.加载完的回调中写header的所有交互  
            //界面加载完后查看有没有cookie，有的话更改右上角
            var logBtn = $("#log_btn"),
                regBtn = $("#reg_btn");
            if($.cookie("userId")!=undefined){
                logBtn.html($.cookie("userName"));
                logBtn.css({
                    "text-decoration": "underline"
                });
                logBtn[0].href = "/html/shopCar.html";
                regBtn.html("退出登录");
                //点击退出登录后删除cookie回主页
                regBtn.on("click",function(){
                    $.removeCookie("userName");
                    $.removeCookie("userId");
                    regBtn[0].href = "http://localhost:2333";
                })
            }else{
                //没有cookie的话重置所有东西
                logBtn.css({
                    "text-decoration": "none"
                });
                logBtn[0].href = "/html/signin.html";
                logBtn.html("登录");
                regBtn.html("注册");
                regBtn[0].href = "/html/register.html";
            }
            $("#go_car1").on("click",function(){
                window.location.href = "/html/shopCar.html";
            })
            
            //看看有没有购物信息
            var num = $("#go_car1 span")
            if($.cookie("thisOne")==undefined){
                //没有购物信息
                num.html("0");
            }else{
                //有购物信息的话就显示购物总数量
                var str = $.cookie("thisOne");
                var arr = JSON.parse(str);
                var allnum = 0;
                $.each(arr,function(i,v){
                    allnum += parseInt(v.num);
                });
                num.html(allnum);
            }
            
        });
        
    }
    

    //记得把实例化return出去
    return new Header();
});