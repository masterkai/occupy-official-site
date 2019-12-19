// $(function () {
//   $('.resultNav .resultItem').each(function (index, target) {
//     $(target).click(function (e) {
//       // alert(index)
//       e.stopPropagation();
//
//       $('.container--result .slider').remove()
//       renderResultCarousel(index)
//       generateResultMiniPicSets(index)
//       if ($('.slider')) {
//         $(document).ready(function () {
//           $('.posting')
//             .toggle("fast", function () {
//               //　toggle時にリサイズすると表示される。
//               $('.slider').resize();
//               $('.modalMask').css('display', 'block')
//               // $('.miniPic--service img:first-child').trigger('click')
//               $('.slider').css({visibility: 'visible', height: 'auto', flexBasis: 'auto'})
//             });
//         })
//       }
//     })
//   })
//
//   window.onclick = function (event) {
//     if (event.target !== $('.posting')) {
//       $('.modalMask').css('display', 'none');
//       $('.posting').hide();
//     }
//   }
//   $('.container--result .close').click(function (e) {
//     e.stopPropagation();
//     $('.modalMask').css('display', 'none');
//     $('.posting').hide();
//   })
//
//   $('.posting').click(function (event) {
//     event.stopPropagation();
//   });
//
//   function renderResultCarousel(index) {
//     if ($('.slider')) {
//       $('.slider').children().remove();
//     }
//     const sliderSets = resultArr('電信通訊').map(item => {
//       let serviceCarouselItemHTML = item.pictures.map(x => `<div style="background-image: url(./build/images/${x}.jpg)">
//                             <img class="img-responsive" src="./build/images/emptyImg.gif" alt="">
//                         </div>`).join('');
//       return `<div class="slider">${serviceCarouselItemHTML}</div>`
//     });
//
//     $('.container--result').append(sliderSets[index])
//     if ($('.slider').length > 0) {
//       $('.slider').slick({
//         lazyLoad: 'ondemand',
//         infinite: false,
//         arrows: true,
//         autoplay: true,
//         dots: true,
//         responsive: [
//           {
//             breakpoint: 760,
//             settings: {
//               slidesToShow: 1,
//               slideToScroll: 1,
//               infinite: false,
//               dots: false,
//               arrows: true,
//             }
//           }
//         ]
//       });
//     }
//   }
//
//   function generateResultMiniPicSets(index = 0) {
//     if ($('.miniPic--result')) {
//       $('.miniPic--result').remove()
//     }
//     if ($('.briefIntro--result')) {
//       $('.briefIntro--result').remove()
//     }
//     const miniPicSet = resultArr('電信通訊').map(function (item) {
//       const imgItems = item.pictures.map(img => `<img src="./build/images/${img}.jpg" alt="">`).join('')
//       return `<div class="briefIntro--result">
//                             <div class="briefIntro_title">${item.briefTitle}<br><span style="margin-top: 15px;font-size: 15px;">${item.subTitle}</span></div>
//                             <div class="separateLineHorizontal"></div>
//                             <div class="briefIntro_desc">${item.brief}</div>
//                         </div>
//                         <div class="miniPic--result">${imgItems}</div>`
//     });
//     // document.querySelector('.carouselVerticalNav').insertAdjacentHTML('beforeend', miniPicSet[index])
//     $('.carouselVerticalNav--result').append(miniPicSet[index]);
//     // initialize conditionBtn
//     if ($('.miniPic--result img').length > 8) {
//       $('.conditionBtn_right').css('display', 'block')
//       $('.conditionBtn_right').click(function () {
//         $('.miniPic--result').scrollTo($('.miniPic--result img:last-child'), 0)
//       })
//     } else {
//       $('.conditionBtn_right').css('display', 'none')
//       $('.conditionBtn_left').css('display', 'none')
//     }
//     $('.conditionBtn_left').click(function () {
//       $('.miniPic--result').scrollTo($('.miniPic--result img:first-child'), 0)
//     })
//     if ($('.miniPic--result img').length > 16) {
//       $('.conditionBtn_right').click(function () {
//         $('.miniPic--result').scrollTo('225px', 0)
//       })
//     }
//
//     let miniPic = $('.miniPic--result img')
//     let miniPicLength = miniPic.length
//
//     // console.log(miniPicLength);
//     miniPic.each(function (index, target) {
//       // console.log(target, index);
//       $(target).click(function () {
//         console.log(index);
//         $('.slider').slick('slickGoTo', index);
//       })
//     })
//
//     let scrollLeftPrev = 0;
//     $('.miniPic--result').scroll(function () {
//       let $elem = $('.miniPic--result');
//       let newScrollLeft = $elem.scrollLeft(),
//         width = $elem.width(),
//         scrollWidth = $elem.get(0).scrollWidth;
//       // let offset=8;
//       if (scrollWidth - newScrollLeft - width == 0) {
//         console.log('right end')
//         $('.conditionBtn_right').css('display', 'none')
//         $('.conditionBtn_left').css('display', 'block')
//       } else if (scrollWidth - newScrollLeft - width !== 0) {
//         $('.conditionBtn_right').click(function () {
//             $('.miniPic--result').scrollTo($('.miniPic--result img:last-child'), 0)
//           }
//         )
//       }
//       if ($(window).width() > 768 && miniPicLength > 8 && newScrollLeft === 0) {
//         console.log('left end')
//         $('.conditionBtn_left').css('display', 'none')
//         $('.conditionBtn_right').css('display', 'block')
//       } else if ($(window).width() < 768 && newScrollLeft === 0) {
//         $('.conditionBtn_left').css('display', 'none')
//         $('.conditionBtn_right').css('display', 'block')
//       }
//       scrollLeftPrev = newScrollLeft;
//     });
//
//   }
// });


