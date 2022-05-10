$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 500,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left_svg.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right_svg.png"</button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});

