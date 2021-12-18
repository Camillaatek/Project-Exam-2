import { createProduct } from "./ui/renderProducts.js";
import { fetchAPI } from "./settings/api.js";
import { productsUrl } from "./settings/api.js";
import { getExistingCartItems } from "./settings/localStorage.js";
import createMenu from "./Components/Common/createMenu.js";


createMenu()

const cartSum = document.querySelector(".cart-sum");
const cartContainer = document.querySelector("#cart-container");
const emptyCart = document.querySelector(".emptycart")

const cartItems = getExistingCartItems();
console.log(cartItems);

function createCartItems() {
    cartItems.forEach(product => {
        cartContainer.innerHTML += `<div class="cart-container">              
                                        <img src="${product.image_url}" >
                                        <div class="cart-product-info">
                                            <h2>${product.title}</h2>
                                            <p>${product.description}</p>
                                            <a href="detail.html?id=${product.id}">
                                                <button>View product</button>
                                            </a>
                                        </div>
                                        <div class="cart-product-price">
                                            <h3>$${product.price}</h3>
                                        </div>
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