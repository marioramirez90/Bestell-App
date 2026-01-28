function menuMealrender(menuRef) {
  return `<article class="article_menu">
    <div class="article_header">
    <img src="${menuRef.image}" alt="${menuRef.alt}">
    </div>
    <div class="article_main">
    <h2>${menuRef.name}</h2>
    <p>${menuRef.description}</p>
    </div>
    <div class="article_bottom">
    <span>${menuRef.price.toFixed(2)}€</span>
    <button class="article_button" onclick="addToBasket(${menuRef.id})">+</button>                
    </div>
    </article>`;
}

function emptyBasket() {
  return ` <section class="empty-basket">
    <p>Hier ist noch nichts. Such dir etwas Leckeres aus!</p>
    <img src="assets/icons/basket.svg" alt="">
    </section>`;
}

function fullBasket(i) {
  let cartItemRef = cart[i];
  let totalRef = cartItemRef.item.price * cartItemRef.quantity;
  return `
    <article class="busket_item">
    <div class="busket_header_name" >
    <span class="basket_total">${cartItemRef.quantity}x</span>
    <p class="basket_menu_name" >${cartItemRef.item.name}</p>
    </div>
    <div class="basket_bottom">
    <div class="basket_bottom_button">
    ${changeButton(cartItemRef.quantity, i)}
    <span class="basket_value">${cartItemRef.quantity}</span>
    <button class="busket_plus" onclick="increaseQuantity(${i})">+</button>
    </div>
    <div>
    <span class="busket_price">${totalRef.toFixed(2)} €</span></div>
    </div>
    </div>
    </article>
`;
}

function totalPrice(subtotalParam, totalParam) {
  return `
    </section>
    <section class="total_amount">
    <div class="subtotal">
    <p class="wihte">Zwischensumme :</p>
    <span class="wihte">${subtotalParam.toFixed(2)} €</span>
    </div>
    <div class="deliver_free">
    <p class="wihte">Lieferkosten :</p>
    <span class="wihte">${deliverFree.toFixed(2)} €</span>
    </div>
    <div class="white_line"></div>
    <div class="total_price">
    <p class="wihte">gesamtsumme:</p>
    <span class="wihte">${totalParam.toFixed(2)} €</span>
    </div>
    <div class="button_buy_now" onclick="openDialog()" ><button class="button_buy_now_button" >Buy now ${totalParam.toFixed(2)} €</button></div>
    </section>
    `;
}

function busketHeader() {
  return `
    <div class="close_btn"><button class="close" onclick="closeBasket()">X</button></div>
    <h2 class="busket_title">Dein Warenkorb</h2>`;
}

function deleteBusketItem(index) {
  return `
    <button class="busket_trash" onclick="deleteItem(${index})">
    <img src="assets/icons/delete.svg">
    </button>
    `;
}

function addMinusbusket(index) {
  return `
    <button class="busket_minus" onclick="decreaseQuantity(${index})">-</button>
  `;
}

