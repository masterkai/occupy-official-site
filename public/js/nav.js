$(function () {
  $('.menuContainer > li').css('display', 'flex');
  const isFirefox = typeof InstallTrigger !== 'undefined';
  const isIE = /*@cc_on!@*/false || !!document.documentMode;
  const isEdge = !isIE && !!window.StyleMedia;
  let liItem = $('.navbar-nav > ul > li')
  let menuContainerDynamicLiWidth
  const menuLv1 = $('.menuContainer > li')
  const navbarBrand = $('.navbar-brand')
  let navbarBrandWidth;
  const navFlexContainer = $('.navFlexContainer')
  // Mega Menu
  let childPanel;
  let elementHeight;

  function dynamicModification() {
    menuLv1.each(function (index, target) {
      $(target).children('.mddWrap').css('left', `-${navbarBrandWidth + (menuContainerDynamicLiWidth * index)}px`)
    })
  }

  function detectShrink() {
    if (navFlexContainer.hasClass('shrink')) {
      navbarBrandWidth = 130
      menuContainerDynamicLiWidth = 147
      dynamicModification()
    } else {
      navbarBrandWidth = 180
      menuContainerDynamicLiWidth = 140
      dynamicModification()
    }


  }

  if (isFirefox || isEdge) {
    $(window).scroll(function () {
      if ($window.scrollTop() > 100) {
        detectShrink()
      } else {
        detectShrink()
      }
    })
    detectShrink()
  }

  liItem.hover(function () {
    childPanel = $(this).children('.mddWrap');
    childPanel.each(function (index, element) {
      elementHeight = $(element).height() + 1
      childPanel.css({height: `0`, display: 'block', opacity: '0'}).stop().animate({
        height: `${elementHeight}px`,
        opacity: '1'
      }, 50, 'swing');
    });
  }, function () {
    elementHeight = 0
    childPanel.css({display: 'none'});
  });

  // Navigation shrinking effect
  let navbarBrandImg = $('.navbar-brand > img')
  let $window = $(window)
  let mddMenu = $('.mddWrap')
  $window.scroll(function () {
    if ($window.scrollTop() > 100) {
      if (!navFlexContainer.hasClass('shrink') && !navbarBrand.hasClass('shrink') && !menuLv1.hasClass('shrink') && !navbarBrandImg.hasClass('shrink') && !mddMenu.hasClass('shrink')) {
        navFlexContainer.addClass('shrink')
        navbarBrand.addClass('shrink')
        menuLv1.addClass('shrink')
        navbarBrandImg.addClass('shrink')
        mddMenu.addClass('shrink')
        // $('.mobile-nav-menu').css('top', '50px')
        $('.subMenu').css('padding-top', '50px')
        $('.spotSearch').css('top', '50px')
        $('.filter-panel-section').css('margin-top', '50px')
      }

    } else {
      if (navFlexContainer.hasClass('shrink') && navbarBrand.hasClass('shrink') && menuLv1.hasClass('shrink') && navbarBrandImg.hasClass('shrink') && mddMenu.hasClass('shrink')) {
        navFlexContainer.removeClass('shrink')
        navbarBrand.removeClass('shrink')
        menuLv1.removeClass('shrink')
        navbarBrandImg.removeClass('shrink')
        mddMenu.removeClass('shrink')
        // $('.mobile-nav-menu').css('top', '73px')
        $('.subMenu').css('padding-top', '73px')
        $('.spotSearch').css('top', '73px')
        $('.filter-panel-section').css('margin-top', '73px')

      }

    }
  })

  if (navFlexContainer.hasClass('shrink') && navbarBrand.hasClass('shrink') && menuLv1.hasClass('shrink') && navbarBrandImg.hasClass('shrink') && mddMenu.hasClass('shrink')) {
    $('.subMenu').css('padding-top', '50px')
    $('.spotSearch').css('top', '50px')
    $('.filter-panel-section').css('margin-top', '50px')

  } else {
    $('.subMenu').css('padding-top', '73px')
    $('.spotSearch').css('top', '73px')
    $('.filter-panel-section').css('margin-top', '73px')

  }
});