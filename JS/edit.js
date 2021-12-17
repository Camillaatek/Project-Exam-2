import createMenu from "./Components/Common/createMenu.js";
import {baseUrl} from "./settings/api.js";
import displayMessage from "./Components/Common/displayMessage.js"
import { getToken } from "./settings/localStorage.js";
import deleteButton from "./Components/products/deleteButton.js";

createMenu()
// import displayMessage from "./Components/Common/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");
const imageUrl = document.querySelector("#image_url");
const featured = document.querySelector("#featured");

(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        featured.checked = details.featured;
        imageUrl.value = details.image_url;

        deleteButton(details.id);

        console.log(details);
    } catch (error) {
        console.log(error);
    }
    finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageUrlValue = imageUrl.value.trim();
    const featuredValue = featured.checked;

    console.log("priceValue", priceValue);

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageUrlValue.length === 0 || featuredValue.length === 0) {
        displayMessage("warning", "Please supply proper values", ".message-container");  

    }

    updateProduct(titleValue, priceValue, descriptionValue, imageUrlValue, featuredValue,);


}
async function updateProduct(title, price, description, image_url, featured) {
    const url = baseUrl + "products/" + id;
    const data = JSON.stringify({title: title, price: price, description: description, image_url: image_url, featured: featured,})
    const token = getToken();
    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if(json.updated_at) {
            displayMessage("success", "Product Updated", ".message-container");
        }
        if(json.error) {
            displayMessage("error", "json.message", ".message-container");
        }
    }
    catch(error) {
        console.log(error)
    }
}