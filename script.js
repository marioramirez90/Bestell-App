function init(){
    renderBurger();
    renderPizza();
    renderSalad();
    renderBusket()
}

function renderBurger(){
    let burgerRef = document.getElementById("burgerMenu");
    burgerRef.innerHTML = "";
    for (let i = 0; i < burger.length; i++) {
        burgerRef.innerHTML += burgerMenuRender(i)
    }
}
function renderPizza(){
    let pizzaRef = document.getElementById("pizzaMenu");
    pizzaRef.innerHTML = "";
    for (let i = 0; i < pizza.length; i++) {
        pizzaRef.innerHTML += pizzaMenuRender(i)
    }
}
function renderSalad(){
    let saladRef = document.getElementById("saladMenu");
    saladRef.innerHTML = "";
    for (let i = 0; i < salad.length; i++) {
        saladRef.innerHTML += saladMenuRender(i)
    }
}

function renderBusket(){
    let busket = document.getElementById("basket")
    busket.innerHTML += ` <section class="empty-basket">
                 <button class="close" id="closeButton" onclick="closeBasket()">X</button>
                 <h2>Dein WarenKorb</h2>
                 <p>Hier ist noch nichts. Such dir etwas Leckeres aus!</p>
                 <img src="assets/icons/basket.svg" alt="">
            </section>`
}

function closeBasket(){
  let basket= document.getElementById("basket");
  basket.style.display = "none";
}
