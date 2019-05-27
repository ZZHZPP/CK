lazyLoadInit({
    coverColor:"white",
    offsetBottom:0,
    offsetTopm:0,
    showTime:1000,
});

// 判断滚轮滚动，显示不同样式导航
$(document).ready(function() {
    $(window).scroll(function(){
        var scrollTopPos=$(document).scrollTop();
        if(scrollTopPos>0){
            $("#maiBgColorFixed").show();
            $("#maiBgColor").hide();
        }else{
            $("#maiBgColorFixed").hide();
            $("#maiBgColor").show();
        }
    });
});


//判断浏览器是否出现滚动条
$(function () {
    if (window.screen.availHeight >= document.body.clientHeight) {
        $("footer").css({"position":"fixed","bottom":"0"});
    } else {
        $("footer").css("position","relative");
    }
});



