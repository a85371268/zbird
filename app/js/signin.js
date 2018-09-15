//首先引入config
require(["config"],function(){
	// 再引入依赖的模块
	require(["jquery","header","footer","side","cookie","md5"],function($,header,footer,side){
        header.init();
        side.init();
        footer.init();
        $(function(){
            var signBtn = $("#sign_btn"),
                username = $("#sign_username"),
                password = $("#sign_password"),
                span = $("#sign_span");

            signBtn.on("click",function(){
                var nameStr = username.val(),
                    passStr = hex_md5(password.val());
                //连接数据库查找用户名和密码是否匹配
                $.post("http://localhost/api/v1/signselect.php",{
                    "username":nameStr
                },function(data){
                    if(data.data == ""){
                        span.addClass("ac");
                        span.css({"color":"#f16d63"});
                    }else{
                        if(data.data[0].password==passStr){
                            window.location.href = "/index.html"
                            //用户名密码都正确后把用户id和name存入cookie备用
                            $.cookie("userId",data.data[0].id,{path:"/"});
                            $.cookie("userName",data.data[0].username,{path:"/"});
                        }else{
                            span.addClass("ac");
                            span.css({"color":"#f16d63"});
                        }
                    }

                },"json")
            })
        })
    })
})