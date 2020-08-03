console.log('Hello world!');
// Burger menu
// $('.js-burger').on('click', function () {
//     $(this).toggleClass('is-open');
// });

$(".burger-menu").click(function () {
  $(this).toggleClass("menu-on");
});

$( document ).ready(function(){
    $( ".btn-row" ).click(function(){ 
      //$( ".header-content" ).slideToggle( "slow", "linear" ); 
      if(window.innerWidth >= 1200) {
            $( ".header-content" ).slideToggle("slow", "linear" );
            
      }else if(window.innerWidth <= 1200){
            $( ".header-content-mobile" ).slideToggle( "slow", "linear" ); 
      }
    });
});

//news menu

$(document).ready(function(){

  var $bg_blue = $('.bg-blue');
  var $bg_headerMain = $('.header');
	var bg_state = null;

  $(window).scroll(function() {
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



// $(document).ready(function(){

//   let header = document.getElementById('header');
//   let headerDarkContent = document.getElementById('header-content');
//   let headerCont = document.getElementById('header-content');
//   let headerContMob = document.getElementById('header-content-mob');

//   let headerContMobLogo = document.getElementById('header-content-logo');

//   $(window).scroll(function() {
// 		if ($(this).scrollTop() > 100) {
//       console.log('Скролл больше 100 ')

//       //header.classList.toggle('main-color-change');
//       //headerCont.classList.toggle('main-color-change');

//       headerContMob.classList.toggle('main-color-change');
//       headerDarkContent.classList.toggle('main-color-change-dark');

// 		} else if($(this).scrollTop() < 100) {

// 			header.classList.toggle('main-color-change');
//       headerDarkContent.classList.toggle('main-color-change');

//       console.log('Скролл меньше 100 ');

// 		}
//   });
    
// });

// $(function() {
//   $(".burger-menu").click(function() {
//       //$(".bg-content").addClass("active-menu");         

//       // if(pageXOffset < 576) {
//       //   $(".bg-content").toggleClass("active-menu-mob");
//       // }else{
//         $(".bg-content").toggleClass("active-menu"); 
//       //}
//   })
// });

  $( "#hidden-links a" ).click(function(){ 
    event.preventDefault();
    $( ".hidden-links_block" ).slideToggle( "linear" ); 
  });


  // document.getElementById('click-button').addEventListener('click', function() {
    
  //   if(pageYOffset > 100){

  //     console.log('Скролл больше 100 ')
  //     // header.classList.toggle('main-color-change');
  //     // headerCont.classList.toggle('main-color-change');
  //     // headerContMob.classList.toggle('main-color-change');
  //      headerDarkContent.classList.toggle('main-color-change-dark');


  //     //header.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), rgba(255, 255, 255, 0.3)';
  //     //headerCont.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), rgba(255, 255, 255, 0.3)';
  //     //headerContMob.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), rgba(255, 255, 255, 0.3)';

  //   }else if(window.innerHeight < 100){
     
  //     // header.classList.toggle('main-color-change');
  //     // headerDark.classList.toggle('main-color-change');
  //     console.log('Скролл меньше 100 ')
  //   }
  // });
  let header = document.getElementById('header');
  let headerDarkContent = document.getElementById('header-content');
  let headerCont = document.getElementById('header-content');
  let headerContMob = document.getElementById('header-content-mob');
  let headerContMobLogo = document.getElementById('header-content-logo');

  document.getElementById('click-button').addEventListener('click', function() {
  
    if(pageYOffset >= 100){

      headerDarkContent.classList.toggle('main-color-change-dark');

    }else if(pageYOffset <= 100){

      header.classList.toggle('main-color-change');
      headerDarkContent.classList.toggle('main-color-change');
      headerContMob.classList.toggle('main-color-change');
      //headerDarkContent.classList.toggle('main-color-change');
    }else{
      headerDarkContent.classList.toggle('main-color-change');
    }
  });
  

// Accordion Action
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);




  // $( ".click-button" ).click(function(){ 
  //   //$( ".header-content" ).slideToggle( "slow", "linear" ); 
  //   if(window.innerWidth <= 576) {
  //         $( ".header" ).classList.toggle('main--main-bg');
  //   }else {
  //         //$( ".header" ).slideToggle( "slow", "linear" ); 
  //   }
  // });
  //let changeColor = document.getElementById('click-button');
  
  