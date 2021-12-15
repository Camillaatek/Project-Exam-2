import createMenu from "./Components/Common/createMenu.js";
import {baseUrl} from "./settings/api.js";

createMenu()
// import displayMessage from "./Components/Common/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// if (!id) {
//     document.location.href = "/";
// }

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");

(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        name.value = details.name;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;

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

    
}