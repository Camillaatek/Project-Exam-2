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

import createMenu from "./Components/Common/createMenu.js";
import {baseUrl} from "./settings/api.js";
import { getExistingCartItems } from "./settings/localStorage.js";
createMenu()
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
        <button class="button" id="addButton" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-description="${details.description}" data-image_url="${details.image_url}" >Add to cart</button>

        </div>
    </div>`;

    console.log(details);

    //add item to cart
    const addButton = document.querySelector("#addButton");
    console.log(addButton.dataset);
    addButton.addEventListener("click", handleClick);
    

    
    }catch (error) {
        displayMessage("error", error, ".results");
    }
    
})();


function handleClick() {
    const id = addButton.dataset.id;
    const title = addButton.dataset.title;
    const price = addButton.dataset.price;
    const description = addButton.dataset.description;
    const image_url = addButton.dataset.image_url;

    console.log("ID:", id)
    console.log("title:", title)
    console.log("price:", price)
    console.log("price:", description)
    console.log("image_url", image_url)

    const currentCartItems = getExistingCartItems();

    console.log(currentCartItems);

    const itemsExist = currentCartItems.find(function (item) {
        return item.id === id;
    })

    
    
    if (!itemsExist) {
        const item = { id: id, title: title, price: price, image_url: image_url, description: description };

        currentCartItems.push(item);
        saveCartItems(currentCartItems);
        console.log(title + " was added to caaart!");
    }
    else {
        const newFavs = currentCartItems.filter((fav) => fav.id !== id);
        saveCartItems(newFavs);
        console.log(title + " gone!");
    }
}

function saveCartItems(cartItems) {
    localStorage.setItem("cartitems", JSON.stringify(cartItems))
}

// function goBack(){
//     location.replace("index.html")
// }