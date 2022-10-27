import './index.html';
import './styles/index.scss';
import './scripts/locationcity.js';
import iconClose from './images/header/close_menu.svg';
import iconOpen from './images/header/menu.svg';

let d = document.getElementsByClassName('product__description-ingredients');
let h = document.getElementsByClassName('product__description-title');
let productCardDescriptionResizing = () => {
    for (let i=0; i < h.length; i++) {
        if (h[i].clientHeight > 24) {
            d[i].setAttribute("style","-webkit-line-clamp:1 !important;display:-webkit-box;-webkit-box-orient: vertical;overflow: hidden;");
        }
    }
}
productCardDescriptionResizing();

window.addEventListener('resize', function(event){
    productCardDescriptionResizing();
});

const acc = document.getElementsByClassName("navigation");
const button = document.getElementById("mobile-menu-icon");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        if (document.documentElement.clientWidth <=768) {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                button.src=iconOpen;
            } else {
                panel.style.display = "block";
                button.src=iconClose;
            }            
        }
    });
}
const podrobnee = document.getElementsByClassName("delivery__button");
var panel = document.getElementById("delivery__info");
let windowWindth = document.documentElement.clientWidth;
let gradient = document.getElementsByClassName('delivery__gradient');
const windowResize = () => {
    if (windowWindth <= 768) {
        panel.style.maxHeight = "100px";
        gradient[0].style.display = "block";
        podrobnee[0].textContent ="Подробнее";
    }
}
windowResize();


for (let i = 0; i < acc.length; i++) {
    podrobnee[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        
        if (panel.style.maxHeight == "100px") {
            panel.style.maxHeight = "100%";
            gradient[0].style.display = "none";
            podrobnee[0].textContent ="Скрыть";
        } else {
            panel.style.maxHeight = "100px";
            gradient[0].style.display = "block";
            podrobnee[0].textContent ="Подробнее";
        }
    });
}



const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
        },

        720: {
            slidesPerView: 2.3,
            
        },

        600: {
            slidesPerView: 2,
        },

        550: {
            slidesPerView: 1.8,
        },

        480: {
            slidesPerView: 1.6,
        },

        440: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        },
        400: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },

        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    },
});

const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 4,
    breakpoints: {
        768: {
            slidesPerView: 8,
        },
        750: {
            slidesPerView: 6.7,
        },
        700: {
            slidesPerView: 6,
        },
        650: {
            slidesPerView: 5.7,
        },
        600: {
            slidesPerView: 5,
        },
        550: {
            slidesPerView: 4.7,
        },
        450: {
            slidesPerView: 4,
        },
        400: {
            slidesPerView: 3.4,
        },
        350: {
            slidesPerView: 3,
        },

    },
});