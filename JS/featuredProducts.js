const url = 'http://localhost:1337/Products';

const resultsDoc = document.querySelector('.results')

    const getProducts = async () => {
    const response = await fetch(url);

    const products = await response.json();
    console.log(products)

    resultsDoc.innerHTML ='';

    for (let i = 0; i <products.length; i++) {
        if (i === 10) {
            break;
        }

        resultsDoc.innerHTML += `<div class="result">
        <h2>${products[i].title}</h2>
        <img src="${products[i].image}">
        <p>${products[i].description}</p>
        <h3>${products[i].price}</h3>
        </div>`;
    };
}

getProducts();