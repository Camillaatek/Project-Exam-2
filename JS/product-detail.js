import createMenu from "./Components/Common/createMenu.js";
import {baseUrl} from "./settings/api.js";
import { getExistingCartItems } from "./settings/localStorage.js";
createMenu()

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const productUrl = baseUrl + "products/" + id;
let buttonAdd = "Add to cart";

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
            <img src="${details.image_url}">
        </div>
        <div class="detail-info">
        <h1>${details.title}</h1>
        <h4>${details.description}</h4>
        <h3>$${details.price}</h3>
        <button class="button" id="addButton" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-description="${details.description}" data-image_url="${details.image_url}" >${buttonAdd}</button>
        <div class="detail-features">
            <h3>Features</h3>
            <li>- 2x 4 GB unbuffered DIMM 288-pin modules</li>
            <li>- Up to 3866 MHz frequency with automatic overclocking</li>
            <li>- 1.35 V voltage</li>
            <li>- CL18 timing, 18-22-22-40 latency</li>
            <li>- DHX cooling technology with machined aluminium heatsinks</li>
            <li>- Intel XMP 2.0 compatible</li>
            <li>- White light pipe lets you customize LED lighting in your case</li>
            <li>- Included heat dissipation fan</li>
        </div>
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