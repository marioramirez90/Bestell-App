let cart = [];
let subtotal = 0;
let deliverFree = 4.99

function init() {
  renderMenu();
  renderBusket();

}

function renderMenu() {
  const burgerCategory = document.getElementById("burgerMenu");
  const pizzaCategory = document.getElementById("pizzaMenu");
  const saladCategory = document.getElementById("saladMenu");

  for (let i = 0; i < menu.length; i++) {
    const menuRef = menu[i];
    let categoryref;
    if (i < 4) {
      categoryref = burgerCategory;
    } else if (i < 8) {
      categoryref = pizzaCategory;
    } else {
      categoryref = saladCategory;
    }
    categoryref.innerHTML += menuMealrender(menuRef)
  }
}

function renderBusket() {
  const busketRef = document.getElementById("basket")
  if (cart.length === 0) {
    busketRef.innerHTML = emptyBasket();
  } else {
    busketRef.innerHTML = fullBasket()
  }
}

function renderCart(){
  let cartText = ""
  for (let i = 0; i < cart.length; i++) {
    const cartRef = cart[i];
    const cartTotal = cartRef.item.price * cartRef.quantity
    subtotal += cartTotal
    cartText += fullBasket();
    
  }
}


function closeBasket() {
  let closeBasket = document.getElementById("basket");
  closeBasket.style.display = "none";
}
function openBasket() {
  let openBasket = document.getElementById("basket");
  openBasket.style.display = "flex";
}


/*function init(){
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


*/
