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
// import displayMessage from "./Components/Common/displayMessage.js";

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
    `<div class="grid-container">
        <div class ="pic">
            <button onclick="goBack()">X</button>
            <img src="${details.image_url}">
        </div>
        <div class="detail-info">
        <h1>${details.title}</h1>
        <p>${details.description}</p>
        <h3>$${details.price}</h3>
        
        <div class="button"><a href=""><button>Add To Cart</button> </a></div>
        </div>
    </div>`;
    
    const cartButton = document.querySelectorAll(".button");

    cartButton.forEach((Button) => {
        Button.addEventListener("click", addToCart);
    })

    console.log(details);
    }catch (error) {
        displayMessage("error", error, ".results");
    }
    // nytt

    

    // local storage
    const addToCartBtn = document.querySelectorAll(".button")

    addToCartBtn.forEach((button) => {
        button.addEventListener("click", handleAddToCartClick);
    });
    // function handleAddToCart() {
    //     const id = dataset.id;
    //     const title = this.dataset.title;
    //     const price = this.dataset.price;
    //     const image = this.dataset.image;
    //     const description = this.dataset.description;
    //     const url = this.dataset.url;
    // }



    // nytt
})();

function goBack(){
    location.replace("index.html")
}