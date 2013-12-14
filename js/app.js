$(document).ready(function() {
 
  $("#img-carousel").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 350,
      paginationSpeed : 400,
      singleItem: true,
      autoPlay: false,
      transitionStyle: false,
      navigation: true,
      pagination: false,
      stopOnHover : true,
      navigationText : ["&#xf27f;","&#xf280;"],
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});