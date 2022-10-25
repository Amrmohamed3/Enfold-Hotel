$(window).scroll(function(){
    
    let scrollTop= $(window).scrollTop()
    console.log(scrollTop)

    if(scrollTop > 200){
        $("#btn1").fadeIn(500)
    }
    else{
        $("#btn1").fadeOut(500)

    }

    $("#btn1").click(function(){
        $("body,html").animate({scrollTop:0},1000)
    })
 
})
    
