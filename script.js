let cart = [];
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
    let cartValue = "";
        let subtotal = 0;
        for (let i = 0; i < cart.length; i++) {
            subtotal += cart[i].item.price * cart[i].quantity;
            cartValue += fullBasket(i);
        }
    let total = subtotal + deliverFree;
    cartValue += totalPrice(subtotal, total);
    
    busketRef.innerHTML = cartValue;
  }
}
function addToBasket(id) {
  let itemToAdd = null;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].id === id) {
      itemToAdd = menu[i];
      break;
    }
  }

  let foundIndex = -1;
  for (let j = 0; j < cart.length; j++) {
    if (cart[j].item.id === id) {
      foundIndex = j;
      break;
    }
  }

  if (foundIndex === -1) {
    cart.push({ item: itemToAdd, quantity: 1 });
  } else {
    cart[foundIndex].quantity++;
  }

  renderBusket();
  openBasket();
}

  
function increaseQuantity(index) {
    cart[index].quantity++;
    renderBusket();
}
function decreaseQuantity(index) {
    cart[index].quantity--;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    renderBusket();
}

function deleteItem(index) {
    cart.splice(index, 1);
    renderBusket();
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
