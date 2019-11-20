$(function () {
  $('#bannerCarousel').slick({
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,

        }
      }
    ]
  });

})