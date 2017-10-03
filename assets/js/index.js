
var dataCode = new Array();
dataCode=imgstate.dataCode;
//console.log(dataCode,'dataCode');
var dialogname,dialogtext,dialogdes,dialogtips,dialogimgurl,dialogcode;
$(".zimei-container li").click(function(){

    var indexNum = $(".zimei-container li").index(this);
    //console.log(indexNum,"123456");
    dialogname=dataCode[indexNum].name;
    dialogimgurl=dataCode[indexNum].imgurl;
    dialogcode=dataCode[indexNum].code;
    $(".zmiti-china-dialog").show();
    $(".zmiti-china-dialog-tit").text(dialogname);
    $(".zmiti-china-dialog-imgs").attr("src",dialogimgurl);
    $(".zmiti-china-dialog-code span").text(dialogcode);

    var winH=$(window).height();
    var dialogheight=$(".zmiti-china-dialog-inner").height();
    var digTop=parseInt((winH-dialogheight)/2);
    $(".zmiti-china-dialog-inner").css("top",digTop);
})
$(".zimei-container li a").click(function(e){
    e.preventDefault();
})

$(".zmiti-china-close").click(function(){
    $(".zmiti-china-dialog").hide();
})