require.config({
	baseUrl: "/",
	paths: {
        //此处配置不用写后缀名
		"jquery": "libs/jquery-1.12.4",
		"template": "libs/template-web",
		"url": "module/url",
        "header":"module/header",
        "banner":"module/banner",
        "footer":"module/footer",
        "nav":"module/nav",
        "side":"module/side",
        "easing":"libs/jquery.easing.1.3",
        "md5":"libs/md5",
        "cookie":"libs/jquery.cookie"
	},
	shim: {
        header:{
            deps:["jquery"]
        },
        banner:{
            deps:["jquery"]
        },
        footer:{
            deps:["jquery"]
        },
        nav:{
            deps:["jquery"]
        },
        side:{
            deps:["jquery"]
        },
        easing:{
            deps:["jquery"]
        },
        cookie:{
            deps:["jquery"]
        }
        /*,
		tab:{
			deps:["jquery","toast"]
		}*/
	}
})