import json from '../../products.json';
import { productCardDescriptionResizing } from '../index.js';


document.addEventListener("DOMContentLoaded", function() {

    let products = json.products;

    //РЕНДЕР ЭЛЕМЕНТОВ
    function loadProducts(data) {
        const productList = document.querySelector('.menu__item-assortment');
        productList.innerHTML = '';
        console.log("loadProducts массив " + data)

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
                <p class="product__description-ingredients">${productIngredients.join(', ')}</p>
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
        productCardDescriptionResizing();
    }
    loadProducts(products);


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
            buttonActivationSort();
        } else {
            wrapperSort.style.display = "none";
            wrapperSort.replaceChildren();
        }
    });

    var buttonActivationSort = function() {
        let buttonsList = document.querySelectorAll('.pizza-sort-type');

        for (let x=0; x < buttonsList.length; x++) {
            buttonsList[x].addEventListener('click', function() {

                if (buttonsList[x].id == 0) {

                  sortArray = json.products.sort((a,b) => a.price-b.price);
                  loadProducts(sortArray);
                  wrapperSort.style.display = "none";
                  isOpen = false;
                  wrapperSort.replaceChildren();

                } else if (buttonsList[x].id == 1) {

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


    //ФИЛЬТРАЦИЯ

    const buttonFilter = document.getElementById('pizza-filter-button');
    const wrapperFilter = document.getElementById('filter-pizza');
    const pizzaIngredients = ['Курица','Халапеньо','Ананас','Пепперони','Моцарелла','Бекон'];
    let isOpenFilter = false;
    let selectedIngredients = [];


    buttonFilter.addEventListener("click", function() {
        isOpenFilter = !isOpenFilter;
        if (isOpenFilter == true) {
            pizzaIngredients.map((ingredient) => {
                wrapperFilter.style.display = "block";
                let button = document.createElement('button');
                button.innerHTML = ingredient;
                button.className = "pizza-ingredient";
                wrapperFilter.appendChild(button); 
            });
            buttonActivationFilter();
            let showAll = document.createElement('button');
            showAll.innerHTML = 'Показать все';
            showAll.className = "show-all";
            showAll.id = "show-all";
            wrapperFilter.appendChild(showAll);
        } else {
            wrapperFilter.style.display = "none";
            wrapperFilter.replaceChildren();
        }
        
        document.getElementById('show-all').addEventListener('click', function() {
          let sortedSelectedIng = selectedIngredients.sort();
          let sortResult = [];
          let count = 0;

          for (let i=0; i < products.length; i++) {
            count = 0;
            console.log(i + ' -i`ый элемент')
            for (let j=0; j < sortedSelectedIng.length; j++) {
              console.log(i + ' -j`ый')
              if (products[i].ingredients.join().includes(sortedSelectedIng[j])) {
                count++;
                console.log('count='+count)
              }
            }
            if (sortedSelectedIng.length == count) {
              sortResult.push(products[i]);
            }
          }
          loadProducts(sortResult);
        });

    });

    var buttonActivationFilter = function() {
        let buttonsList = document.querySelectorAll('.pizza-ingredient');

        for (let y=0; y < buttonsList.length; y++) {
            buttonsList[y].addEventListener('click', function() {
                buttonsList[y].classList.toggle('pizza-ingredient-selected');
                if (buttonsList[y].classList.contains('pizza-ingredient-selected')) {
                  selectedIngredients.push(buttonsList[y].innerHTML);
                  console.log(selectedIngredients);
                } else {
                  selectedIngredients.splice(selectedIngredients.indexOf(buttonsList[y].innerHTML), 1);
                  console.log(selectedIngredients);
                }
            })
        }
    };
});