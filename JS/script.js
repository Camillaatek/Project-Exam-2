// import {baseUrl} from "./settings/api.js";
// import displayMessage from "./Components/Common/displayMessage.js";

// import { fetchAPI } from "./settings/api";

// const productsUrl = baseUrl + "products";

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

import { createProduct } from "./ui/featuredProducts.js";
import { fetchAPI } from "./settings/api.js";
import {productsUrl} from "./settings/api.js";

fetchAPI (createProduct, productsUrl);









// import { createProducts } from "./ui/renderProducts.js"
// import {baseUrl} from "./settings/api.js";
// const productsUrl = baseUrl + "products";

// async function getProducts() {
//     try {
//         const response = await fetch(productsUrl);
//         const products = await response.json();
//         console.log(products);
//         createProducts(products)
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getProducts();

