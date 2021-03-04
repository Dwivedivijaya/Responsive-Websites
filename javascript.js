$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        loop: true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 1500,
        paginationSpeed: 400,
        items: 1,
        autoplay: true,
        autoplayspeed: 500,
    })
    // $('#carousel-owl').owlCarousel({
    //     loop: true,
    //     nav: true, // Show next and prev buttons
    //     slideSpeed: 1500,
    //     paginationSpeed: 400,
    //'     items: 3,
    //     autoplay: true,
    //     autoplayspeed: 500,
       
    // })
    $('#carousel-owl').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayspeed: 500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});

 
   
   
  