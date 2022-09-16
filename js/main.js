// add class position fixed --
function fixedMenu(){

    let fixed = document.getElementById("fixed_id");
    let logo = document.getElementById("logo-main");
    let logoTwo = document.getElementById("logo-main-two");

    let mywindows = window.onscroll = () => {
        if(window.scrollY > 80){
            fixed.setAttribute("class", "active");
            logo.style.display = "none";
            logoTwo.style.display = "block";
        }else{
            fixed.removeAttribute("class", "active");
            logo.style.display = "block";
            logoTwo.style.display = "none";
        };
    };
};
fixedMenu();



// swiper 

function swiper() {
 
    const swiper = new Swiper('.swiper', {
    
      // Optional parameters
      direction: 'horizontal',
      
      loop: true,
      speed: 1000,
      spaceBetween: 200,
      effect: 'fade',
      centeredSlides: false,
      fadeEffect: {
        crossFade: true,
        depth: 100,
      },
    
        // autoplay: {
        //   delay: 4000,
        // },
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      scrollbar: {
      el: '.swiper-scrollbar',
      draggable: null,
      verticalClass: "swiper-scrollbar-vertical",
      },
    
    });

}

swiper();



function swiperService(){


  var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    direction: 'horizontal',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

     // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    640: {
      // allowTouchMove: false,
      slidesPerView: 2,
      spaceBetween: 15
    },
    901: {
      allowTouchMove: true,
      slidesPerView: 2,
      spaceBetween: 15,
 
    },
    1150: {
      allowTouchMove: false,
      slidesPerView: 4,
      spaceBetween: 15
    }
  }



  });
  console.log(swiper)

}

swiperService();
