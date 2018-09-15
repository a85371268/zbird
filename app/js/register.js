//首先引入config
require(["config"],function(){
	// 再引入依赖的模块
	require(["jquery","header","footer","side","md5"],function($,header,footer,side){
        header.init();
        footer.init();
        side.init();
        $(function(){
            var username = $("#username"),
                span1 = $("#span1"),
                password1 = $("#password1"),
                span2 = $("#span2"),
                password2 = $("#password2"),
                span3 = $("#span3"),
                phone = $("#phone"),
                span4 = $("#span4"),
                checkBox = $("#reg_checkbox"),
                regBtn = $("#regBtn");
            var arr = [0,0,0,0];//记录正则验证状态
            username.blur(function(){
                var reg =/^[a-zA-Z0-9]{4,16}$/;
                var str = username.val();
                if(str===""){
                    span1.addClass("ac");
                    span1.html("用户名不能为空，请填写用户名");
                    span1.css({"color":"#f16d63"});
                    arr.splice(0,1,0);
                }else if(reg.test(str)){
                    //正则通过后则看数据库有没有这个用户名
                    $.post("http://localhost/api/v1/selectuser.php",{"username":username.val()},function(data){
                        if(data.data ==""){
                            span1.addClass("ac");
                            span1.html("此用户名可用");
                            span1.css({"color":"green"});
                            arr.splice(0,1,1);
                        }else{
                            span1.addClass("ac");
                            span1.html("此用户名已存在,请重新输入");
                            span1.css({"color":"#f16d63"});
                            arr.splice(0,1,0);
                        }
                    },"json")
                }else{
                    span1.addClass("ac");
                    span1.html("用户名为4-16位的大小写字母和数字组合");
                    span1.css({"color":"#f16d63"});
                    arr.splice(0,1,0);
                }   
            })
            password1.blur(function(){
                var reg =/^[a-zA-Z0-9_-]{6,20}$/;
                var str = password1.val();
                if(str===""){
                    span2.addClass("ac");
                    span2.html("密码不能为空，请填写密码");
                    span2.css({"color":"#f16d63"});
                    arr.splice(1,1,0);
                }else if(reg.test(str)){
                    span2.addClass("ac");
                    span2.html("这是一个有效的密码");
                    span2.css({"color":"green"});
                    arr.splice(1,1,1);
                }else{
                    span2.addClass("ac");
                    span2.html("密码为6-20位大小写字母、数字及减号、下划线组合");
                    span2.css({"color":"#f16d63"});
                    arr.splice(1,1,0);
                }  
            })
            password2.blur(function(){
                var str = password2.val();
                if(str===""){
                    span3.addClass("ac");
                    span3.html("确认密码不能为空，请重新输入");
                    span3.css({"color":"#f16d63"});
                    arr.splice(2,1,0);
                }else if(str===password1.val()){
                    span3.addClass("ac");
                    span3.html("密码确认成功");
                    span3.css({"color":"green"});
                    arr.splice(2,1,1);
                }else{
                    span3.addClass("ac");
                    span3.html("两次密码不一致，请重新输入");
                    span3.css({"color":"#f16d63"});
                    arr.splice(2,1,0);
                }
            })
            phone.blur(function(){
                var reg =/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
                var str = phone.val();
                if(str===""){
                    span4.addClass("ac");
                    span4.html("手机号码不能为空");
                    span4.css({"color":"#f16d63"});
                    arr.splice(3,1,0);
                }else if(reg.test(str)){
                    span4.addClass("ac");
                    span4.html("手机号码验证通过");
                    span4.css({"color":"green"});
                    arr.splice(3,1,1);
                }else{
                    span4.addClass("ac");
                    span4.html("手机号码不正确，请输入正确的手机号码");
                    span4.css({"color":"#f16d63"});
                    arr.splice(3,1,0);
                }  
            })
            var flag = null;
            regBtn.on("click",function(){
                flag = arr.every(function(value,index){
                   return value == 1;
                })
                if(flag){
                    //所有验证都通过后把用户信息插入数据库
                    //成功返回code=1，失败返回code=0
                    if(checkBox[0].checked){
                        $.post("http://localhost/api/v1/adduser.php",{
                            "username":username.val(),
                            "password":hex_md5(password1.val()),
                            "phone":phone.val()
                        },function(data){
                            //插入数据成功后跳转界面，不成功提示用户
                            if(data.code==1){
                                window.location.href = "/html/signin.html";
                            }else if(data.code==0){
                                span4.addClass("ac");
                                span4.html("注册失败，请稍后重试");
                                span4.css({"color":"#f16d63"});
                            }
                        },"json")
                    }else{
                        span4.addClass("ac");
                        span4.html("请勾选《钻石小鸟用户服务协议》");
                        span4.css({"color":"#f16d63"});
                    }
                }
            })
        })
    })
})