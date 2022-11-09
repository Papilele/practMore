import json from '../../products.json';


document.addEventListener("DOMContentLoaded", function() {

    //РЕНДЕР ЭЛЕМЕНТОВ
    function loadProducts(data) {
        const productList = document.querySelector('.menu__item-assortment');
        productList.innerHTML = '';

        data.forEach(product => {
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

          productList.insertAdjacentHTML('beforeend', productCard);

        });
    }
    loadProducts(json.products);


    //СОРТИРОВКА
    const buttonSort = document.getElementById('pizza-sort-button');
    const wrapperSort = document.getElementById('pizza-sort');
    const sort = ['Цена: по возрастанию','Цена: по убыванию','По алфавиту'];
    let sortArray;
    let isOpen = false;

    buttonSort.addEventListener("click", function() {
        isOpen = !isOpen;
        if (isOpen == true) {
            sort.map((type, index) => {
                wrapperSort.style.display = "block";
                let button = document.createElement('button');
                button.innerHTML = type;
                button.className = "pizza-sort-type";
                button.id = index;
                wrapperSort.appendChild(button); 
            });
            buttonActivation();
        } else {
            wrapperSort.style.display = "none";
            wrapperSort.replaceChildren();
        }
    });

    var buttonActivation = function() {
        let buttonsList = document.querySelectorAll('.pizza-sort-type');

        for (let i=0; i < buttonsList.length; i++) {
            buttonsList[i].addEventListener('click', function() {

                if (buttonsList[i].id == 0) {

                  sortArray = json.products.sort((a,b) => a.price-b.price);
                  loadProducts(sortArray);
                  wrapperSort.style.display = "none";
                  isOpen = false;
                  wrapperSort.replaceChildren();

                } else if (buttonsList[i].id == 1) {

                  sortArray = json.products.sort((a,b) => b.price-a.price);
                  loadProducts(sortArray);
                  wrapperSort.style.display = "none";
                  isOpen = false;
                  wrapperSort.replaceChildren();                  

                } else {

                  sortArray = json.products.sort(function (a, b) {
                    if (a.title > b.title) {
                      return 1;
                    }
                    if (a.title < b.title) {
                      return -1;
                    }
                    return 0;
                  });
                  loadProducts(sortArray);
                  wrapperSort.style.display = "none";
                  isOpen = false;
                  wrapperSort.replaceChildren();                  

                }
            })
        }
    }
});