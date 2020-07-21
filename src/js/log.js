console.log('Hello world!');
// Burger menu
$('.js-burger').on('click', function () {
    $(this).toggleClass('is-open');
});

$( document ).ready(function(){
    $( ".btn-row" ).click(function(){ 
      //$( ".header-content" ).slideToggle( "slow", "linear" ); 
      if(window.innerWidth >= 1440) {
            $( ".header-content" ).slideToggle( "slow", "linear" ); 
      }else if(window.innerWidth <= 1200){
            $( ".header-content-mobile" ).slideToggle( "slow", "linear" ); 
      }
    });
});

console.log(window.innerWidth)

