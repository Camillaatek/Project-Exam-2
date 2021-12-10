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
import { getExistingCartItems } from "./settings/localStorage.js";
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
        <button class="button" id="addButton" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}">Add to cartief</button>

        </div>
    </div>`;

    console.log(details);

    //add item to cart
    const addButton = document.querySelector("#addButton");
    console.log(addButton.innerHTML);
    addButton.addEventListener("click", handleClick);
    

    
    }catch (error) {
        displayMessage("error", error, ".results");
    }
    // nytt


    // nytt
})();

function handleClick() {
    const id = addButton.dataset.id;
    const title = addButton.dataset.title;
    const price = addButton.dataset.price;

    console.log("ID:", id)
    console.log("title:", title)
    console.log("price:", price)

    const currentCartItems = getExistingCartItems();

    console.log(currentCartItems);

    const itemsExist = currentCartItems.find(function (item) {
        return item.id === id;
    })

    console.log(typeof itemsExist, itemsExist);
    
    if (!itemsExist) {
        const item = { id: id, title: title, price: price };

        currentCartItems.push(item);
        saveCartItems(currentCartItems);
        console.log(title + " was added to caaart!");
    }
    else {
        const item = { id: id, title: title, price: price };

        currentCartItems.push(item);
        saveCartItems(currentCartItems);
        console.log(title + "wasss added to cuart?");
    }
}

function saveCartItems(cartItems) {
    localStorage.setItem("cartitems", JSON.stringify(cartItems))
}

// function goBack(){
//     location.replace("index.html")
// }