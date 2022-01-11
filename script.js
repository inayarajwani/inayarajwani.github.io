// $(document).ready(function(){
//     $(window).scrollTop(){
//         if (this.scrollY > 20){
//             $('.navibar').addClass('sticky');
//         } else {
//             $('.navibar').removeClass('sticky'); 
//         }
//     };
//     //toggle menu/navbar script
//     $('.menu-tog').click(function(){
//         $('.navibar .menu').toggle("active");
//         $('.menu-tog i').toggle("active");
//     });
//     //typing animation script
//     var typed = new Typed(".typing-txt", {
//         strings: ["technology", "making a positive impact on day-to-day life and giving back to the community", "exploring my creativity through fashion and photography"],
//         typingSpeed:100,
//         deleteSpeed:60,
//         loop: true
//     });
// });

$(document).ready(function(){
    $(window).scroll(function(){
        console.log(window.scrollY)
        if (window.scrollY >= 60){
            $('.navibar').addClass('sticky');
        } else {
            $('.navibar').removeClass('sticky'); 
        }
    });

    //toggle menu/navbar script
    $('.menu-tog').click(function(){
        console.log("hello")
        $('.navibar .menu').toggle("active");
        $('.menu-tog i').toggle("active");
    });
    //typing animation script
    var typed = new Typed(".typing-txt", {
        strings: ["technology", "making a positive impact on day-to-day life and giving back to the community", "exploring my creativity through fashion and photography"],
        typingSpeed:100,
        deleteSpeed:400,
        loop: true
    });
});

/*$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.navibar').addClass("sticky");
        }else{
            $('.navibar').removeClass("sticky");

        }
    })
});*/