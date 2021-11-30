const url = 'http://localhost:1337/Products';

const resultsDoc = document.querySelector('.results')

    const getProducts = async () => {
    const response = await fetch(url);

    const products = await response.json();
    console.log(products)

    resultsDoc.innerHTML ='';

    for (let i = 0; i <products.length; i++) {
        if (i === 4) {
            break;
        }

        resultsDoc.innerHTML += `<div class="result"><a href="product-item.html?id=${products.id}">
        <img src="${products[i].image_url}"></a>
        <h2>${products[i].title}</h2>
        <p>${products[i].description}</p>
        <h3>$${products[i].price}</h3>
        <div class="button"><a href="cart.html"><button>ADD TO CART</button> </a></div>
        </div>`;
    };
}

getProducts();