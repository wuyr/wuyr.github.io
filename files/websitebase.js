$(function(){
    var _w = parseInt($(window).width());
        $(".table img").each(function(index, el){
        var img = $(this);
        var realWidth;
        var realHeight;
        $("<img/>").attr("src", $(img).attr("src")).load(function() {
        realWidth = this.width;
        realHeight = this.height;
        if(realWidth>=realHeight){
            $(".table td").eq(index).addClass('heng')
        }
        else{
            $(".table td").eq(index).removeClass('heng')
        }
        });
        });


    // var folder=window.location.href;
    // var f=new Array();
    // f=folder.split(".");
    // f=f[0].split("//");
    // var appName = f[1];
    // var urls='http://www.bmob.cn/site/addPv';
    // $.ajax({
    //     type: 'get',
    //     url: urls,
    //     data:{'name':appName},
    //     dataType: 'json',
    //     success: function (response) {

    //     }
    // });
})

