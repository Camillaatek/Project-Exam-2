// export function getShoppingCart(){
//     const shoppingCart = localStorage.getItem("shopping-cart");
//     if (shoppingCart === null) {
//         return [];
//     } else {
//         return JSON.parse(shoppingCart);

//     }
// }

// export function saveStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }

// function getFromStorage(key) {
//     const value = localStorage.getItem(key);
//     if(!value) {
//         return null;
//     }
//     return JSON.parse(value);
// }

// export const cartItemsKey = "cart items";

// export function saveToStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }

// export function getFromStorage(key){
//     const value = localStorage.getItem(key);
//     if (!value) {
//         return[];
//     }
//     return JSON.parse(value);
// }



export const findIndex = (array, item) => {
    return array.map((x) => {
        return x.id;
      })
    .indexOf(item.id);
};
  
export const containsItem = (obj, array) => {
    for (const item of array) {
      if (array.id === obj.id) {
        return true;
      }
    }
    return false;
};

const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
  