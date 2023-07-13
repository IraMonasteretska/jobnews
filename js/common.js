$(document).ready(function(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5,
        spaceBetween: 16,

        breakpoints: {
           
            575: {
                slidesPerView: 2,
            },
            769: {
                slidesPerView: 3,
            },
           
        }
      });


});