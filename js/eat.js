;
(function ($) {
    var $w = $(window).width(), //获取窗口的宽度
        len = $("#wrapper>.first").children().size();
    index = 0;
    $("#wrapper").swipeLeft(function () {
        //图片向下切换
        index++;
        if (index >= len - 1) index = len - 1;
        changeImg();

    }).tap(function () {
        if (index == len - 1) location.href = "index1.html";
    })

    function changeImg() {
        $("#wrapper").css({
            "-webkit-transform": "translateX(" + (-$w * index) + "px)",
            "-webkit-transition": "transform .6s ease-in-out"
        });
    }
    var firstScroll = new iScroll("first", {
        onBeforeScrollStart: function (e) {
            var tag = e.target.nodeName.toLowerCase();
            if (tag != "a" && tag != "input" && tag != "textarea" && tag != "select") {
                e.preventDefault();
            }
        }
    })

    var search_4Scroll = new iScroll("search_4", {
        onBeforeScrollStart: function (e) {
            var tag = e.target.nodeName.toLowerCase();
            if (tag != "a" && tag != "input" && tag != "textarea" && tag != "select") {
                e.preventDefault();
            }
        }
    })

    var yzScroll = new iScroll("yz", {
        onBeforeScrollStart: function (e) {
            var tag = e.target.nodeName.toLowerCase();
            if (tag != "a" && tag != "input" && tag != "textarea" && tag != "select") {
                e.preventDefault();
            }
        }
    })
    var list1_detailScroll = new iScroll("list1_detail", {
        onBeforeScrollStart: function (e) {
            var tag = e.target.nodeName.toLowerCase();
            if (tag != "a" && tag != "input" && tag != "textarea" && tag != "select") {
                e.preventDefault();
            }
        }
    })
    var mineScroll = new iScroll("mine", {
        onBeforeScrollStart: function (e) {
            var tag = e.target.nodeName.toLowerCase();
            if (tag != "a" && tag != "input" && tag != "textarea" && tag != "select") {
                e.preventDefault();
            }
        }
    })


    $(".ul1 li").on("click", function () {

        if ($(this).next().is(":hidden")) {
            $(this).next(".main1").show();
        } else {
            $(this).next().hide()
        }

    })

    $("#list_detail1").hide();

    $(".main1 ul li").on("click", function () {
        var names = $(this).attr("title")
        $("#text").val(names)

        $("#list_4").hide()
        $("#list_detail1").show();
    })
    $("#list_detail1 dl").on("click", function () {
        $("#list_4").show()
        $("#list_detail1").hide();
    })


    $("#container").on("click", "a", function () {

        var curPage = $(this).attr("href"),
            index = $(this).index(),
            tit = $(this).attr("title");
        console.log(tit)
            //切换页面
        $(curPage).css({
                "-webkit-transform": "translate3d(0,0,0)"

            }).siblings().css({
                "-webkit-transform": "translate3d(-100%,0,0)",
                "-webkit-transition": "transform .6s"

            })
            //盒子移动
        if ($(this).parent("footer").is("footer")) {
            $("#move").css({
                "-webkit-transform": "translateX(" + 100 * index + "%)"
            })
        }



        changeHead(tit, curPage);
        changeFooter(curPage)



    })

    function changeHead(tit, cur) {
        $("#hd").text(tit); // 改变标题
        $("#header").show();
        $("#header1").hide();
        $("#header").children("a").hide();
        if (cur == "#first" || cur == "#list1_detail") {
            $("#header").hide();
        } else if (cur == "#mine") {
            $("#header1").show();
            $("#header").hide();
        } else if (cur == "#feedback") {
            $("#header").children("a").show();
        }
    }

    function changeFooter(cur) {

        $("#footer").hide();
        $("#footer2").hide();
        $("#footer1").show();

        if (cur == "#first" || cur == "#seachBox" || cur == "#cateGs" || cur == "#mine") {
            $("#footer1").hide();
            $("#footer").show();
        } else if (cur == "#scsp") {
            $("#footer2").show();
            $("#footer").hide();
            $("#footer1").hide();
        }

        if (cur == "#yz") {
            $("#back").attr({
                "href": "#list1_1",
                "title": "孕妇1-2周"
            })

        } else if (cur == "#list1_1" || cur == "#list_1" ||
            cur == "#list1_2" || cur == "#list_2" ||
            cur == "#list1_3" || cur == "#list_3" ||
            cur == "#list1_4" || cur == "#list_4" ||
            cur == "#list_detail" || cur == "#list1_detail") {
            $("#back").attr({
                "href": "#first"

            })
        } else if (cur == "#set") {
            $("#back").attr({
                "href": "#mine",
                "title": "个人中心"
            })
        } else if (cur == "#search_1" || cur == "#search_2" || cur == "#search_3" || cur == "#search_4") {
            $("#back").attr({
                "href": "#seachBox",
                "title": "搜索"
            })
        } else if (cur = "#cateGsBox") {
            $("#back").attr({
                "href": "#cateGs",
                "title": "怪味"


            })

        } else if (cur = "#cateGsCon") {
            $("#back").attr({
                "href": "#cateGsBox",
                "title": "怪味"

            })

        }


    }


})(Zepto);
