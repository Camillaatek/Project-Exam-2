
// export function createFeaturedProducts(products){
//     const featuredProductsContainer = document.querySelector(".featured-results");
    
//     featuredProductsContainer.innerHTML = "";

//     const filteredProducts = products.filter(function (product) {
//         if (product.featured === true) {
//             return true;
//         }
//         console.log(products)
//     });

//     createProduct(filteredProducts);
// }

export function createProduct(products) {
    const productsContainer = document.querySelector(".results");

    productsContainer.innerHTML = "";

        products.forEach(function (product) {
            if (product.featured === true){
            productsContainer.innerHTML += `<div class="result">
                            <a class="product" href="detail.html?id=${product.id}">
                             <img src="${product.image_url}"></a>
                             <h2>${product.title}</h2>
                             <p>$${product.description}</p>
                             <h3>$${product.price}</h3>
                             <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
                             </a>
                             </div>`;
        }})
}
