require(["config"],function(){
	// 再引入依赖的模块
	require(["jquery","header","footer","nav","side"],function($,header,footer,nav,side){
        header.init();
        footer.init();
        nav.init();
        side.init();

        $(function(){
            //请求数据动态创建页面
            //取传过来的参数值
            var selStr = location.search.split("=")[1];
            var listBox = $("#order_list");
            $.post("http://localhost/api/v1/selectlist.php",{"type":selStr},function(data){
                var dataArr = data.data;
                var str = "";
                $.each(dataArr,function(i,v){
                   var img1 = v.imgs.split(",")[0]; 
                   var img2 = v.imgs.split(",")[2];
                    str+=`
                        <div>
                            <a href="/html/details.html?id=${v.id}" class="order_pics" target="_blank">
                                <img class="ac" src="/images/list/${img1}.jpg">
                                <img src="/images/list/${img2}.jpg">
                            </a>
                            <div class="page_bottom">
                                <a href="/html/details.html?id=${v.id}" class="page_name" target="_blank">${v.name}</a>
                                <div class="page_pri">
                                    <span>￥</span>
                                    <i>${v.price}</i>
                                </div>
                                <div class="page_xiaoshou">
                                    售出<i>${v.buyNum}</i>
                                    评论<em>${v.talks}</em>
                                </div>
                            </div>
                        </div>
                    `
                })
                listBox.append(str);

                var aLi = $("#list_main_nav ul>li");
                var list = $("#order_list div")
                //点击切换小三角
                aLi.click(function(){
                    $(this).toggleClass("ac");
                    $(this).next().toggleClass("ac");
                })
                list.hover(function(){
                    $(this).find(".page_bottom").addClass("ac");
                },function(){
                    $(this).find(".page_bottom").removeClass("ac");
                })
                list.find(".order_pics").hover(function(){
                    $(this).find("img:nth-child(1)").stop().fadeOut(500);
                    $(this).find("img:nth-child(2)").stop().fadeIn(500);
                },function(){
                    $(this).find("img:nth-child(1)").stop().fadeIn(500);
                    $(this).find("img:nth-child(2)").stop().fadeOut(500);
                })
            },"json")
        
            
        })
    })
})