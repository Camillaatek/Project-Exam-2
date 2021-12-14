export default function createMenu(){

    const { pathname } = document.location;
    console.log(pathname);
    const container = document.querySelector(".menu-container");

    container.innerHTML = `  <nav class="navbar">
    <div class="logo-border">
  <a href="/index.html" class="nav-branding">RGB</a>
    </div>
  <ul class="nav-menu">
    <li class="nav-item">
      <a href="/index.html" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
      <a href="/all-products.html" class="nav-link">Products</a>
    </li>
    <li class="nav-item">
      <a href="/login.html" class="nav-link">Admin</a>
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
}