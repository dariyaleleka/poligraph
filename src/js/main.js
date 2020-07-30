window.addEventListener('load', function() {


  //= include log.js

  console.log('All resources finished loading!');

  $('.animation-form__slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    //cssEase: 'linear'
  });
});
