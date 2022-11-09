document.addEventListener("DOMContentLoaded", function() {
    const buttonFilter = document.getElementById('pizza-filter-button');
    const wrapperFilter = document.getElementById('filter-pizza');
    const pizzaIngredients = ['Курица','Халапеньо','Ананас','Пепперони','Моцарелла'];
    let isOpen = false;

    buttonFilter.addEventListener("click", function() {
        isOpen = !isOpen;
        if (isOpen == true) {
            pizzaIngredients.map((ingredient) => {
                wrapperFilter.style.display = "block";
                let button = document.createElement('button');
                button.innerHTML = ingredient;
                button.className = "pizza-ingredient";
                wrapperFilter.appendChild(button); 
            });
            buttonActivation();
        } else {
            wrapperFilter.style.display = "none";
            wrapperFilter.replaceChildren();
        }
    });

    buttonActivation = function() {
        let buttonsList = document.querySelectorAll('.pizza-ingredient');

        for (let i=0; i < buttonsList.length; i++) {
            buttonsList[i].addEventListener('click', function() {
                buttonsList[i].classList.toggle('pizza-ingredient-selected');
            })
        }
    }

});