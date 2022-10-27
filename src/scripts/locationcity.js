let button = document.getElementById('locationcity');
let wrapper = document.getElementById('locationcity__select');
const citiesList = ["Москва", "Санкт-Петербург", "Ростов-на-Дону", "Краснодар", "Рыбинск", "Тверь"];
let currentCity = document.querySelector('.locationcity__title').innerHTML;
let isOpen = false;

button.addEventListener("click", function() {
    isOpen = !isOpen;
    if (isOpen == true) {
        citiesList.map((city) => {
            wrapper.style.display = "block";
            let div = document.createElement('div');
            div.innerHTML = city;
            div.className = "locationcity__select-item";
            wrapper.appendChild(div);
        });
    } else {
        wrapper.style.display = "none";
        wrapper.replaceChildren();
    }
});

let citiesHtml = document.getElementsByClassName('locationcity__select-item');

// for (let i = 0; i < citiesHtml.length; i++) {
//     citiesHtml[i].addEventListener("click", function() {
//         console.log(citiesHtml[i]);
//     })};
