$(function () {
  $('.expandBtn').click(function () {
    console.log('expandBtn');
    $('.bannerCarousel--location .carouselBox').toggleClass('disappear')
    $('.bannerCarousel--location .locationCarousel button').toggleClass('disappear')
    $('.map-container').toggleClass('fullWidth')
  })
})