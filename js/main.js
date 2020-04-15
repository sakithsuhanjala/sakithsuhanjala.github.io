jQuery(document).ready(function(){
    
    $('#nav').slicknav();
  jQuery('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 2000
  });
});   
    
$('.collapse').collapse();    

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})