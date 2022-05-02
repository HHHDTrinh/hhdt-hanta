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

class navbarInner extends HTMLElement{
  connectedCallback(){
    this.innerHTML =
    `
    <nav id="navbar">
            <div class="large__container nav__container">
                <div class="nav__left">
                    <a class="logo-white" href="../../index.html">
                        <img src="https://smartdemowp.com/hanta/wp-content/uploads/Group-1.svg" alt="" class="nav__left-img">
                    </a>
                    <a class="logo-black" href="../index.html">
                        <img src="https://smartdemowp.com/hanta/wp-content/themes/hanta/assets/images/logo-3.svg" alt="">
                    </a>
                </div>
                <div class="nav__center">
                    <ul class="nav__link">
                        <li>
                            <a href="../index.html">home</a>
                            <ul class="subnav">
                                <li><a href="../index.html">home page 01</a></li>
                                <li><a href="../pages/">home page 02</a></li>
                                <li class="menu-with-icon">
                                    <a href="../index.html">header style</a>
                                    <i class="ri-arrow-right-s-line"></i>
                                    <ul class="subnav subnav-second">
                                        <li><a href="../index.html">header style one</a></li>
                                        <li><a href="../pages/homeSecond.html">header style two</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="">pages</a>
                            <ul class="subnav">
                                <li><a href="../pages/about.html">about us</a></li>
                                <li><a href="../pages/services.html">our services</a></li>
                                <li><a href="../pages/details.html">service details</a></li>
                                <li><a href="../pages/gallery.html">gallery</a></li>
                                <li><a href="../pages/error.html">error page</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">shop</a>
                            <ul class="subnav">
                                <li><a href="../pages/shop4c.html">shop four column</a></li>
                                <li><a href="">shop with sidebar</a></li>
                                <li><a href="../pages/shopdetails.html">shop details</a></li>
                                <li><a href="../pages/cart.html">shopping cart</a></li>
                                <li><a href="../pages/cart.html">check out</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="../pages/blog.html">blog</a>
                            <ul class="subnav">
                                <li><a href="../pages/blog.html">blog grid</a></li>
                                <li><a href="">blog standard</a></li>
                                <li><a href="">blog details</a></li>
                            </ul>
                        </li>
                        <li><a href="../pages/contact.html">contact us</a></li>
                    </ul>
                    <div class="nav__link-mobile nav__link-mobile-js">
                        <i class="ri-menu-fill"></i>
                    </div>
                    <ul class="nav__center-icon">
                        <li>
                            <div class="search__show">
                                <button class="search-btn" type="button">
                                    <i class="ri-search-line"></i>
                                </button>
                                <div class="search__form">
                                    <div class="form__container">
                                        <form action="">
                                            <div class="form__items">
                                                <input type="search" name="" placeholder="Search..." required id="">
                                                <button type="submit">
                                                    <i class="ri-search-line"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="../pages/cart.html">
                                <i class="ri-shopping-cart-2-line nav__cart-ic"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav__right">
                    <div class="nav__socials">
                        <a href="#"><i class="ri-facebook-fill"></i></a>
                        <a href="#"><i class="ri-twitter-fill"></i></a>
                        <a href="#">
                            <svg class="gg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"/></svg>
                        </a>
                        <a href="#"><i class="ri-instagram-line"></i></a>
                        <a href="#"><i class="ri-pinterest-line"></i></a>
                    </div>
                </div>
            </div>
            <!-- Scroll Down Navbar -->
            <nav id="second__nav">
                <div class="second-nav__container">
                    <div class="nav__left">
                        <a href="../index.html">
                            <img src="https://smartdemowp.com/hanta/wp-content/uploads/Group-1.svg" alt="" class="nav__left-img">
                        </a>
                    </div>
                    <div class="nav__center">
                        <ul class="nav__link">
                            <li>
                                <a href="../index.html">home</a>
                                <ul class="subnav">
                                    <li><a href="../index.html">home page 01</a></li>
                                    <li><a href="../pages/">home page 02</a></li>
                                    <li class="menu-with-icon">
                                        <a href="../index.html">header style</a>
                                        <i class="ri-arrow-right-s-line"></i>
                                        <ul class="subnav subnav-second">
                                            <li><a href="../index.html">header style one</a></li>
                                            <li><a href="../pages/homeSecond.html">header style two</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="">pages</a>
                                <ul class="subnav">
                                    <li><a href="../pages/about.html">about us</a></li>
                                    <li><a href="../pages/services.html">our services</a></li>
                                    <li><a href="../pages/details.html">service details</a></li>
                                    <li><a href="../pages/gallery.html">gallery</a></li>
                                    <li><a href="../pages/error.html">error page</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="">shop</a>
                                <ul class="subnav">
                                    <li><a href="../pages/shop4c.html">shop four column</a></li>
                                    <li><a href="">shop with sidebar</a></li>
                                    <li><a href="../pages/shopdetails.html">shop details</a></li>
                                    <li><a href="../pages/cart.html">shopping cart</a></li>
                                    <li><a href="../pages/cart.html">check out</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="../pages/blog.html">blog</a>
                                <ul class="subnav">
                                    <li><a href="../pages/blog.html">blog grid</a></li>
                                    <li><a href="">blog standard</a></li>
                                    <li><a href="">blog details</a></li>
                                </ul>
                            </li>
                            <li><a href="../pages/contact.html">contact us</a></li>
                        </ul>
                        <ul class="nav__center-icon">
                            <li>
                                <div class="search__show">
                                    <button class="search-btn" type="button">
                                        <i class="ri-search-line"></i>
                                    </button>
                                    <div class="search__form">
                                        <div class="form__container">
                                            <form action="">
                                                <div class="form__items">
                                                    <input type="search" name="" placeholder="Search..." required id="">
                                                    <button type="submit">
                                                        <i class="ri-search-line"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="../pages/cart.html">
                                    <i class="ri-shopping-cart-2-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="nav__right">
                        <div class="nav__socials">
                            <a href="#"><i class="ri-facebook-fill"></i></a>
                            <a href="#"><i class="ri-twitter-fill"></i></a>
                            <a href="#">
                                <img src="../assets/img/nav-icon/google-plus-g-brands.svg" class="google-plus" alt="">
                            </a>
                            <a href="#"><i class="ri-instagram-line"></i></a>
                            <a href="#"><i class="ri-pinterest-line"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Resp menu -->
            <div class="mobile-menu mobile-menu-js">
                <div class="menu-backdrop menu-backdrop-js">
                </div>
                <div class="close-btn close-btn-js">
                    <i class="ri-close-fill"></i>
                </div>
                <nav class="menu-box">
                    <div class="menu-box-container">
                        <div class="menu-box-content">
                            <div class="nav-logo">
                                <a href="index.html">
                                    <img src="https://smartdemowp.com/hanta/wp-content/uploads/Group-1.svg" alt="" class="menu-logo">
                                </a>
                            </div>
                            <div class="menu-outer">
                                <ul class="primary-menu">
                                    <li class="primary-menu-item menu-item-has-children">
                                        <a href="../index.html">home</a>
                                        <ul class="sub-menu sub-menu-js">
                                            <li>
                                                <a href="../index.html">Home Page 01</a>
                                            </li>
                                            <li>
                                                <a href="../pages/homeSecond.html">Home Page 02</a>
                                            </li>
                                            <li>
                                                <a href="../index.html">Header Style</a>
                                            <ul class="sub-menu sub-menu-js">
                                                <li>
                                                    <a href="../index.html">Header Style One</a>
                                                </li>
                                                <li>
                                                    <a href="../pages/homeSecond.html">Home Page Two</a>
                                                </li>
                                            </ul>
                                            <div class="dropdown-btn dropdown-btn-js">
                                                <i class="ri-arrow-down-s-line"></i>
                                            </div>
                                        </ul>
                                        <div class="dropdown-btn dropdown-btn-js">
                                            <i class="ri-arrow-down-s-line"></i>
                                        </div>
                                    </li>
                                    <li class="primary-menu-item menu-item-has-children">
                                        <a href="../pages/about.html">pages</a>
                                        <ul class="sub-menu sub-menu-js">
                                            <li>
                                                <a href="../pages/about.html">about us</a>
                                            </li>
                                            <li>
                                                <a href="../pages/services.html">our service</a>
                                            </li>
                                            <li>
                                                <a href="../pages/details.html">service details</a>
                                            </li>
                                            <li>
                                                <a href="../pages/gallery.html">gallery</a>
                                            </li>
                                            <li>
                                                <a href="../pages/error.html">error page</a>
                                            </li>
                                        </ul>
                                        <div class="dropdown-btn dropdown-btn-js">
                                            <i class="ri-arrow-down-s-line"></i>
                                        </div>
                                    </li>
                                    <li class="primary-menu-item menu-item-has-children">
                                        <a href="../pages/shop4c.html">shop</a>
                                        <ul class="sub-menu sub-menu-js">
                                            <li>
                                                <a href="../pages/shop4c.html">shop four column</a>
                                            </li>
                                            <li>
                                                <a href="../pages/cart.html">shopping cart</a>
                                            </li>
                                            <li>
                                                <a href="../pages/cart.html">checkout</a>
                                            </li>
                                        </ul>
                                        <div class="dropdown-btn dropdown-btn-js">
                                            <i class="ri-arrow-down-s-line"></i>
                                        </div>
                                    </li>
                                    <li class="primary-menu-item menu-item-has-children menu-item-has-children-js">
                                        <a href="../pages/blog.html">blog</a>
                                        <ul class="sub-menu sub-menu-js">
                                            <li>
                                                <a href="../pages/blog.html">blog grid</a>
                                            </li>
                                        </ul>
                                        <div class="dropdown-btn dropdown-btn-js">
                                            <i class="ri-arrow-down-s-line"></i>
                                        </div>
                                    </li>
                                    <li class="primary-menu-item">
                                        <a href="../pages/contact.html">contact us</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="contact-info">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>Chicago 12, Melborne City, USA</li>
                                    <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                                    <li><a href="mailto:info@example.com">info@hanta.com</a></li>
                                </ul>
                            </div>
                            <div class="social-links">
                                <ul>
                                    <li><a href="#_"><span class="ri-twitter-fill"></span></a></li>
                                    <li><a href="#_"><span class="ri-facebook-box-fill"></span></a></li>
                                    <li><a href="#_"><span class="ri-pinterest-line"></span></a></li>
                                    <li><a href="#_"><span class="ri-instagram-line"></span></a></li>
                                    <li><a href="#_"><span class="ri-youtube-fill"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
        `
  }
}
customElements.define('navbar-inners', navbarInner);

// Re-use
$(function(){
    $("#preloader").load("preloader.html");
});

$(function(){
  $("#footer").load("footer.html");
});

$(function(){
  $("#menu").load("mobileMenu.html");
});

// Preloader fadeout
$(window).on('load', function(){
  setTimeout(removeLoader, 1500);
});
function removeLoader(){
  $("#preloader").fadeOut(500);
  // $(window).scrollTop(0);
  $(".preloader").fadeOut(500);
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
  document.getElementById("second__nav").style.top = "0px";
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
          breakpoint: 1023,
          settings: {
              slidesToShow: 3
          }
      }, {
          breakpoint: 739,
          settings: {
              slidesToShow: 1
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
      responsive: [{
        breakpoint: 1023,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 739,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }]
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
    responsive: [{
      breakpoint: 1023,
      settings: {
          slidesToShow: 1
      }
  }, {
      breakpoint: 739,
      settings: {
          slidesToShow: 1,
          dots: false
      }
  }]
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


// menuModal - Honey & Sweets Pages
// function menuModal(){
//   const Show = document.querySelector('.nice-select-js')

//   function OpenModal(){
//     Show.classList.add('open')
//   }

//   function CloseModal(){
//     Show.classList.remove('open')
//   }


//   Show.addEventListener('click', OpenModal)
// }

// menuModal();

// MenuMobile
function MenuMobile(){
  const menuMobile = document.querySelector('.mobile-menu-js');
  const hambuger = document.querySelector('.nav__link-mobile-js');
  const closeBtn = document.querySelector('.close-btn-js');
  const menuMobileContainer = document.querySelector('.menu-backdrop-js');

  function showModal(){
    menuMobile.classList.add('open');
  }

  function closeModal(){
    menuMobile.classList.remove('open');
  }

  hambuger.addEventListener('click', showModal);
  

  closeBtn.addEventListener('click', closeModal);
  menuMobileContainer.addEventListener('click', closeModal);
}

MenuMobile();

// Submenu mobile
function subMobile(){
    var  dropBtns = document.querySelectorAll('.dropdown-btn-js');
    dropBtns.forEach(item =>{
        item.addEventListener('click', function(){
            item.classList.toggle('open');
        })
    })
}

subMobile();

$(document).ready(function(){
    $('.dropdown-btn-js').on("click", function(e){
      $(this).prev('ul').toggle('open');
      e.stopPropagation();
      e.preventDefault();
    });
});