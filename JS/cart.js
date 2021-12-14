import { createProduct } from "./ui/renderProducts.js";
import { fetchAPI } from "./settings/api.js";
import { productsUrl } from "./settings/api.js";
import { getExistingCartItems } from "./settings/localStorage.js";



// fetchAPI(createProduct, productsUrl);
// createShoppingCart();
const cartSum = document.querySelector(".cart-sum");
const cartContainer = document.querySelector("#cart-container");
const emptyCart = document.querySelector(".emptycart")

const cartItems = getExistingCartItems();
console.log(cartItems);

function createCartItems() {
    cartItems.forEach(product => {
        cartContainer.innerHTML += `<div class="cart-container">
                                     
        <img src="${product.image_url}" >
                                      <h2>${product.title}</h2>
                                      <h3>$${product.price}</h3>
                                  </div>`
    });
}

createCartItems();




if (cartItems.lenght === 0) {
    emptyCart.innerHTML = `<div class="card-error">why???</div>`
}

//cart sum

let initSum = 0;

function calculateSumPrice() {
    cartItems.forEach(product => {
        const finalSum = initSum += parseInt(product.price);
        

        cartSum.innerHTML = `$ ${finalSum}`;
    })
}

calculateSumPrice();
// import { saveToStorage, getFromStorage, cartItemsKey } from "./settings/localStorage";

// const containerCartItems = document.querySelector(".container-products-cart");
// const clearCartButton = document.querySelector("#clearCart");
// const priceContainer = document.querySelector(".container-products-cart-price");

// const cartItems = getFromStorage(cartItemsKey);
// createCartItems(cartItems);













// function createCartItems(products) {
//     containerCartItems.innerHTML = "";
    
//     if (products.lenght === 0) {
//         warningMessage("No products in cart")
//     } else {
//         products.forEach(function (product) {
//             productsContainer.innerHTML += `<div class="result">
//                              <a class="product" href="detail.html?id=${product.id}">
//                              <img src="${product.image_url}"></a>
//                              <h2>${product.title}</h2>
//                              <p>${product.description}</p>
//                              <h3>$${product.price}</h3>
//                              <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
//                              </a>
//                           </div>`;
//         })
//     }
// }