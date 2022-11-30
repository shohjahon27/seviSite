window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader"),
      loadingImg = document.querySelector(".loadingImg"),
      card = document.querySelector(".card");

  // LOADER

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);

  // POST IMAGE LOADING
    setTimeout(() => {
        card.classList.toggle( "hidden" );
    }, 2000 );
      setTimeout( () => {
          loadingImg.style.display = "none";
      }, 2000 )
    
    
    
    // CARUSEL
$(document).ready(function () {
  $(".slick-slider").slick({
    slidesToShow: 5,
    infinite: true,
    arrows: true,
    speed: 600,
    autoplay: true,
    cssEase: "cubic-bezier(.8,-0.5,.4,1.2)",
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});


});
