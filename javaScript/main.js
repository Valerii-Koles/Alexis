$(document).ready(function(){
    $('.carousel').slick({
    	dots:true,
    	easing:'linear',
    	autoplay:false,
    	autoplaySpeed:1000,
    	infinite:false,
    	speed:1000,
    	arrows:false
    });

     const iconMenu = document.querySelector('.menu_icon');
  if(iconMenu){
    const ourMenu = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
      iconMenu.classList.toggle("animate");
      ourMenu.classList.toggle("open");
    });

  }
});