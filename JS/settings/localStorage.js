export function getExistingCartItems(){
    const cartItems = localStorage.getItem("cartitems");
    if (cartItems === null) {
        return [];
    } else {
        return JSON.parse(cartItems);
    }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if(!value) {
    return [];
  }

  return JSON.parse(value);
}







// export function saveToStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// function getFromStorage(key) {
//   const value = localStorage.getItem(key);
//   if(!value) {
//     return null;
//   }
//   return JSON.parse(value);
// }
























// export const findIndex = (array, item) => {
//     return array.map((x) => {
//         return x.id;
//       })
//     .indexOf(item.id);
// };
  
// export const containsItem = (obj, array) => {
//     for (const item of array) {
//       if (array.id === obj.id) {
//         return true;
//       }
//     }
//     return false;
// };

// const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
  