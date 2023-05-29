$(".gnb>ul>li").on("mouseover",function(){
    $(this).find("ul.sub").stop().slideDown();
})
$(".gnb>ul>li").on("mouseleave",function(){
    $(this).find("ul.sub").stop().slideUp();
})
$(".notice>ul>li").eq(0).on("click", function(){
    $('.popup , .popup_bg').css('display','block')
})
$("button").eq(0).on("click", function(){
    $('.popup , .popup_bg').css('display','none')
})

setInterval(function(){
    $('#slide .frame').animate({'left' : '-750px'}, function(){
        $('#slide .frame>li').eq(0).appendTo('#slide .frame')
        $('#slide .frame').css({'left' : 0})
    })
},3000)