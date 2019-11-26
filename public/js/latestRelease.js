$(function () {
  (function ($) {
    const controller = {
      lastItem: 0,
      month: parseInt($('.recommend-container__latestRelease .active').data('month')),
      navigation: function () {
        if ($('.latestReleaseNav .latestReleaseItem').length > 0) {
          $('.latestReleaseNav .slick-prev').trigger('click');
          $('.latestReleaseNav .latestReleaseItem').each((index, target) => {
            $(target).click(() => {
              this.generateMiniPicSets(index, this.month)
              renderLatestReleaseFilter(index, this.month)
              $('.latestReleaseCarousel').slick('slickGoTo', 0);
              $('.latestReleaseCarousel').eq(this.lastItem).css({visibility: 'hidden', height: 0, marginBottom: 0})
              $('.latestReleaseCarousel').eq(index).css({visibility: 'visible', height: 'auto'})
              $('.latestReleaseCarousel').eq(index).slick('slickPlay');
              $('.latestReleaseCarousel').eq(this.lastItem).slick('slickPause');
              this.lastItem = index

              $("html,body").animate({
                scrollTop: 0
              }, 400);
            })
          })
        }
      },
      generateMiniPicSets: function (index = 0, month) {
        if ($('.miniPic')) {
          $('.miniPic').remove()
        }
        if ($('.briefIntro')) {
          $('.briefIntro').remove()
        }
        const filteredMonthArr = data.filter(item => item.month === month)
        const miniPicSet = filteredMonthArr.map(function (item) {
          const imgItems = item.pictures.map(img => `<img src="./build/images/${img}.JPG" alt="">`).join('')
          return `<div class="briefIntro">
                            <div class="briefIntro_title">${item.briefTitle}</div>
                            <div class="separateLineHorizontal"></div>
                            <div class="briefIntro_desc">${item.brief}</div>
                        </div>
                        <div class="miniPic">${imgItems}</div>`
        })
        $('.carouselVerticalNav--latestRelease').append(miniPicSet[index])
        // initialize conditionBtn
        // console.log('miniPic img length', $('.miniPic img').length);
        if ($('.miniPic img').length > 8) {
          $('.conditionBtn_right').css('display', 'block')
          $('.conditionBtn_right').click(function () {
            $('.miniPic').scrollTo($('.miniPic img:last-child'), 0)
          })
        } else {
          $('.conditionBtn_right').css('display', 'none')
          $('.conditionBtn_left').css('display', 'none')
        }
        $('.conditionBtn_left').click(function () {
          $('.miniPic').scrollTo($('.miniPic img:first-child'), 0)
        })
        if ($('.miniPic img').length > 16) {
          $('.conditionBtn_right').click(function () {
            $('.miniPic').scrollTo('225px', 0)
          })
        }

        let miniPic = $('.miniPic img')
        let miniPicLength = miniPic.length

        // console.log(miniPicLength);
        miniPic.each(function (index, target) {
          // console.log(target, index);
          $(target).click(function () {
            console.log(index);
            $('.latestReleaseCarousel').slick('slickGoTo', index);
          })
        })

        let scrollLeftPrev = 0;
        $('.miniPic').scroll(function () {
          let $elem = $('.miniPic');
          let newScrollLeft = $elem.scrollLeft(),
            width = $elem.width(),
            scrollWidth = $elem.get(0).scrollWidth;
          // let offset=8;
          if (scrollWidth - newScrollLeft - width == 0) {
            console.log('right end')
            $('.conditionBtn_right').css('display', 'none')
            $('.conditionBtn_left').css('display', 'block')
          } else if (scrollWidth - newScrollLeft - width !== 0) {
            $('.conditionBtn_right').click(function () {
                $('.miniPic').scrollTo($('.miniPic img:last-child'), 0)
              }
            )
          }
          if (miniPicLength > 8 && newScrollLeft === 0) {
            console.log('left end')
            $('.conditionBtn_left').css('display', 'none')
            $('.conditionBtn_right').css('display', 'block')

          }
          // console.log($('.miniPic').width());
          scrollLeftPrev = newScrollLeft;
        })
      },
      renderLatestReleaseNav: function (data, month) {
        $('.latestReleaseNav').html('')
        const filteredMonthArr = data.filter(item => item.month === month)
        const LatestReleaseNav = filteredMonthArr.map(x => `<div data-month="${x.month}" class="latestReleaseItem">
              <div class="latestReleaseItem-img"
                   style="background-image: url(./build/images/${x.pictures[0]}.jpg)">
                  
              </div>
              <div class="latestReleaseItem-content">
                  <div class="latestReleaseItem-subject">${x.locNum}</div>
              </div>
  
          </div>`).join('')
        $('.latestReleaseNav').append(LatestReleaseNav)
      }
    }
    // 月份click 事件
    $('.recommend-container__latestRelease .month').each(function (index, target) {
      $(target).click(function () {
        controller.month = parseInt($(this).data('month'))
        controller.lastItem = 0
        $('.month').removeClass('active')
        $(this).addClass('active')
        controller.renderLatestReleaseNav(data, controller.month)
        filteredLatestReleasedCarousel(controller.month)
        controller.navigation()
        renderLatestReleaseFilter(0, controller.month)
        controller.generateMiniPicSets(0, controller.month)
        $('.latestReleaseCarousel').slick(
          {
            lazyLoad: 'ondemand',
            laztLoad: 'progressive',
            infinite: false,
            arrows: true,
            autoplay: false,
            dots: true,
          }
        )
      })
    })

    function renderLatestReleaseFilter(index = 0, month) {
      $('#filterPanelBox__latestRelease').find('div:not(".recommend-container__latestRelease")').remove()
      const filteredMonthArr = data.filter(item => item.month === month)
      const latestReleaseFilterSet = filteredMonthArr.map((item) => {
        const tags = item.tag.map(x => `<div class="tag">${x}</div>`).join('')
        return `<div class="separateLine"></div>
                <div class="filter-tag">
                    <span>點位圖檔</span>
                    <div class="tag">${item.locNum}</div>
                </div>
                <div class="separateLine"></div>
                <div class="filter-tag">
                    <span>關鍵字搜尋</span>
                    ${tags}
                    
                </div>`
      })
      $('#filterPanelBox__latestRelease').append(latestReleaseFilterSet[index])
    }

    // render filtered latest release carousel
    function filteredLatestReleasedCarousel(month) {
      $('#carouselBox_latestRelease .latestReleaseCarousel').remove()
      const filteredMonthArr = data.filter(item => item.month === month)
      const sliderSets = filteredMonthArr.map(function (slider) {

        const LatestReleasedCarouselItemHTML = slider.pictures.map(item => `<div class="banner">
                            <img class="img-responsive" data-lazy="./build/images/${item}.jpg" alt="">
                        </div>`).join('')

        return `<div data-month="${slider.month}" class="latestReleaseCarousel">${LatestReleasedCarouselItemHTML}</div>`
      }).join('')
      $('#carouselBox_latestRelease').append(sliderSets)

    }

    $(document).ready(function () {
      renderLatestReleaseFilter(0, controller.month)
      $('.latestReleaseNav .latestReleaseItem:eq(0)').trigger('click')
      $('.recommend-container__latestRelease .month:eq(0)').trigger('click')
    })
  })($);

})