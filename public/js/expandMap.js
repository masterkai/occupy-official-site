$(function () {
  $('.expandBtn').click(function () {
    console.log('expandBtn');

    $('.bannerCarousel--location .carouselBox').toggleClass('disappear')
    $('.bannerCarousel--location .locationCarousel button').toggleClass('disappear')
    $('.map-container').toggleClass('fullWidth')
    if($('.bannerCarousel--location .carouselBox').hasClass('disappear')){
      $('.locationCarousel').slick('unslick')
    }else {
      $('.locationCarousel').slick({
        lazyLoad: 'progressive',
        infinite: false,
        arrows: true,
        autoplay: true,
        dots: true,
        responsive: [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slideToScroll: 1,
              infinite: false,
              dots: true,
              arrows: true
            }
          }
        ]
      });
    }
  })
});