import iconClose from '../images/header/close_menu.svg';
import iconOpen from '../images/header/menu.svg';

document.addEventListener("DOMContentLoaded", function() {

    //Мобильная версия НАВИГАЦИИ + её анимация
const navMobile = document.querySelector(".navigation-mobile__shell");
const navWrapper = document.getElementById("navigation-mobile");
const navButton = document.getElementById("navigation-button");
const button = document.getElementById("mobile-menu-icon");
navWrapper.style.height = 0;

navButton.addEventListener("click", function() {
    if (document.documentElement.clientWidth <=768) {
        const navHeight = navMobile.offsetHeight;

        this.classList.toggle("active");

        if (navWrapper.style.height !== `${navHeight}px`) {
            navWrapper.style.height = `${navHeight}px`;
            button.src=iconClose;
        } else {
            navWrapper.style.height = 0;
            button.src=iconOpen;
        }            
    }
});


    //Мобильная версия БЛОКА О ДОСТАВКЕ + её анимация
const podrobnee = document.querySelector(".delivery__button");
const deliveryMobile = document.getElementById("delivery__wrapper");
const textElement = document.getElementById("delivery__info");
const gradient = document.querySelector('.delivery__gradient');
let windowWindth = document.documentElement.clientWidth;

const windowResize = () => {
    if (windowWindth <= 768) {
        deliveryMobile.style.height = "100px";
        gradient.style.display = "block";
        podrobnee.textContent ="Подробнее";
    }
}
windowResize();

podrobnee.addEventListener("click", function() {
    const textHeight = textElement.offsetHeight;

    this.classList.toggle("active");
    
    if (deliveryMobile.style.height == "100px") {
        deliveryMobile.style.height = `${textHeight}px`;
        gradient.style.display = "none";
        podrobnee.textContent ="Скрыть";
    } else {
        deliveryMobile.style.height = "100px";
        gradient.style.display = "block";
        podrobnee.textContent ="Подробнее";
    }
});

});