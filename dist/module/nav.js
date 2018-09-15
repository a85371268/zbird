define(function(){
    function Nav(){};
    Nav.prototype.init=function(){
        //引入nav
        $("#nav").load("/html/component/nav.html",function(){
            var aLi = $("#s_nav li"),
                aLia = $("#s_nav li>a"),
                liRight=$("#s_nav_right li>a"),
                tanchu = $(".tanchu"),
                index = 0;
            aLia.hover(function(){
                $(this).addClass("ac").parent().siblings().find("a").removeClass("ac");
                index = $(this).parent().index();
                if(index!=0){
                    tanchu.eq(index).addClass("ac");
                }
            },function(){
                $(this).removeClass("ac");
                tanchu.removeClass("ac");
            });
            liRight.hover(function(){
                $(this).addClass("ac").parent().siblings().find("a").removeClass("ac");
            },function(){
                $(this).removeClass("ac");
            })
            tanchu.hover(function(){
                $(this).addClass("ac");
                aLi.eq(index).find("a").addClass("ac");
            },function(){
                $(this).removeClass("ac");
                aLi.eq(index).find("a").removeClass("ac");
            })

        });
    }
    return new Nav();
});