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