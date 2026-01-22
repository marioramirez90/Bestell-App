function burgerMenuRender(i){
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