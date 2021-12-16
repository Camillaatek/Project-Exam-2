
// export function createFeaturedProducts(products){
//     const featuredProductsContainer = document.querySelector(".featured-results");
    
//     featuredProductsContainer.innerHTML = "";

//     const filteredProducts = products.filter(function (product) {
//         if (product.featured === true) {
//             return true;
//         }
//         console.log(products)
//     });

//     createProduct(filteredProducts);
// }








// const favorites = getExistingFavs();

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
            if (product.featured === true){
            productsContainer.innerHTML += `<div class="result">
                            <a class="product" href="detail.html?id=${product.id}">
                             <img src="${product.image_url}"></a>
                             <h2>${product.title}</h2>
                             <p>${product.description}</p>
                             <h3>$${product.price}</h3>
                             <button id=${product.id}>Add to cart</button>
                             <i class="far fa-heart"></i>
                             </a>
                             ${editLink}
                             </div>`;
        }})


const favButtons = document.querySelectorAll(".result i");

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");
    console.log(this)
}
}  