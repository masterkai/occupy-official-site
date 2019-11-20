$(function () {
  $('.venobox').venobox();
  $('.videos').slick({
    infinite: false,
    speed: 300,
    dots: false,
    autoplay: false,
    mobileFirst: true,
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slideToScroll: 4,
          infinite: false,
          dots: false,
          arrows: true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slideToScroll: 3,
          infinite: false,
          dots: false,
          arrows: true,

        }
      }
    ]

  });
  $('.samples').slick({
    infinite: true,
    speed: 300,
    dots: false,
    autoplay: false,
    mobileFirst: true,
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slideToScroll: 4,
          infinite: true,
          dots: false,
          arrows: true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slideToScroll: 3,
          infinite: true,
          dots: false,
          arrows: true,

        }
      }
    ]

  });

})