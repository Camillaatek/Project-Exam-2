import { createProduct } from "./ui/featuredProducts.js";
import { fetchAPI } from "./settings/api.js";
import {productsUrl} from "./settings/api.js";
import createMenu from "./Components/Common/createMenu.js";
import { getUsername } from "./settings/localStorage.js";

createMenu()
fetchAPI (createProduct, productsUrl, getUsername);