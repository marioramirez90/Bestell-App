function menuMealrender(menuRef){
    return `<article class="article_menu">
                    <div class="article_header">
                    <img src="${menuRef.image}" alt="burger">
                    </div>
                    <div class="article_main">
                    <h2>${menuRef.name}</h2>
                    <p>${menuRef.description}</p>
                    </div>
                    <div class="article_bottom">
                        <span>${menuRef.price.toFixed(2)}€</span>
                        <button class="article_button" onclick="addToBasket(${menuRef.id})">add to basket</button>
                    </div>
                </article>`;
}

function emptyBasket(){
    return ` <section class="empty-basket">
    <div class="close_btn"><button class="close" id="closeButton" onclick="closeBasket()">X</button></div>
                 
                 <h2>Dein WarenKorb</h2>
                 <p>Hier ist noch nichts. Such dir etwas Leckeres aus!</p>
                 <img src="assets/icons/basket.svg" alt="">
            </section>`
}

function fullBasket(){
    return `<section class="busket_full">
    <article class="busket_item">
        <div busket_header_name>
            <span class="basket_total"></span>
             <p class="basket_men_name" ></p>
        </div>
        <div>
            <div basket_bottom>
                    <img src="" alt="">
                    <button class="busket_delet"><img src="assets/icons/delete.svg" alt=""></button>
                    <span class="basket_value"></span>
                    <button class="busket_plus">+</button>
            </div>
            <span class="busket_price">€</span>
        </div>
    </article>
</section>`
}

    function TotalPrice (){
        return `
    </section>
    <section class="total_amount">
        <div class="subtotal">
            <p>Zwischensumme :</p>
            <span></span>
        </div>
        <div class="Deliver_free">
            <p>Lieferkosten</p>
            <span></span>
        </div>
        <div class="Total_price">
            <p>gesamtsumme:</p>
            <span></span>
        </div>
    </section>
    `
    }

/*function burgerMenuRender(i){
    return `<article class="article_menu">
                    <div class="article_header">
                    <img src="${burger[i].image}" alt="burger">
                    </div>
                    <div class="article_main">
                    <h2>${burger[i].name}</h2>
                    <p>${burger[i].description}</p>
                    </div>
                    <div class="article_bottom">
                        <span>${burger[i].price.toFixed(2)}€</span>
                        <button class="article_button">add to basket</button>
                    </div>
                </article>`;
}
function pizzaMenuRender(i){
    return `<article class="article_menu">
                    <div class="article_header">
                    <img src="${pizza[i].image}" alt="burger">
                    </div>
                    <div class="article_main">
                    <h2>${pizza[i].name}</h2>
                    <p>${pizza[i].description}</p>
                    </div>
                    <div class="article_bottom">
                        <span>${pizza[i].price.toFixed(2)}€</span>
                        <button class="article_button">add to basket</button>
                    </div>
                </article>`;

}
function saladMenuRender(i){
    return `<article class="article_menu">
                    <div class="article_header">

                    <img src="${salad[i].image}" alt="burger">
                    </div>
                    <div class="article_main">
                    <h2>${salad[i].name}</h2>
                    <p>${salad[i].description}</p>
                    </div>
                    <div class="article_bottom">
                        <span>${salad[i].price.toFixed(2)}€</span>
                        <button class="article_button">add to basket</button>
                    </div>
                </article>`;

}
                */