// add class position fixed --
function fixedMenu(){

    let fixed = document.getElementById("fixed_id");
    let logo = document.getElementById("logo-main");
    let logoTwo = document.getElementById("logo-main-two");

    let mywindows = window.onscroll = () => {
        if(window.scrollY > 80){
            fixed.setAttribute("class", "active-main");
            logo.style.display = "none";
            logoTwo.style.display = "block";
        }else{
            fixed.removeAttribute("class", "active-main");
            logo.style.display = "block";
            logoTwo.style.display = "none";
        };
    };
};
fixedMenu();


// Start swiper first slider --------
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
    
        autoplay: {
          delay: 4000,
        },
    
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
// End swiper first slider --------


// Start swiper about slider --------
function swiperService(){

  var swiper = new Swiper(".myswiper", {
    slidesPerView:4,
    direction: 'horizontal',
    spaceBetween: 0,
    grabCursor: true,
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  // Responsive breakpoints
    breakpoints: {

      250: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        grid: {
          rows: 1,
        },
      },


      // when window width is >= 320px
      320: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        grid: {
          rows: 1,
        },
      },
      // when window width is >= 480px
  
      499:{
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
        grid: {
          rows: 1,
        },
      },
      // when window width is >= 640px
      640: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
        grid: {
          rows: 1,
        },
      },
      901: {
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: false,
        grid: {
          rows: 2,
        },
  
      },
      
      1151: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 15,
        grid: {
          rows: 1,
        },
        
      }
    }
  });
}
swiperService();
// Send swiper about slider --------


// Start random sample work backgroundColor ---------------
function bgColornew(){

  let randomColor = new Array("#7935f8", "#EEA1B3", "#CAEB91");
  let boxWork = document.querySelectorAll(".box-sample-work").forEach((i) => {
    i.style.backgroundColor = randomColor[Math.floor(Math.random()*randomColor.length)];
  });
};
bgColornew();
// End random sample work backgroundColor ---------------


// Start Our Partner ---------------------------
function partnerSlider() {
  const swiper = new Swiper('.Swiper-partner', {
    // Optional parameters

 
    direction: 'horizontal',
    // loop: true,
    slidesPerView:1,
 
      // Responsive breakpoints
      breakpoints: {

        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 0,
          allowTouchMove: true,
          grid: {
            rows: 1,
          },
        },
        // when window width is >= 480px
    
        499:{
          slidesPerView: 2,
          spaceBetween: 0,
          allowTouchMove: true,
          slidesPerGroup: 1,
          grid: {
            rows: 1,
          },
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
          allowTouchMove: true,
          slidesPerGroup: 1,
          grid: {
            rows: 1,
          },
 
        },
        900: {
          slidesPerView: 5,
          spaceBetween:0,
          allowTouchMove: false,
          grid: {
            rows: 1,
          },
        },
        
        1151: {
          slidesPerView: 5,
          spaceBetween: 0,
          allowTouchMove: false,
          grid: {
            rows: 1,
          },
        }
      }
  });
}
partnerSlider();
// End Our Partner ---------------------------



function sipeerBlog(){
  const swiper = new Swiper('.Swiper-blog', {
    // Optional parameters
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
 
    direction: 'horizontal',
    // loop: true,
    slidesPerView:1,
 
      // Responsive breakpoints
      breakpoints: {

        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
          allowTouchMove: true,
        },
        // when window width is >= 480px
    
        499:{
          slidesPerView: 1,
          spaceBetween: 15,
          allowTouchMove: true,
          slidesPerGroup: 1,
        },
        // when window width is >= 640px
        600: {
          slidesPerView: 1.5,
          spaceBetween: 15,
          allowTouchMove: true,
          slidesPerGroup: 1,
 
        },
        806: {
          slidesPerView: 2.5,
          spaceBetween: 15,
          allowTouchMove: true,
 
        },
        950: {
          slidesPerView: 3,
          spaceBetween: 15,
          allowTouchMove: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        },
        
        1151: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
        }
      }
  });

}

sipeerBlog()
