var mybutton = document.getElementById("topBtn");



// Inner Logos
class sliderLogos extends HTMLElement{
  connectedCallback(){
    this.innerHTML =
    `
    <div class="slider-logo">
      <div class="logo-container">
          <section class="foot-logos slider">
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-1.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-2.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-3.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-4.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-5.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-6.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-1.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-2.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-3.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-4.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-5.png" alt="">
              </div>
              <div class="slide">
                  <img width="100" height="95" src="https://smartdemowp.com/hanta/wp-content/uploads/2020/10/clients-logo-6.png" alt="">
              </div>
          </section>
      </div>
    </div>
    `
  }
}
customElements.define('slider-logos', sliderLogos);

// Re-use
$(function(){
    $("#navbar-placeholder").load("navbar.html");
});

$(function(){
    $("#preloader").load("preloader.html");
});

$(function(){
  $("#footer").load("footer.html");
});

// Preloader fadeout
$(window).on('load', function(){
  setTimeout(removeLoader, 1500);
});
function removeLoader(){
  $("#preloader").fadeOut(500);
  // $(window).scrollTop(0);
}

// Slider Header Background
var headerChange = document.querySelector('.header-bc');

var i = 0;
var images = [];
images[0] = 'https://smartdemowp.com/hanta/wp-content/uploads/2020/10/banner-1.png';
images[1] = 'https://smartdemowp.com/hanta/wp-content/uploads/2020/10/banner-3.png';

function prevBc(){
  if (i <= 0) i = images.length;
  i--;
  return changeBc();
}

function nextBc(){
  if(i >= images.length-1) i=-1;
  i++;
  return changeBc();
}

function changeBc(){
  headerChange.style.backgroundImage = "url(" + images[i] + ")";
}


// Scroll down fade nav & btn
window.addEventListener('scroll', function(){
  document.getElementById("second__nav").style.top = 0 + "px";
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("second__nav").style.background = "#cb9744";
      document.getElementById("second__nav").style.opacity = "1";

      // Btn
      mybutton.style.top = "85%";
  } else {
        document.getElementById("second__nav").style.top = "-100%";
        document.getElementById("second__nav").style.background = "transparent";
        document.getElementById("second__nav").style.opacity = "0.6";

        // Btn
        mybutton.style.top = "-100%";
  }
})

// Back to top
mybutton.addEventListener('click', function(event){
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "smooth");
  return false;
})


// Count number
const counters = document.querySelectorAll('.count');
console.log(counters)
const speed = 600;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Logo slider
$(document).ready(function(){
  $('.foot-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});

// Multiple Items
$(document).ready(function(){
    $('.multiple-items').slick({
      infinite: true,
      loop: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 5000,
      autoplay: true,
      prevArrow: $('.think-btn--prev'),
      nextArrow: $('.think-btn--next'),
      pauseOnHover: false,
      dots: true,
  });
});

// Single Items
$(document).ready(function(){
  $('.single-items').slick({
    infinite: true,
    loop: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    prevArrow: $('.think-btn--prev'),
    nextArrow: $('.think-btn--next'),
    pauseOnHover: false,
    dots: true,
  });
});

// Tabs UI About Home Second
function TabsAbout(){
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tabs = $$(".tab-item");
  const panes = $$(".tab-pane");

  const tabActive = $(".tab-item.active");

  tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");

      this.classList.add("active");
      pane.classList.add("active");
    };
  });
};

TabsAbout();