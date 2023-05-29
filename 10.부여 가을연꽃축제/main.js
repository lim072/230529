$(".gnb>ul>li").on("mouseover",function(){
    $(this).find("ul.sub").stop().slideDown();
})
$(".gnb>ul>li").on("mouseleave",function(){
    $(this).find("ul.sub").stop().slideUp();
})

$(".notice>ul>li").eq(0).on("click", function(){
    $('.popup , .popupBg').css('display','block')
})
$("button").eq(0).on("click", function(){
    $('.popup , .popupBg').css('display','none')
})
    

$('#slide .frame li').eq(0).siblings().hide();


let slideIndex = 0;
setInterval(function () {
    if (slideIndex < 2){
        slideIndex++;
    } else {
        slideIndex = 0;
    } 
    $('#slide .frame li').eq(slideIndex).siblings().fadeOut(1000);
    $('#slide .frame li').eq(slideIndex).fadeIn(1000);
}, 3000)