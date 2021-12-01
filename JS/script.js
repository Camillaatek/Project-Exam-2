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

const productsUrl = baseUrl + "products";

(async function() {
    const container = document.querySelector(".results");
    
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        container.innerHTML = "";



        json.forEach(function (product) {
            container.innerHTML += `<div class="result">
                <a class="product" href="detail.html?id=${product.id}">
                <img src="${product.image_url}"></a>
                <h2>${product.title}</h2>
                <p>$${product.description}</p>
                <h3>$${product.price}</h3>
                <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
                </a>
                </div>`;
        });
        
    } catch(error) {
        console.log(error);
        displayMessage("error", error, ".results");
    }
})();




// import { baseUrl } from "./settings/api.js";
// import displayMessage from "./components/common/displayMessage.js";

// const productsUrl = baseUrl + "products";

// (async function () {
//     const container = document.querySelector(".results");

//     try {
//         const response = await fetch(productsUrl);
//         const json = await response.json();

//         container.innerHTML = "";

//         json.forEach(function (product) {
//             container.innerHTML += `<a class="product" href="detail.html?id=${product.id}">
//                                         <h4>${product.title}</h4>
//                                         <p>Price: ${product.price}</p>
//                                     </a>`;
//         });
//     } catch (error) {
//         console.log(error);
//         displayMessage("error", error, ".product-container");
//     }
// })();