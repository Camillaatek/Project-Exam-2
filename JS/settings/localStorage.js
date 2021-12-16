const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUsername() {
  const user = getFromStorage(userKey)

  if(user) {
    return user.username;
  }

  return null;
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


export function clearStorage() {
  localStorage.clear();
}







export function getExistingCartItems(){
    const cartItems = localStorage.getItem("cartitems");
    if (cartItems === null) {
        return [];
    } else {
        return JSON.parse(cartItems);
    }
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
  