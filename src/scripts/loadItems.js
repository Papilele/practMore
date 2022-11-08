import json from '../../products.json';


document.addEventListener("DOMContentLoaded", function() {
    // var request = new XMLHttpRequest();
    // request.open('GET', json);
    // request.responseType = 'json';
    // request.send();
    // request.onload = loadProducts(json);
 //
    function loadProducts(data) {
        const productList = document.querySelector('.menu__item-assortment');

        data.products.forEach(product => {
            const productId = product.id;
            const productTitle = product.title;
            const productIngredients = product.ingredients;
            const productLabel = product.label;
            const productImage = product.image;
            const productPrice = product.price;

            let productCard = `
            <div class="product ${productLabel}" id="${productId}">
            <div class="product__photo">
              <img src="${productImage}" alt="${productTitle}">
            </div>
            <div class="product__description">
              <div class="product__description-header">
                <p class="product__description-title">${productTitle}</p>
                <p class="product__description-ingredients">${productIngredients}</p>
              </div>
              <div class="product__description-footer">
                <button class="product__description-button display-none-768 display-none-768">Выбрать</button>
                <p class="product__description-price display-none-768 display-none-768">от ${productPrice} ₽</p>
                <button class="product__description-button-mobile display-block-768">от ${productPrice} ₽</button>
              </div>
            </div>
          </div>
          `;

          productList.insertAdjacentHTML('beforeend', productCard); //beforeend заменить

        });
    }
    loadProducts(json);
});