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

export function deleteFromStorage (key) {
  localStorage.removeItem(key);
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