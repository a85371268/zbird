require(["config"],function(){
    require(["jquery","header","footer","side","cookie"],function($,header,footer,side){
        header.init();
        footer.init();
        side.init();
        $(function(){
            var carPic = $("#car_pic");
            var carUser = $("#car_user");
            //渲染界面时先判断有没有登录
            if($.cookie("userId")!=undefined){
                //已登录的情况
                //看看有没有cookie,
                var str = $.cookie("thisOne");
                
                if(str==undefined){
                    carPic.addClass("ac").siblings().removeClass("ac");
                    carPic.find(".show_btn .on").addClass("ac").siblings().removeClass("ac");
                }else{
                    var arr = JSON.parse(str);
                    //遍历数组动态创建
                    var shangpinStr = "";
                    $.each(arr,function(i,v){
                        shangpinStr += `
                            <div class="shangpin">
                                <div class="shangpin1">
                                    <a href="http://localhost:2333/html/details.html?id=${v.no}">
                                        <img src="/images/list/${v.img}.jpg">
                                        <span>${v.name+"-"+v.class}</span>
                                    </a>
                                </div>
                                <div class="size">${v.size}</div>
                                <div class="num">
                                    <button class="remove1">-</button>
                                    <input type="text" value="${v.num}">
                                    <button class="add1">+</button>
                                </div>
                                <div class="price">${v.price}</div>
                                <div class="do_it"><a href="javascript:;">删除</a></div>
                            </div>
                        `
                    });
                    carUser.addClass("ac").siblings().removeClass("ac");
                    $("#show_usercar").append(shangpinStr);
                }
                //计算总价的方法
                function zongjia(){
                    var price  =0;
                    $.each(arr,function(i,v){
                        price += v.num*v.price;
                    });
                    $("#jiesuan_right").find("span").html(price);
                }
                zongjia();

                //商品数量部分绑点击事件
                var num = $("#show_usercar").find(".shangpin .num");
                //点击左键数量减一
                num.find(".remove1").on("click",function(){
                    var thisNum = $(this).parent().find("input");
                    thisNum.val(thisNum.val()-1);
                    if(thisNum.val()<=1)thisNum.val(1);
                    //存入cookie
                    $(arr).eq($(this).parent().parent().index()-1)[0].num = thisNum.val();
                    $.cookie("thisOne",JSON.stringify(arr));
                    //计算一下总价
                    zongjia();
                })
                //点击右键数量加1
                num.find(".add1").on("click",function(){
                    var thisNum = $(this).parent().find("input");
                    thisNum.val(parseInt(thisNum.val())+1);
                    //存入cookie
                    $(arr).eq($(this).parent().parent().index()-1)[0].num = thisNum.val();
                    $.cookie("thisOne",JSON.stringify(arr));
                    //计算一下总价
                    zongjia();
                })

                //改写的时候最小为1
                num.find("input").blur(function(){
                    if($(this).val()<=1){
                        $(this).val(1);
                    }
                    //存入cookie
                    $(arr).eq($(this).parent().parent().index()-1)[0].num = $(this).val();
                    $.cookie("thisOne",JSON.stringify(arr));
                    //计算一下总价
                    zongjia();
                })
                
                //点击删除删除这个东西
                $("#show_usercar").find(".shangpin .do_it>a").on("click",function(){
                    if(confirm("确定要删除这件商品吗？")){
                        $(this).parent().parent().remove();
                        //在cookie中修改
                        arr.splice($(this).index(),1);
                        var str1=JSON.stringify(arr);
                        $.cookie("thisOne",str1);
                        //计算一下总价
                        zongjia();
                    } 
                })

                //点击清空全删
                $("#clearAll").on("click",function(){
                    if(confirm("确定要删除购物车中的所有商品吗？")){
                        //确定后把cookie删除
                        $.removeCookie("thisOne");
                        //并显示购物车无商品
                        carPic.addClass("ac").siblings().removeClass("ac");
                        carPic.find(".show_btn .on").addClass("ac").siblings().removeClass("ac");
                    }
                })
            }else{
                //未登录情况。
                carPic.addClass("ac").siblings().removeClass("ac");
                carPic.find(".show_btn .off").addClass("ac").siblings().removeClass("ac");
            }

            //改变商品数量
            var num = $("#shangpinNum>input"),
                remove1 = $("#shangpinNum>.remove1"),
                add1 = $("#shangpinNum>.add1");
            //
                
        })
    })
});