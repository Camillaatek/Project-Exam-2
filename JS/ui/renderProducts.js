// import { baseUrl } from "../settings/api.js";

// export function renderProducts(productsToRender) {
//     const productContainer = document.querySelector(".results");
//     productContainer.innerHTML = ""

//     productsToRender.forEach(function (product) {
//         productContainer.innerHTML += `<div class="result">
//         <h4>${product.title}</h4>
//         </div>`;
//     })
// }





export function createProduct(products) {
    const productsContainer = document.querySelector(".results");

    productsContainer.innerHTML = "";

        products.forEach(function (product) {
            productsContainer.innerHTML += `<div class="result">
                             <a class="product" href="detail.html?id=${product.id}">
                             <img src="${product.image_url}"></a>
                             <h2>${product.title}</h2>
                             <p>${product.description}</p>
                             <h3>$${product.price}</h3>
                             </a>
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
