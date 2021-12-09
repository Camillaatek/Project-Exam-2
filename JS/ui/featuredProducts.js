
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








// const favorites = getExistingFavs();


export function createProduct(products) {
    const productsContainer = document.querySelector(".results");
    

    // const doesObjectExist = favorites.find(function (fav) {
    //     console.log(fav);

    //     return parseInt(fav.id) === prdouct.id;
    // });

    // console.log(doesObjectExist);

    productsContainer.innerHTML = "";

        products.forEach(function (product) {
            if (product.featured === true){
            productsContainer.innerHTML += `<div class="result">
                            <a class="product" href="detail.html?id=${product.id}">
                             <img src="${product.image_url}"></a>
                             <h2>${product.title}</h2>
                             <p>${product.description}</p>
                             <h3>$${product.price}</h3>
                             <button id=${product.id}>Add to cartief</button>
                             <i class="far fa-heart"></i>
                             </a>
                             </div>`;
        }})


const favButtons = document.querySelectorAll(".result i");

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");
    console.log(this)
}
}  