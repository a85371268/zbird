define(function() {
    function Banner(){};
    Banner.prototype.init = function(){
        $(".banner").load("/html/component/banner.html",function(){
            $(function(){
                var aLi = $("#banner_box>ul li"),
                    aBtn = $("#banner_box .tabBtn li"),
                    goPrev = $("#goPrev"),
                    goNext = $("#goNext");
                var index = 0;//记录当前到第几张图片了
                //滑动按钮的时候切换图片
                aBtn.on("mouseover",function(){
                        //切换自身class
                        $(this).addClass("ac").siblings().removeClass("ac");
                        //切换图片
                        aLi.eq(index).stop().fadeOut(1000);
                        index = $(this).index();
                        aLi.eq(index).stop().fadeIn(1000);
                    }
                )
                goPrev.on("click",function(){
                        //让这个图片淡出
                        aLi.eq(index).stop().fadeOut(1000);
                        index--;
                        if(index<0)index = aLi.length-1;
                        //改变当前按钮颜色并让图片淡出
                        aBtn.eq(index).addClass("ac").siblings().removeClass("ac");
                        aLi.eq(index).stop().fadeIn(1000);
                    });
                goNext.on("click",function(){
                        //让这个图片淡出
                        aLi.eq(index).stop().fadeOut(1000);
                        index++;
                        if(index>aLi.length-1)index = 0;
                        //改变当前按钮颜色并让图片淡出
                        aBtn.eq(index).addClass("ac").siblings().removeClass("ac");
                        aLi.eq(index).stop().fadeIn(1000);
                    }
                )
                var numer = null;
                function auto(){
                    numer = setInterval(function(){
                        goNext.trigger("click");
                    },3000)
                }
                auto();
                $("#banner_box").hover(function(e){
                    console.log(e.currentTarget);
                    clearInterval(numer);
                    goPrev.addClass("ac");
                    goNext.addClass("ac");
                },function(){
                    clearInterval(numer);
                    auto();
                    goPrev.removeClass("ac");
                    goNext.removeClass("ac");
                }); 
            })
        })
    }
    return new Banner();
});