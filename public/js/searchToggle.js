$(function () {
  var spotSearchSection = $('.spotSearch');
  $('.searchToggleBtn__mobile').click(function(e) {
    e.preventDefault();
    spotSearchSection.slideToggle();
  });
});