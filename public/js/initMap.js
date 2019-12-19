// Initialize and add the map
let map
let marker = [];
let infoWindow = [];
let lastItem = 0;
let contentString = '';
let controller = {
  filteredArray: data.filter(item => item.area === '台北-信義區').sort(function (a, b) {
    if (a.locNum < b.locNum) {
      return -1;
    }
    if (a.locNum > b.locNum) {
      return 1;
    }
    return 0;
  }),
  renderAllTag: function (index = 0) {
    $('#filterPanelBox')
      .find('.filter-tag')
      .remove();
    const filterTagSets = data.map(function (tags) {
      let tagsSetArr = tags.tag
        .map(
          item => `<div class="tag">${item}</div>
      `
        )
        .join('');
      return `<div class="filter-tag">
                <span>關鍵字搜尋</span>
                ${tagsSetArr}
              </div>`;
    });
    $('#filterPanelBox').append(filterTagSets[index]);
  },
  renderMainLocationInfoView: function (data, i = 0) {
    $('.locationInfo')
      .children()
      .remove();
    const download = data[i].mediaCard.map(item=>`<a data-toggle="tooltip" title="點撃我!下載媒體卡" role="button" href="./build/images/mediaDownload/${item}.jpg" download="${item}.jpg"><i class="fal fa-arrow-to-bottom fa-2x "></i></a>`).join('');
    const LocationInfoHTML = `<div class="mainInfo">
                        <div class="locationTitle">
                            <span>${data[i].locNum}</span>
                            <div class="separateLine"></div>
                            ${download}
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
                    </div>`;
    $('.locationInfo').append(LocationInfoHTML);
    $('[data-toggle="tooltip"]').tooltip();
  },
  setLocationCenter: function (index = 0) {
    return {lat: data[index].latitude, lng: data[index].longitude};
  }
};

function initMap() {
  let locationCenter = controller.setLocationCenter();
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: locationCenter
  });

  for (let i = 0; i < controller.filteredArray.length; i++) {
    let str = {};
    let place = {};
    contentString = `<div class="infoImg" style="background-image:url(./build/images/${controller.filteredArray[i].pictures[0]}.jpg);width: 160px;height: 110px;"></div>
<p>${controller.filteredArray[i].area}</p>
<span><i class="fal fa-map-pin"></i>  ${controller.filteredArray[i].spot}</span>`;
    place.lat = controller.filteredArray[i].latitude;
    place.lng = controller.filteredArray[i].longitude;

    str.map = map;
    str.title = controller.filteredArray[i].locNum;
    str.position = place;
    // console.log(str);
    let str2 = {};
    let place2 = {};
    place2.lat = controller.filteredArray[i].latitude;
    place2.lng = controller.filteredArray[i].longitude;
    str2.content = contentString;
    str2.position = place2;
    str2.maxWidth = 200;
    str2.pixelOffset = new google.maps.Size(0, -10);
    marker[i] = new google.maps.Marker(str);
    infoWindow[i] = new google.maps.InfoWindow(str2);

    marker[i].addListener('click', function () {
      console.log(i);
      infoWindow[lastItem].close();
      infoWindow[i].open(map, marker[i]);

      // $('.recommend-container__location > select option:eq(i)')
      // $('#selDiv option').eq(i).attr("selected", "selected");
      $('.recommend-container__location select').val(`${i}`);
      controller.renderAllTag(i);
      controller.renderMainLocationInfoView(controller.filteredArray, i);
      $('.locationCarousel')
        .eq(lastItem)
        .css({visibility: 'hidden', height: 0, marginBottom: 0});
      $('.locationCarousel')
        .eq(i)
        .css({visibility: 'visible', height: 'auto'});
      $('.locationCarousel')
        .eq(i)
        .slick('slickPlay');
      $('.locationCarousel')
        .eq(lastItem)
        .slick('slickPause');
      lastItem = i;
      $('.locationCarousel').slick('slickGoTo', 0);
    })

  }
}


$(function () {
  (function ($) {
    function renderLocationNav() {
      const locationNav = controller.filteredArray
        .map(
          x => `<div class="locationNav">
              <div class="locationNav-img"
                   style="background-image: url(./build/images/${x.pictures[0]}.jpg)">
                  
              </div>
              <div class="locationNav-content">
                  <div class="locationNav-subject">${x.briefTitle.substring(0, 14)} / ${x.locNum}</div>
              </div>
  
          </div>`
        )
        .join('');
      return locationNav;
    }

    // render all carousel
    const sliderSets = controller.filteredArray
      .map(function (slider) {
        let LocationCarouselItemHTML = slider.pictures
          .map(
            item => `<div class="banner">
                            <img class="img-responsive" data-lazy="./build/images/${item}.jpg" alt="">
                        </div>`
          )
          .join('');

        return `<div class="locationCarousel">${LocationCarouselItemHTML}</div>`;
      })
      .join('');
    $('#carouselBox--location').append(sliderSets);

    if ($('.locationCarousel').length > 0) {
      $('.locationCarousel').slick({
        lazyLoad: 'ondemand',
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
    // end of render initial carousel
    // let last = 0;
    // render tag responsively
    controller.renderAllTag(0);
    // render Main Location InfoView
    controller.renderMainLocationInfoView(controller.filteredArray, 0);

    // location nav (carousel)
    $('#locationsNav').append(renderLocationNav());

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
              arrows: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slideToScroll: 3,
              infinite: false,
              dots: false,
              arrows: true
            }
          }
        ]
      });
      $('#locationsNav .slick-prev').trigger('click');
      $('#locationsNav .locationNav').each((index, target) => {
        $(target).click(() => {
          infoWindow[lastItem].close()
          infoWindow[index].open(map, marker[index])
          // locationCarousel set to 0
          $('.locationCarousel').slick('slickGoTo', 0);
          $('.recommend-container select').val(`${index}`);
          controller.renderAllTag(index);
          controller.renderMainLocationInfoView(data, index);
          $('.locationCarousel')
            .eq(lastItem)
            .css({visibility: 'hidden', height: 0, marginBottom: 0});
          $('.locationCarousel')
            .eq(index)
            .css({visibility: 'visible', height: 'auto'});
          $('.locationCarousel')
            .eq(index)
            .slick('slickPlay');
          $('.locationCarousel')
            .eq(lastItem)
            .slick('slickPause');
          lastItem = index;
          $('html,body').animate(
            {
              scrollTop: 0
            },
            400
          );
        });
      });
    }
    $('.recommend-container__location select').on('change', function () {
      // locationCarousel set to 0
      infoWindow[lastItem].close()
      infoWindow[this.value].open(map, marker[this.value])
      $('.locationCarousel').slick('slickGoTo', 0);
      controller.renderAllTag(this.value);
      controller.renderMainLocationInfoView(controller.filteredArray, this.value);
      $('.locationCarousel')
        .eq(lastItem)
        .css({visibility: 'hidden', height: 0, marginBottom: 0});
      $('.locationCarousel')
        .eq(this.value)
        .css({visibility: 'visible', height: 'auto'});
      $('.locationCarousel')
        .eq(this.value)
        .slick('slickPlay');
      $('.locationCarousel')
        .eq(lastItem)
        .slick('slickPause');
      lastItem = this.value;
    });

    function windowResize() {
      let $bannerCarouselHeight = $('.locationCarousel').height();
      $('#map').css('height', `${$bannerCarouselHeight}px`);
      $('.map-container').css('height', `${$bannerCarouselHeight}px`);
    }

    $(window).resize(function () {
      windowResize();
    });

    renderLocationSortingFunc();

    function renderLocationSortingFunc() {
      const options = controller.filteredArray
        .map((item, index) => `<option value=${index}>${item.locNum}</option>`)
        .join('');
      $('.recommend-container__location select').append(options);
    }
  })($);
});
