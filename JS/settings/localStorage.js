export function getShoppingCart(){
    const shoppingCart = localStorage.getItem("shopping-cart");
    if (shoppingCart === null) {
        return [];
    } else {
        return JSON.parse(shoppingCart);

    }
}

export function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if(!value) {
        return null;
    }
    return JSON.parse(value);
}