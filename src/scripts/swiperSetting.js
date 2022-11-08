document.addEventListener("DOMContentLoaded", function() {
    
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

});