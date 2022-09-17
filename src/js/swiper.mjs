const swiper = new Swiper('.swiper', {
    
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    simulateTouch: true,

    slideToClickedSlide: true,

    keyboard: {
      enabled: true,
      onlyOnViewport: true,
      pageUpDown: true,
    },

    mousewheel: {
      sensitivity: 1,
      eventsTarget: ".swiper-slide"
    }
  });  

  export default swiper