import { productsUrl } from "./settings/api.js";
import { createProduct } from "./ui/renderProducts.js";
import { fetchAPI } from "./settings/api.js";
import { searchProducts } from "./ui/filterProducts.js";
import createMenu from "./Components/Common/createMenu.js";
import { getUsername } from "./settings/localStorage.js"

createMenu()
fetchAPI(createProduct,productsUrl);
fetchAPI(searchProducts, productsUrl);
fetchAPI(getUsername, productsUrl);