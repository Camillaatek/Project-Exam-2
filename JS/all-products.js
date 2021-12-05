// import {baseUrl} from './settings/api';

// const search = document.querySelector('.search');
// const container = document.querySelector(".results");
// let teamsToRender = {baseUrl};


// function renderTeams(){


// json.forEach(function (product) {
//     container.innerHTML += `<div class="result">
//         <a class="product" href="detail.html?id=${product.id}">
//         <img src="${product.image_url}"></a>
//         <h2>${product.title}</h2>
//         <p>$${product.description}</p>
//         <h3>$${product.price}</h3>
//         <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
//         </a>
//         </div>`;
// })
// }

// renderTeams();




import { productsUrl } from "./settings/api.js";
import { createProduct } from "./ui/renderProducts.js";
import { fetchAPI } from "./settings/api.js";

fetchAPI(createProduct,productsUrl);






// import {baseUrl} from "./settings/api.js";
// import displayMessage from "./Components/Common/displayMessage.js";

// const productsUrl = baseUrl + "products";
// const search = document.querySelector(".search");

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



// search.onkeyup = function () {
//     // console.log(event);

//     const searchValue = event.target.value.trim().toLowerCase();

//     const filteredProduct = product.filter(function(product) {
//         if (product.title.toLowerCase().startsWith(searchValue)){
//             return true;
//         }
//     });

//     console.log(filteredProduct);
// }









// import { baseUrl } from "./settings/api.js";
// import { renderProducts } from "./ui/renderProducts.js";

// const search = document.querySelector(".search");

// let productsToRender = baseUrl;

// renderProducts(productsToRender);