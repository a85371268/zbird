define(["easing"],function() {
    function Side(){};
    Side.prototype.init = function(){
        $("#side").load("/html/component/side.html",function(){
            var top = $("#services_box").find("em");
            $(window).scroll(function(){
                if($(this).scrollTop()>500){
                    top.addClass("ac");
                } else{
                    top.removeClass("ac");
                }
            })
            top.on("click",function(){
                $('html').animate({scrollTop:0},700,"easeOutQuad");
            })


            //看看有没有购物信息
            var num = $("#services_box .carnum span")
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
    return new Side();  
});