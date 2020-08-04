"use strict";

window.addEventListener('load', function () {
  console.log('Hello world!'); // Burger menu
  // $('.js-burger').on('click', function () {
  //     $(this).toggleClass('is-open');
  // });

  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
  });
  var header = document.getElementById('header');
  var headerDarkContent = document.getElementById('header-content');
  var headerCont = document.getElementById('header-content');
  var headerContMob = document.getElementById('header-content-mob');
  var headerContMobLogo = document.getElementById('header-content-logo');
  document.getElementById('click-button').addEventListener('click', function () {
    if (pageYOffset >= 100) {
      headerDarkContent.classList.toggle('main-color-change-dark');
    } else if (pageYOffset <= 100) {
      header.classList.toggle('main-color-change');
      headerDarkContent.classList.toggle('main-color-change');
      headerContMob.classList.toggle('main-color-change'); //headerDarkContent.classList.toggle('main-color-change');
    } else {
      headerDarkContent.classList.toggle('main-color-change');
    }
  });
  $(document).ready(function () {
    $(".btn-row").click(function () {
      //$( ".header-content" ).slideToggle( "slow", "linear" ); 
      if (window.innerWidth >= 1200) {
        $(".header-content").toggle();
      } else if (window.innerWidth <= 1200) {
        $(".header-content-mobile").toggle();
      }
    });
  }); //news menu

  $(document).ready(function () {
    var $bg_blue = $('.bg-blue');
    var $bg_headerMain = $('.header');
    var bg_state = null;
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        if (bg_state != 'blue') {
          bg_state = 'blue';
          $bg_blue.stop().fadeIn("slow");
          $bg_headerMain.stop().fadeOut("slow");
        }
      } else {
        if (bg_state != 'orange') {
          bg_state = 'orange';
          $bg_blue.stop().fadeOut("slow");
          $bg_headerMain.stop().fadeIn("slow");
        }
      }
    });
  });
  $("#hidden-links a").click(function () {
    event.preventDefault();
    $(".hidden-links_block").slideToggle("linear");
  }); // $("#click-button").click(function () {
  //       $('#header-content').animate({ backgroundColor: "#FF4500"}, 400);
  // });  
  // $(document).ready(function(){
  //   $(".Box").hover(function() {
  //   $(this).stop().animate({ backgroundColor: "#FF4500"}, 400);
  //   },function() {
  //   $(this).stop().animate({ backgroundColor: "#ffffff" }, 400);
  //   });
  //   });
  // Accordion Action

  var accordionItem = document.querySelectorAll(".accordion-item");
  accordionItem.forEach(function (el) {
    return el.addEventListener("click", function () {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        accordionItem.forEach(function (el2) {
          return el2.classList.remove("active");
        });
        el.classList.add("active");
      }
    });
  });
  console.log('All resources finished loading!');
  $('.animation-form__slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true //cssEase: 'linear'

  });
});
//# sourceMappingURL=main.js.map
