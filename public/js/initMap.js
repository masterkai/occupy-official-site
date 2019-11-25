// Initialize and add the map
let marker = []
let lastItem = 0

let controller = {
  renderAllTag: function (index = 0) {
    $('#filterPanelBox').find('.filter-tag').remove()
    const filterTagSets = data.map(function (tags) {
      let tagsSetArr =
        tags.tag.map(item => `<div class="tag">${item}</div>
      `).join('')
      return `<div class="filter-tag">
                <span>關鍵字搜尋</span>
                ${tagsSetArr}
              </div>`
    })
    $('#filterPanelBox').append(filterTagSets[index])
  },
  renderMainLocationInfoView: function (data, i = 0) {
    $('.locationInfo').children().remove();

    const LocationInfoHTML = `<div class="mainInfo">
                        <div class="locationTitle">
                            <span>${data[i].locNum}</span>
                            <div class="separateLine"></div>
                            <i class="fal fa-comment-alt-dots fa-2x"></i>
                            <i class="fal fa-sign-in fa-2x"></i>
                        </div>
                        <div class="mainInfo_desc">
                            <p><span>點位優勢：</span>${data[i].advantage}</p>
                        </div>
                    </div>
                    <div class="infoList wow fadeIn">
                        <div class="list"><span>高度</span>：${data[i].Dimensions.height}‧<span>寬度</span>：${data[i].Dimensions.width}‧<span>面積</span>：${data[i].Dimensions.area}</div>
                        <div class="list"><span>材質運用</span>：${data[i].material}</div>
                        <div class="list"><span>行政區域</span>：${data[i].regions}</div>
                        <div class="list"><span>點位位置</span>：${data[i].location}</div>
                        <div class="list"><span>人車分析</span>：${data[i].analysis}</div>
                    </div>`
    $('.locationInfo').append(LocationInfoHTML)

  },
  setLocationCenter: function (index = 0) {
    return {lat: data[index].latitude, lng: data[index].longitude}
  }
}

function initMap() {
  // The location of locationCenter

  let locationCenter = controller.setLocationCenter();
  // The map, centered at locationCenter
  let map = new google.maps.Map(
    document.getElementById('map'), {zoom: 17, center: locationCenter});
  // The marker, positioned at locationCenter
  // let marker = new google.maps.Marker({position: locationCenter, map: map, title: data[0].locNum});

  for (let i = 0; i < 5; i++) {
    let str = {}
    let place = {}

    place.lat = data[i].latitude
    place.lng = data[i].longitude

    str.map = map
    str.title = data[i].locNum
    str.position = place
    // console.log(str);
    marker[i] = new google.maps.Marker(str)


    marker[i].addListener('click', function () {
      console.log(i);
      // $('.recommend-container__location > select option:eq(i)')
      // $('#selDiv option').eq(i).attr("selected", "selected");
      $(".recommend-container__location select").val(`${i}`);
      controller.renderAllTag(i)
      controller.renderMainLocationInfoView(data, i)
      $('.locationCarousel').eq(lastItem).css({visibility: 'hidden', height: 0, marginBottom: 0})
      $('.locationCarousel').eq(i).css({visibility: 'visible', height: 'auto'})
      $('.locationCarousel').eq(i).slick('slickPlay');
      $('.locationCarousel').eq(lastItem).slick('slickPause');
      lastItem = i
    });
  }
}

$(function () {
  (function ($) {
    function renderLocationNav(data) {
      const locationNav = data.map(x => `<div class="locationNav">
              <div class="locationNav-img"
                   style="background-image: url(./build/images/${x.pictures[0]}.jpg)">
                  
              </div>
              <div class="locationNav-content">
                  <div class="locationNav-subject">${x.locNum}</div>
              </div>
  
          </div>`).join('')
      return locationNav

    }

    // render all carousel
    const sliderSets = data.map(function (slider) {
      let LocationCarouselItemHTML = slider.pictures.map(item => `<div class="banner">
                            <img class="img-responsive" data-lazy="./build/images/${item}.jpg" alt="">
                        </div>`).join('')

      return `<div class="locationCarousel">${LocationCarouselItemHTML}</div>`
    }).join('')
    $('#carouselBox').append(sliderSets)

    if ($('.locationCarousel').length > 0) {
      $('.locationCarousel').slick({
        lazyLoad: 'ondemand',
        laztLoad: 'progressive',
        infinite: false,
        arrows: true,
        autoplay: false,
        dots: true,
        responsive: [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slideToScroll: 1,
              infinite: false,
              dots: false,
              arrows: true,
            }
          }
        ]
      });
    }
    // end of render initial carousel
    // let last = 0;
    // render tag responsively
    controller.renderAllTag(0)
    // render Main Location InfoView
    controller.renderMainLocationInfoView(data, 0)

    // location nav (carousel)
    $('#locationsNav').append(renderLocationNav(data))

    if ($('#locationsNav .locationNav').length > 0) {
      $('#locationsNav').slick({
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
      $('#locationsNav .slick-prev').trigger('click');
      $('#locationsNav .locationNav').each((index, target) => {
        $(target).click(() => {
          // locationCarousel set to 0
          $('.locationCarousel').slick('slickGoTo', 0);
          $(".recommend-container select").val(`${index}`);
          controller.renderAllTag(index)
          controller.renderMainLocationInfoView(data, index)
          $('.locationCarousel').eq(lastItem).css({visibility: 'hidden', height: 0, marginBottom: 0})
          $('.locationCarousel').eq(index).css({visibility: 'visible', height: 'auto'})
          $('.locationCarousel').eq(index).slick('slickPlay');
          $('.locationCarousel').eq(lastItem).slick('slickPause');
          lastItem = index
        })
      })
    }
    $('.recommend-container select').on('change', function () {
      // locationCarousel set to 0
      $('.locationCarousel').slick('slickGoTo', 0);
      controller.renderAllTag(this.value)
      controller.renderMainLocationInfoView(data, this.value)
      $('.locationCarousel').eq(lastItem).css({visibility: 'hidden', height: 0, marginBottom: 0})
      $('.locationCarousel').eq(this.value).css({visibility: 'visible', height: 'auto'})
      $('.locationCarousel').eq(this.value).slick('slickPlay');
      $('.locationCarousel').eq(lastItem).slick('slickPause');
      lastItem = this.value
    });

    function windowResize() {
      let $bannerCarouselHeight = $('.locationCarousel').height()
      $('#map').css('height', `${$bannerCarouselHeight}px`)
      $('.map-container').css('height', `${$bannerCarouselHeight}px`)
    }

    $(window).resize(function () {
      windowResize()
    })

    renderLocationSortingFunc()

    function renderLocationSortingFunc() {
      const options = data.map((item, index) => `<option value=${index}>${item.locNum}</option>`).join('')
      $('.recommend-container__location select').append(options)
    }
  })($);
})





