// const url = 'http://localhost:1337/Products';

// const resultsDoc = document.querySelector('.results')

//     const getProducts = async () => {
//     const response = await fetch(url);

//     const products = await response.json();
//     console.log(products)

//     resultsDoc.innerHTML ='';

//     for (let i = 0; i <products.length; i++) {
//         if (i === 4) {
//             break;
//         }

//         resultsDoc.innerHTML += `<div class="result"><a href="product-item.html?id=${products.id}">
//         <img src="${products[i].image_url}"></a>
//         <h2>${products[i].title}</h2>
//         <p>${products[i].description}</p>
//         <h3>$${products[i].price}</h3>
//         <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
//         </div>`;
//     };
// }

// getProducts();

import {baseUrl} from "./settings/api.js";
import displayMessage from "./Components/Common/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const productUrl = baseUrl + "products/" + id;

if (!id) {
    document.location.href = "/";
}
console.log(productUrl);

(async function() {
    try{

    
    const response = await fetch(productUrl);
    const details = await response.json();

    document.title = details.title;
    const container = document.querySelector(".results");

    container.innerHTML = 
    `<h1>${details.title}</h1>
    <p>${details.description}</p>
    <h2>$${details.price}</h2>
    <img src="${details.image_url}">
    <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
    `;
    
    console.log(details);
    }catch (error) {
        displayMessage("error", error, ".results");
    }
})();