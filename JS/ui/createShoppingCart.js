// import { getExistingCartItems } from "./settings/localStorage.js";


// export function handleClick() {
//     const id = addButton.dataset.id;
//     const title = addButton.dataset.title;
//     const price = addButton.dataset.price;

//     console.log("ID:", id)
//     console.log("title:", title)
//     console.log("price:", price)

//     const currentCartItems = getExistingCartItems();

//     console.log(currentCartItems);

//     const itemsExist = currentCartItems.find(function (item) {
//         return item.id === id;
//     })

//     console.log(typeof itemsExist, itemsExist);
    
//     if (!itemsExist) {
//         const item = { id: id, title: title, price: price };

//         currentCartItems.push(item);
//         saveCartItems(currentCartItems);
//         console.log(title + " was added to caaart!");
//     }
//     else {
//         const item = { id: id, title: title, price: price };

//         currentCartItems.push(item);
//         saveCartItems(currentCartItems);
//         console.log(title + "wasss added to cuart?");
//     }
//     function saveCartItems(cartItems) {
//     localStorage.setItem("cartitems", JSON.stringify(cartItems))
// }
// }

