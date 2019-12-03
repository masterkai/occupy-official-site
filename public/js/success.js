$(function () {
  (function ($) {
    // pagination start
    const state = {
      last: 0
    }
    const pagination = document.querySelector('.pages');
    const output = document.querySelector('.successNav');
    const posts = {
      postPerPage: 12,
      currentPage: 1,
      result: null
    }
    const init = function (data = data) {
      console.log('ready');
      posts.result = data;
      loadPage(1)
    };
    const loadPage = function (pg) {
      $('.successNav').html('')
      if ($('.pagination li:not(".cannotBeRemove")').length > 0) {
        $('.pagination').find('li:not(".cannotBeRemove")').remove()
      }
      // pagination.innerHTML = ''
      posts.currentPage = pg
      let startPost = (posts.currentPage - 1) * posts.postPerPage
      let totalPages = Math.ceil(posts.result.length / posts.postPerPage)
      let endPost = startPost + posts.postPerPage > posts.result.length ? posts.result.length : startPost + posts.postPerPage;
      // console.log('totalPages', totalPages);

      for (let x = 0; x < totalPages; x++) {
        let pageLi = document.createElement('li')
        let alink = document.createElement('a')
        alink.textContent = (x + 1)
        pageLi.dataset.page = (x + 1)
        pageLi.appendChild(alink)
        pageLi.addEventListener('click', function () {
          loadPage(x + 1)
        })

        if (x + 1 === posts.currentPage) {
          pageLi.classList.add('active')
        }
        $('.pagination .cannotBeRemove:last-child').before(pageLi)
        if (totalPages <= 1) {
          $('.pagination').css('display', 'none')
        }
      }

      for (let x = startPost; x < endPost; x++) {
        const item = posts.result[x]
        let div = document.createElement('div')
        div.classList.add('successItem')
        div.dataset.index = x
        let img = document.createElement('div')
        img.classList.add('successItem-img')
        img.style.backgroundImage = `url(./build/images/${item.pictures[0]}.jpg)`
        div.appendChild(img)
        let itemContent = document.createElement('div')
        itemContent.classList.add('successItem-content')
        let itemSubject = document.createElement('div')
        itemSubject.classList.add('successItem-subject')
        itemSubject.textContent = item.briefTitle.substring(0, 14) + ' / ' + item.locNum
        itemContent.appendChild(itemSubject)
        div.appendChild(itemContent)


        div.addEventListener('click', function () {
          console.log(div.dataset.index);
          clickEvent(parseInt(div.dataset.index), posts.result)
        })
        // output.appendChild(div)
        $('.successNav').append(div)
      }

      // pagination.appendChild(pageOutput)
      // $('.pagination').append(pageOutput)

    }
    window.addEventListener('load', function () {
      init(data);
    });
    // pagination end

    // console.log('total page', $('.pagination li:not(".cannotBeRemove")').length);
    $('.pagination li:last-child').click(function (e) {
      e.preventDefault()
      console.log('next clicked!');
      if ($('.pagination .active').data('page') === $('.pagination li:not(".cannotBeRemove")').length) {
        return false
      } else {
        loadPage(parseInt($('.pagination .active').data('page')) + 1)
      }
    })
    $('.pagination li:first-child').click(function (e) {
      e.preventDefault()
      console.log('prev clicked!');
      console.log('current:', $('.pagination .active').data('page'));
      if ($('.pagination .active').data('page') === 1) {
        return false
      } else {
        loadPage(parseInt($('.pagination .active').data('page')) - 1)
      }
    })

    function renderSuccessCarousel(data = data) {
      $('.carouselBox--success').children().remove()
      const sliderSets = data.map(function (slider) {
        let LocationCarouselItemHTML = slider.pictures.map(item => `<div class="banner">
                            <img class="img-responsive" data-lazy="./build/images/${item}.jpg" alt="">
                        </div>`).join('')

        return `<div class="successCarousel">${LocationCarouselItemHTML}</div>`
      }).join('')
      $('#carouselBox--success').append(sliderSets)
      if ($('.successCarousel').length > 0) {
        $('.successCarousel').slick({
          lazyLoad: 'ondemand',
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
    }

    function renderSortingFunc() {
      const distinct = (value, index, self) => {
        return self.indexOf(value) === index
      }
      const allSort = data.map(item => item.sort)
      const distinctSorts = allSort.filter(distinct)
      const options = distinctSorts.map((item) => `<option value=${item}>${item}</option>`).join('')
      $('.recommend-container__success select').append(options)
    }

    function renderSuccessFilter(index = 0, data = data) {
      $('#filterPanelBox__success').find('div:not(".recommend-container__success")').remove()

      const successFilterSet = data.map((item) => {
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
      $('#filterPanelBox__success').append(successFilterSet[index])
    }

    // success brief div & miniPic div
    window.onload = function () {

    }
    renderSuccessCarousel(data)
    renderSortingFunc()
    renderSuccessFilter(0, data)
    generateMiniPicSets(0, data)

    function generateMiniPicSets(index = 0, data = data) {
      if ($('.miniPic')) {
        $('.miniPic').remove()
      }
      if ($('.briefIntro')) {
        $('.briefIntro').remove()
      }

      const miniPicSet = data.map(function (item) {
        const imgItems = item.pictures.map(img => `<img src="./build/images/${img}.jpg" alt="">`).join('')
        return `<div class="briefIntro">
                    <div class="briefIntro_title">${item.briefTitle}<br><span style="margin-top: 15px;font-size: 15px;">${item.subTitle}</span></div>
                    <div class="separateLineHorizontal"></div>
                    <div class="briefIntro_desc">${item.brief}</div>
                </div>
                <div class="miniPic">${imgItems}</div>`
      })
      // document.querySelector('.carouselVerticalNav').insertAdjacentHTML('beforeend', miniPicSet[index])
      $('.carouselVerticalNav--success').append(miniPicSet[index])
      // initialize conditionBtn
      // console.log('miniPic img length', $('.miniPic img').length);
      if ($(window).width() > 768 && $('.miniPic img').length > 8) {
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
      });
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
          $('.successCarousel').slick('slickGoTo', index);
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
    }


    function clickEvent(index, sortedData) {

      renderSuccessFilter(index, sortedData)
      $('.successCarousel').slick('slickGoTo', 0);
      // $(".recommend-container select").val(`${index}`);
      generateMiniPicSets(index, sortedData)
      $('.successCarousel').eq(state.last).css({visibility: 'hidden', height: 0, marginBottom: 0})
      $('.successCarousel').eq(index).css({visibility: 'visible', height: 'auto'})
      $('.successCarousel').eq(index).slick('slickPlay');
      $('.successCarousel').eq(state.last).slick('slickPause');
      state.last = index

      $("html,body").animate({
        scrollTop: 0
      }, 400);
    }

    $('.recommend-container__success select').on('change', function (e) {
      console.log(e.target.value);
      const sortedArr = data.filter(function (item) {
        return item.sort === e.target.value
      })
      console.log(sortedArr);
      init(sortedArr)
      generateMiniPicSets(0, sortedArr)
      renderSuccessFilter(0, sortedArr)
      renderSuccessCarousel(sortedArr)
      state.last = 0
    });
  })($);


})