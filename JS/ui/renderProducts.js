// import { baseUrl } from "../settings/api.js";

// import { getUsername } from "../settings/localStorage";

// export function renderProducts(productsToRender) {
//     const productContainer = document.querySelector(".results");
//     productContainer.innerHTML = ""

//     productsToRender.forEach(function (product) {
//         productContainer.innerHTML += `<div class="result">
//         <h4>${product.title}</h4>
//         </div>`;
//     })
// }

import { baseUrl } from "../settings/api.js";
import { getUsername } from "../settings/localStorage.js";

const username = getUsername();

export function createProduct(products) {

    let editLink = ``;
    const productsContainer = document.querySelector(".results");

    productsContainer.innerHTML = "";

        products.forEach(function (product) {
            

            
            if (typeof username != "undefined") {
                editLink = `
                            <a href="edit.html?id=${product.id}">
                            <button class="editbtn">Edit</button>
                            </a>`;
            }
            productsContainer.innerHTML += `<div class="all-products-container">
            <div class="result">
                             
                             <a class="product" href="detail.html?id=${product.id}">
                             <img src="${product.image_url}"></a>
                             <h2>${product.title}</h2>
                             <p>${product.description}</p>
                             <h3>$${product.price}</h3>
                             <button id=${product.id}>Add to cart</button>
                             </a>
                             
                             ${editLink}
                             
                             </div>
                          </div>`;
        })
}
// const favButtons = document.querySelectorAll(".result i");

// favButtons.forEach((button) => {
//     button.addEventListener("click", handleClick);
// });

// function handleClick() {
//     console.log(event);
// }










// (async function() {
//     const container = document.querySelector(".results");

//     try {
//         const response = await fetch(productsUrl);
//         const json = await response.json();

//         container.innerHTML = "";



//         json.forEach(function (product) {
//             container.innerHTML += `<div class="result">
//                 <a class="product" href="detail.html?id=${product.id}">
//                 <img src="${product.image_url}"></a>
//                 <h2>${product.title}</h2>
//                 <p>$${product.description}</p>
//                 <h3>$${product.price}</h3>
//                 <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
//                 </a>
//                 </div>`;
//         });
        
//     } catch(error) {
//         console.log(error);
//         displayMessage("error", error, ".results");
//     }
// })();
