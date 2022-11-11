import './index.html';
import './styles/index.scss';
import './scripts/locationcity.js';
import './scripts/loadItems.js';
import './scripts/swiperSetting.js';
import './scripts/mobileAnimation.js';


document.addEventListener("DOMContentLoaded", function() {
    //Меняем количество отображаемых строк ингридентов товара
let productIngridients = document.getElementsByClassName('product__description-ingredients');
let productTitle = document.getElementsByClassName('product__description-title');
let productCardDescriptionResizing = () => {
    for (let i=0; i < productTitle.length; i++) {
        if (productTitle[i].clientHeight > 24) {
            productIngridients[i].setAttribute("style","-webkit-line-clamp:1 !important;display:-webkit-box;-webkit-box-orient: vertical;overflow: hidden;");
        }
    }
}
productCardDescriptionResizing();

window.addEventListener('resize', function(event){
    productCardDescriptionResizing();
});

});
