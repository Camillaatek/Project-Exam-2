import { getUsername } from "../../settings/localStorage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu(){
    const { pathname } = document.location;

    const username = getUsername();

    let authLink = `<a href="/login.html" class="nav-link">Admin</a>`;

    if (username) {
        authLink = `<button id="logout">Logout ${username}👋</button>
                    <a href="/add.html" class"nav-link">Add Products</a>`;
    }

    console.log(username);

    const container = document.querySelector(".menu-container");

    container.innerHTML = `  <nav class="navbar">
    <div class="logo-border">
  <a href="/index.html" class="nav-branding">RGB</a>
    </div>
  <ul class="nav-menu">
    <li class="nav-item">
      ${authLink}
    </li>
    <li class="nav-item">
      <a href="/index.html" class="nav-link">Home</a>
    </li>
        <li class="nav-item">
      <a href="/all-products.html" class="nav-link">Products</a>
    </li>
    <li class="nav-item">
        <a href="/cart.html"  class="nav-link">Cart</a>
      </li>
  </ul>
  <div class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</nav>`;
logoutButton();
}