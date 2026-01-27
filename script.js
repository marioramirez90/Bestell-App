let cart = [];
let deliverFree = 4.99;
const burgerCategory = document.getElementById("burgerMenu");
const pizzaCategory = document.getElementById("pizzaMenu");
const saladCategory = document.getElementById("saladMenu");
const basketHeaderRef = document.getElementById("basketHeader");
const addToCartRef = document.getElementById("addtocart");
const priceEndRef = document.getElementById("price_end");

function init() {
  renderMenu();
  renderBusket();
}

function renderMenu() {
  burgerCategory.innerHTML = "";
  pizzaCategory.innerHTML = "";
  saladCategory.innerHTML = "";
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
    categoryref.innerHTML += menuMealrender(menuRef);
  }
}

function renderBusket() {
  if (!basketHeaderRef || !addToCartRef || !priceEndRef) return;
  basketHeaderRef.innerHTML = busketHeader();
  if (cart.length === 0) {
    addToCartRef.innerHTML = emptyBasket();
    priceEndRef.innerHTML = "";
    return;
  }
  let cartbusketRef = "";
  for (let i = 0; i < cart.length; i++) {
    cartbusketRef += fullBasket(i);
  }
  addToCartRef.innerHTML = cartbusketRef;
  renderTotalPrice();
}

function renderTotalPrice() {
  const priceEndRef = document.getElementById("price_end");
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].item.price * cart[i].quantity;
  }
  let total = subtotal + deliverFree;
  priceEndRef.innerHTML = totalPrice(subtotal, total);
}

function addToBasket(id) {
  let itemToBusket = menu.find((item) => item.id === id);
  if (!itemToBusket) return;
  let busketItem = cart.find((entry) => entry.item.id === id);
  if (!busketItem) {
    cart.push({ item: itemToBusket, quantity: 1 });
  } else {
    busketItem.quantity++;
  }
  renderBusket();
}

function increaseQuantity(index) {
  cart[index].quantity++;
  renderBusket();
  document.getElementById("delete").style.display = "none";
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
