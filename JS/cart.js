// import { createProduct } from "./ui/renderProducts.js";
// import { fetchAPI } from "./settings/api.js";
// import { productsUrl } from "./settings/api.js";
// import { searchProducts } from "./ui/filterProducts.js";
// import { createShoppingCart } from "./settings/localStorage";


// fetchAPI(createProduct, productsUrl);
// createShoppingCart();
import { saveToStorage, getFromStorage, cartItemsKey } from "./settings/localStorage";

const containerCartItems = document.querySelector(".container-products-cart");
const clearCartButton = document.querySelector("#clearCart");
const priceContainer = document.querySelector(".container-products-cart-price");

const cartItems = getFromStorage(cartItemsKey);
createCartItems(cartItems);

function createCartItems(products) {
    containerCartItems.innerHTML = "";
    
    if (products.lenght === 0) {
        warningMessage("No products in cart")
    } else {
        products.forEach(function (product) {
            productsContainer.innerHTML += `<div class="result">
                             <a class="product" href="detail.html?id=${product.id}">
                             <img src="${product.image_url}"></a>
                             <h2>${product.title}</h2>
                             <p>${product.description}</p>
                             <h3>$${product.price}</h3>
                             <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
                             </a>
                          </div>`;
        })
    }
}