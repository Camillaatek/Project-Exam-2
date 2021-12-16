import createMenu from "./Components/Common/createMenu.js";
import { getToken } from "./settings/localStorage.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./Components/Common/displayMessage.js";

createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const imageUrl = document.querySelector("#image_url");
const featured = document.querySelector("#featured");
const message = document.querySelector(".message-container");


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

    addProduct(titleValue, priceValue, descriptionValue, imageUrlValue, featuredValue);
}

async function addProduct (title, price, description, image_url, featured) {
    const url = baseUrl + "products";

    const data = JSON.stringify({ title: title, price: price, description: description, image_url: image_url, featured: featured, });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }

        console.log(json)
    }
    catch(error) {
        console.log(error)
    }
}
