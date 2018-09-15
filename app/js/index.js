//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//这儿写index页面的业务逻辑代码
//首先引入config
require(["config"],function(){
	// 再引入依赖的模块
	require(["jquery","header","banner","footer","nav","side"],function($,header,banner,footer,nav,side){
        //调外部方法的方法
        side.init();
        header.init();
        nav.init();
        banner.init();
        footer.init();
         $(function(){
            //pics部分
            //记录当前图片张数
            (function(){
                var index = 0;
                var aPic = $(".ring_diy div");
                setInterval(function(){
                    //当前图片淡出
                    aPic.eq(index).stop().fadeOut(1000);
                    index++;
                    if(index>aPic.length-1)index=0;
                    aPic.eq(index).stop().fadeIn(1000);
                },2000)
            })();
            

            //product部分
            (function(){
                var box = $(".product>div"),
                    aLi = $(".product>.product_nav ul li"),
                    aPro = $(".product .product_pic");
                var index = 0;//记录当前图片张数
                //鼠标划入的时候显示选项卡
                aLi.on("mouseover",function(){
                    $(this).addClass("ac").siblings().removeClass("ac");
                    //切换图片
                    aPro.eq(index).addClass("ac").siblings().removeClass("ac");
                    index = $(this).index();
                    aPro.eq(index).addClass("ac").siblings().removeClass("ac");;
                })
                //轮播效果
                var timer = null;
                function auto(){
                    timer = setInterval(function(){
                        index++;
                        if(index>aPro.length-1)index = 0;
                        aLi.eq(index).addClass("ac").siblings().removeClass("ac");
                        aPro.eq(index).addClass("ac").siblings().removeClass("ac");
                    },2000)
                }
                auto();
                box.hover(function(){
                    clearInterval(timer);
                },function(){
                    clearInterval(timer);
                    auto();
                })
            })();

            //recommend部分
            (function(){
                var ul = $("#recommend_ul"),
                    aLi = $("#recommend_ul li"),
                    prev = $("#rings_prev"),
                    next = $("#rings_next"),
                    liWidth = aLi.eq(0).outerWidth(),
                    index = 0,
                    len=aLi.size(),
                    flag=false;
                aLi.hover(function(){
                        $(this).animate({
                            "margin-top":"-14px"
                        },400)
                    } ,function(){
                        $(this).animate({
                            "margin-top":"0px"
                        },400)
                    }
                )
                prev.on("click",function(){
                    if(!flag){
                        flag=true;
                        next.removeClass("off");
                        index--;
                        if(index<=0){
                            index=0;
                            prev.addClass("off");
                        }
                        ul.animate({"left":-index*liWidth},function(){
                            flag=false;
                        });
                        // console.log(index);
                    }
                    
                })
                next.on("click",function(){
                    if(!flag){
                        flag = true;
                        prev.removeClass("off");
                        index++;
                        if(index>=len-5){
                            index=len-5;
                            next.addClass("off");
                        }
                        ul.animate({"left":-index*liWidth},function(){
                            flag = false;
                        });
                    }
                    
                })
            })();

            //province部分
            (function(){
                var province_spans = $("#province>i");
                var store_i = $("#store>i");
                var store_show = $("#store_show")
                
                //让上海先被触发一下
                
                // $.post("http://localhost/api/v1/province.php",{id:1},function(dataes){
                //     console.log(dataes.data);
                //     $.each(dataes.data,function(i,val){        
                //         store_i.append($(`<span data-id="${val.id}">${val.store}体验中心</span>`));
                //     });
                //     $("#store>i>span:first").addClass("ac");
                //     store_i.find("span").on("mouseenter",function(){
                //         $(this).addClass("ac").siblings().removeClass("ac");
                //     })
                // },"json")
                
                //去数据库请求数据放入province的i标签中
                $.post("http://localhost/api/v1/province.php",{id:0},function(data){
                    var arr = data.data;
                    $.each(arr,function(i,val){        
                        province_spans.append($(`<span data-id="${val.id}">${val.store}</span>`));
                    });
                    $("#province>i>span:first").addClass("ac").trigger("click");

                    province_spans.find("span").on("mouseenter",function(){
                        store_i.html("");
                        $(this).addClass("ac").siblings().removeClass("ac");
                        var id=$(this).attr("data-id");
                        $.post("http://localhost/api/v1/province.php",{id:id},function(datas){
                            $.each(datas.data,function(i,val){        
                                store_i.append($(`<span data-id="${val.id}">${val.store}体验中心</span>`));
                            });
                            $("#store>i>span:first").addClass("ac");
                            //鼠标移上门店，显示门店详情
                            store_i.find("span").on("mouseenter",function(){
                                $(this).addClass("ac").siblings().removeClass("ac");
                                var stoId = $(this).attr("data-id");
                                //让详情中的h4文字改变
                                store_show.find("h2").html($(this).html());
                                $.post("http://localhost/api/v1/store.php",{id:stoId},function(data){
                                    var arr = data.data;
                                    if(arr.length!=0){
                                        store_show.find("div").html(`${arr[0].address}<br>${arr[0].time}<br>${arr[0].phone}`)
                                    }  
                                },"json")
                            })
                        },"json");
                    })
                    $("#province>i>span:first").trigger("mouseenter");
                    
                },"json")
            })();
        })
    }) 
})