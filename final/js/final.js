// var clicked = false;

// $("#bt").click(function(){
//     if(!clicked){
//     $(".main").animate({left:'0px'})
//     clicked=true;
// }
//     else{
//     $(".main").animate({left:'-320px'})
//     clicked=false;
// }

// })

// $("#red").click(function(){
//     $(".screen").css({color:'red'})
//     $("i").css({backgroundColor:'red'})
    
// })
// $("#blue").click(function(){
//     $(".screen").css({color:'blue'})
//     $("i").css({backgroundColor:'blue'})

// })
// $("#green").click(function(){
//     $(".screen").css({color:'green'})
//     $("i").css({backgroundColor:'green'})

// })
// $("#btn").click(function(){
//     $(".color-option").toggle()
// })
// let lis=$(".options ul li")
// lis.eq(0).css("background-color","red")
// lis.eq(1).css("background-color","#09c")
// lis.eq(2).css("background-color","rgb(33 193 179);")
// lis.eq(3).css("background-color","#f50")
// lis.eq(4).css("background-color","#000")
// lis.click(function(){
//     let color=$(this).css("background-color")
//     $("h4 , h5").css("color" , color)
// })
// $(document).ready(function(){
//     $(".loading").fadeOut(2000, function(){
//         $("body").css("overflow" , "auto")
//     })
// })

// $("h1").click(function(){
//     $(this).css("color" , "#000")
//     $(this).siblings().css("color","red")
// })
// let x=$("name").offset();
// console.log(x)
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
