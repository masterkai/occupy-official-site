const data = [
  {
    locNum: 'NW-106',
    pictures: ['NW-106_1', 'NW-106_2', 'NW-106_3', 'NW-106_4', 'NW-106_5', 'NW-106_6'],
    tag: ['SAMSUNG', '手機類', '大樓彩妝', '信義商圈'],
    position: {lat: 25.0352936, lng: 121.5656744},
    advantage: '位於威秀影城及新光三越旁，世貿三館對面，為台北指標性娛樂中心，觀影購物人潮及車量數眾多。透過超大型戶外看板來吸引商圈群眾目光，使新產品能夠藉由戶外廣告讓民眾留下深刻的印象；且此路口人潮及車流量眾多，許多大型行銷活動都會在此區舉行，有利於大幅度提升廣告曝光效果。',
    Dimensions: {height: '2366cm', width: '5718cm', area: '15699才'},
    material: '單面視線‧材質運用：帷幕牆',
    regions: '信義區/距捷運台北101/世貿站650公尺',
    location: '台北市松壽路ATT 4 FUN大樓外牆',
    analysis: '上午尖峰2小時:13343車‧下午尖峰2小時:14472車'
  },
  {
    locNum: 'NL-192~193',
    pictures: ['NL_192_1', 'NL_192_2', 'NL_192_3', 'NL_192_4', 'NL_192_5', 'NL_192_6'],
    tag: ['台哥大', '手機類', '信義商圈'],
    position: {lat: 25.0358239, lng: 121.5671258},
    advantage: '位於威秀影城出口，新光三越對面ATT4FUN旁，為台北指標性娛樂中心，觀影購物人潮及車量數眾多。台灣大哥大廣告置於信義區信義威秀戶外看板，能夠在人潮眾多的商圈24小時進行廣告訊息傳播，戶外看板的色彩感讓人難以忽視，且大型廣告看板簡潔呈現有助於推廣產品。',
    Dimensions: {height: '420cm', width: '1025cm', area: '478才'},
    material: 'PVC外照式燈光‧材質運用：商葉架',
    regions: '信義區 / 距捷運台北101站800公尺',
    location: '台北市信義區松壽路',
    analysis: '上午尖峰2小時:13343車‧下午尖峰2小時:14472車'
  },
  {
    locNum: 'NN-137',
    pictures: ['NN_137_1', 'NN_137_2', 'NN_137_3', 'NN_137_4', 'NN_137_5', 'NN_137_6'],
    tag: ['大樓彩妝', '手機類', '信義商圈', '遠雄建設'],
    position: {lat: 25.0325078, lng: 121.5592545},
    advantage: '近信義路和基隆路口，臨世貿中心、101金融大樓凱悅 、國際會議中心周邊高級住辦大樓林立。歌林廣告台北戶外大樓看板上刊於信義區地段，鄰近台北101及世貿中心，是重要的商業及娛樂中心地帶，人潮及車流量大，有助於戶外廣告24小時全天候曝光。',
    Dimensions: {height: '2115cm', width: '940cm', area: '2209才'},
    material: 'PU帆布外照式燈光‧材質運用：商業架',
    regions: '信義區/距捷捷運台北101/世貿站350公尺',
    location: '台北市基隆路二段',
    analysis: '上午尖峰2小時:18734車‧下午尖峰2小時:16940車'
  },
  {
    locNum: 'NW-157',
    pictures: ['NW_157_1', 'NW_157_2', 'NW_157_3', 'NW_157_4', 'NW_157_5', 'NW_157_6'],
    tag: ['神鵰俠侶', '手機類', '大樓彩妝', '信義商圈'],
    position: {lat: 25.0329735, lng: 121.5598072},
    advantage: '位於信義路和基隆路口，臨近國際會議中心、世貿中心、101金融大樓、周邊高級住辦大樓林立。',
    Dimensions: {height: '3470cm', width: '5927cm', area: '22852才'},
    material: '單面視線/外照式燈光‧材質運用：帷幕牆',
    regions: '信義區 / 距捷運台北101/世貿站280公尺 / 近信義商圈',
    location: '台北市信義路4段',
    analysis: '上午尖峰2小時:16868車‧下午尖峰2小時:17528車'
  },
  {
    locNum: 'WN-004AB',
    pictures: ['WN_004_1', 'WN_004_2', 'WN_004_3', 'WN_004_4', 'WN_004_5', 'WN_004_6'],
    tag: ['SAMSUNG', '手機類', '大樓彩妝', '信義商圈'],
    position: {lat: 25.0355805, lng: 121.5669169},
    advantage: '鄰近ATT4FUN、新光三越、Bellavita、Neo 19、世貿中心及台北101，結合影城、購物、生活消費等機能為台北指標性娛樂中心，群聚人潮及車量數眾多。',
    Dimensions: {height: '150cm', width: '1400cm', area: '234才'},
    material: '透光帆布燈箱‧材質運用：分為AB兩面，A面面向新光三越、B面面向南山廣場，上方可沿斜坡鐵網範圍做破格（橘線範圍圖示）',
    regions: '信義區 / 距捷運台北101/世貿站550公尺',
    location: '上午尖峰2小時:5140車‧下午尖峰2小時:6401車',
    analysis: '上午尖峰2小時:13343車‧下午尖峰2小時:14472車'
  }
]

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 25.035398, lng: 121.5658274};
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 14, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

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


$(function () {
  // render initial carousel
  const sliderSets = data.map(function (slider) {
    let LocationCarouselItemHTML = slider.pictures.map(item => `<div class="banner">
                            <img class="img-responsive" data-lazy="./build/images/${item}.jpg" alt="">
                        </div>`).join('')

    return `<div class="locationCarousel">${LocationCarouselItemHTML}</div>`
  }).join('')
  document.getElementById('carouselBox').insertAdjacentHTML('afterbegin', sliderSets);

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

  let last = 0;

  // render tag responsively
  renderAllTag(0)

  // render Main Location InfoView
  renderMainLocationInfoView(data, 0)
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
        $(".recommend-container select").val(`${index}`);
        renderAllTag(index)
        renderMainLocationInfoView(data, index)
        $('.locationCarousel').eq(last).css({visibility: 'hidden', height: 0, marginBottom: 0})
        $('.locationCarousel').eq(index).css({visibility: 'visible', height: 'auto'})
        $('.locationCarousel').eq(index).slick('slickPlay');
        $('.locationCarousel').eq(last).slick('slickPause');
        last = index
      })
    })
  }
  $('.recommend-container select').on('change', function() {
    renderAllTag(this.value)
    renderMainLocationInfoView(data, this.value)
    $('.locationCarousel').eq(last).css({visibility: 'hidden', height: 0, marginBottom: 0})
    $('.locationCarousel').eq(this.value).css({visibility: 'visible', height: 'auto'})
    $('.locationCarousel').eq(this.value).slick('slickPlay');
    $('.locationCarousel').eq(last).slick('slickPause');
    last = this.value
  });


  // detectBannerCarouselHeight()
  //
  // function detectBannerCarouselHeight() {
  //   let $bannerCarouselHeight = $('.locationCarousel').height()
  //   if ($('.locationCarousel .banner').length > 0) {
  //     $('.map-container').css('height', `${$bannerCarouselHeight}px`)
  //     $('#map').css('height', `${$bannerCarouselHeight}px`)
  //   }
  // }
})


$(window).resize(function () {
  let $bannerCarouselHeight = $('.locationCarousel').height()
  $('#map').css('height', `${$bannerCarouselHeight}px`)
  $('.map-container').css('height', `${$bannerCarouselHeight}px`)
})

function renderAllTag(index = 0) {
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
  // console.log(typeof filterTagSets);
  // console.log(filterTagSets[index]);
  document.getElementById('filterPanelBox').insertAdjacentHTML('beforeend', filterTagSets[index]);
}

function renderMainLocationInfoView(data, i = 0) {
  $('.locationInfo').children().remove();

  const LocationInfoHTML = `<div class="mainInfo wow fadeIn">
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

}

