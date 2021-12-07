import displayMessage from "../Components/Common/displayMessage.js";
import { getShoppingCart } from "../settings/localStorage.js"



export function createShoppingCart () {
    const shoppingCart = getShoppingCart();


    const cartContainer = document.querySelector(".results");
    cartContainer.innerHTML = "";

    if (shoppingCart.lenght === 0) {
        displayMessage(
            "my cart is empty"
        );
    }

    shoppingCart.forEach(function(product) {
        cartContainer.innerHTML += `<div class="result">
        <a class="product" href="detail.html?id=${product.id}">
        <img src="${product.image_url}"></a>
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <h3>$${product.price}</h3>
        <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
        </a>
     </div>`
    })

//     const totalPriceContainer = document.querySelector(".cart-total-price")

//     let totalPrice = 0;

//     for(let i = 0; i < shoppingCart.lenght; i++) {
//         let price = parceFloat(shoppingCart[i].price);

//         totalPriceContainer.innerHTML = totalPrice + " NOK";

//         console.log(shoppingCart)
//     }
}