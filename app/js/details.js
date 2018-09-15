require(["config"],function(){
    require(["jquery","header","footer","nav","side","cookie"],function($,header,footer,nav,side){
        //调外部方法的方法
        side.init();
        header.init();
        nav.init();
        footer.init();

        $(function(){
            //开数据库取数据渲染界面
            var detaStr = location.search.split("=")[1];
            console.log(detaStr);
            $.post("http://localhost/api/v1/selectdeta.php",{"id":detaStr},function(data){
                console.log(data.data);
                var dataObj = data.data[0];
                $("#s_head_name").html(dataObj.name+"-"+dataObj.class);
                //拼接展示图片
                var mImg1 = dataObj.imgs.split(",")[0],
                    mImg2 = dataObj.imgs.split(",")[2],
                    mImg3 = dataObj.imgs.split(",")[4],
                    bImg1 = dataObj.imgs.split(",")[1],
                    bImg2 = dataObj.imgs.split(",")[3],
                    bImg3 = dataObj.imgs.split(",")[5];
                var mImgStr = `
                    <img src="/images/list/${mImg1}.jpg">
                    <img src="/images/list/${mImg2}.jpg">
                    <img src="/images/list/${mImg3}.jpg">
                `;
                var sImgStr = `
                    <li><img src="/images/list/${mImg1}.jpg"></li>
                    <li><img src="/images/list/${mImg2}.jpg"></li>
                    <li><img src="/images/list/${mImg3}.jpg"></li>
                `;
                var bImgStr = `
                    <img src="/images/list/${bImg1}.jpg">
                    <img src="/images/list/${bImg2}.jpg">
                    <img src="/images/list/${bImg3}.jpg">
                `;
                $("head").find("title").html(dataObj.name+"-"+dataObj.class+"-钻石小鸟官网");
                $("#show_ring_pic").prepend(mImgStr);
                $("#show_ring_ul").append(sImgStr);
                $("#change_big").append(bImgStr);
                $("#show_ring_h4").html(dataObj.name);
                var rightStr = `
                    <h4 id="show_ring_h4">${dataObj.name}</h4>
                    <div class="pri">
                        <em>
                            <span>价格</span>
                            <i>￥</i>
                            <b>${dataObj.price}</b>
                        </em>
                        <span>
                            <i>售出</i>
                            <b>${dataObj.buyNum}</b>
                        </span>
                        <span>
                            <i>评论</i>
                            <b>${dataObj.talks}</b>
                        </span>
                    </div>
                    <div class="mess" id="show_ring_mess">
                        <div class="name">
                            <i>品名</i>
                            <span id="show_ring_mess_name">${dataObj.class}</span>
                        </div>
                        <div class="material">
                            <i>材质</i>
                            <span id="show_ring_mess_material">${dataObj.material}</span>
                        </div>
                        <div class="size">
                            <i>手寸</i>
                            <span id="show_ring_mess_size">${dataObj.size}</span>
                            <a href="javascript:;">如何测手寸</a>
                        </div>
                        <div class="stone">
                            <i>钻石</i>
                            <span id="show_ring_mess_stone">${dataObj.stone}</span>
                        </div>
                        <div class="give">
                            <i>配送</i>
                            <span>2018-09-19</span>
                            <b>本商品支持货到付款</b>
                        </div>
                    </div>
                `;
                $("#show_ring_right").prepend(rightStr);
                $("#option_nav_talk").html(dataObj.talks);
                //点击购物车跳转
                $("#gotoCar").on("click",function(){
                    //把商品的名称，类别，图片,价格存入cookie
                    //看看有没有cookie
                    var shangpin = $.cookie("thisOne");
                    if(shangpin ==undefined){
                        //没有这个cookie
                        var arr = [];
                    }else{
                        //有的话把这个cookie的值放入数组
                        var arr =JSON.parse($.cookie("thisOne")) ;
                    }
                    var isS=true;
                    //遍历这个数组，看看当前点击的商品数组里面有没有
                    $.each(arr,function(i,v){
                        if(v.no===dataObj.id){
                            //有这个商品了，数量加加
                            v.num++;
                            $.cookie("thisOne",JSON.stringify(arr));
                            isS= false
                        }else{
                            isS= true
                        }
                    })
                    console.log(isS)
                    if(isS){
                        //没有的话创建一个对象
                        var obj = {
                            no:dataObj.id,
                            name:dataObj.name,
                            price:dataObj.price,
                            size:dataObj.size,
                            img:mImg1,
                            class:dataObj.class,
                            num:1
                        };
                        //把这个对象放入数组中
                        arr.push(obj);
                        //储存cookie
                        $.cookie("thisOne",JSON.stringify(arr));
                    }
                    
                    //跳转
                     window.location.href = "/html/shopCar.html?id="+dataObj.id;
                })

                var showRingPic = $("#show_ring_pic img"),
                    showRingUl = $("#show_ring_ul li"),
                    bigPic = $("#change_big"),
                    index = 0;//记录图片现在的数
                showRingUl.on("mouseenter",function(){
                    //移入的时候之前的图片淡出
                    showRingPic.eq(index).stop().fadeOut(800);
                    $(this).addClass("ac").siblings().removeClass("ac");
                    //现在的图片淡入
                    index = $(this).index();
                    bigPic.find("img").eq(index).addClass("ac").siblings().removeClass("ac");
                    showRingPic.eq(index).stop().fadeIn(800);
                })
                //页面加载完之后先触发一次第一张图片的事件
                showRingUl.eq(0).trigger("mouseenter");
                //鼠标移入大图让span显示并随鼠标移动
                var span = $("#biger")
                $("#show_ring_pic").on("mousemove",function(e){
                    //显示span
                    span.addClass("ac");
                    bigPic.addClass("ac");
                    var left = e.pageX - $(this).offset().left - span.width()/2,
                        top = e.pageY - $(this).offset().top - span.height()/2;

                    //判断边框
                    if(left<0){left = 0}
                    if(top<0){top = 0}
                    if(left>$(this).width()-span.width())left = $(this).width()-span.width();
                    if(top>$(this).height()-span.height())top = $(this).height()-span.height();
                    //赋值
                    span.css({
                        "cursor":"crosshair",
                        "left":left+"px",
                        "top":top+"px"
                    })
                    bigPic.find("img").css({
                        "left":-2*left+"px",
                        "top":-2*top+"px"
                    })
                    
                })
                $("#show_ring_pic").on("mouseleave",function(){
                    span.removeClass("ac");
                    bigPic.removeClass("ac");
                })

                //处理小导航
                var nav = $("#option_nav"),
                    tab = $("#option_tab");
                tab.find("a").on("click",function(){
                    $(this).addClass("ac").siblings().removeClass("ac");
                })
                //鼠标滚到一定程度的时候让导航吸顶
                $(window).on("scroll",function(){
                    if($(window).scrollTop()>880){
                        nav.css({
                            "position": "fixed",
                            "top": "0",
                            "width":"100%",
                            "background": "rgba(255,232,232,0.4)",
                            "border":"none",
                            "border-bottom":"rgba(221,221,221,0.5)",
                            "z-index":"10"
                        })
                    }else{
                        nav.css({
                            "position": "",
                            "top": "0",
                            "width":"100%",
                            "background": "",
                            "border":"none",
                            "border-top": "1px solid"
                        })
                    }
                })

                //处理下半部分小导航
                var serTab = $("#server_tab");
                serTab.find("a").on("click",function(){
                    $(this).addClass("ac").siblings().removeClass("ac");
                })
                
            },"json")


            
            
        })
    })
})