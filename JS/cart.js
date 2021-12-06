import { createProduct } from "./ui/renderProducts.js";
import { fetchAPI } from "./settings/api.js";
import { productsUrl } from "./settings/api.js";
import { searchProducts } from "./ui/filterProducts.js";
import { getShoppingCart } from "./settings/localStorage";

fetchAPI(createProduct, productsUrl);
createShoppingCart();