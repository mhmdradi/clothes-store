// import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/frontend_assets/assets";
// import { toast } from "react-toastify";
// export const ShopContext = createContext();
// const ShopContextProvider = (props) => {
//   const currency = "$";
//   const delivery_fee = 10;
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItem, setCartItem] = useState({});

//   async function addToCart(itemId, size) {
//     if (!size) {
//       toast.error("Select Product Size");
//       return;
//     }

//     let cartData = structuredClone(cartItem);
//     if (cartData[itemId]) {
//       if (cartData[itemId[size]]) {
//         cartData[itemId][size] += 1;
//       } else {
//         cartData[itemId][size] = 1;
//       }
//     } else {
//       cartData[itemId] = {};
//       cartData[itemId][size] = 1;
//     }
//     setCartItem(cartData);
//   }
//   function getCartCount() {
//     let totalCount = 0;
//     for (const items in cartItem) {
//       for (const item in cartItem[items]) {
//         try {
//           if (cartItem[items][item] > 0) {
//             totalCount += cartItem[items[item]];
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     }
//     return totalCount;
//   }

//   useEffect(
//     function () {
//       addToCart();
//     },
//     [cartItem]
//   );

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItem,
//     getCartCount,
//   };
//   return (
//     <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
//   );
// };
// export default ShopContextProvider;
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate();

  // Add item to cart with size
  async function addToCart(itemId, size) {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItem); // deep clone the cart data

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // If size exists, increment the quantity
      } else {
        cartData[itemId][size] = 1; // If size doesn't exist, set it to 1
      }
    } else {
      cartData[itemId] = {}; // Create new item entry
      cartData[itemId][size] = 1; // Set initial quantity for the size
    }

    setCartItem(cartData);
  }

  // Get total number of items in the cart
  function getCartCount() {
    let totalCount = 0;

    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        try {
          totalCount += cartItem[itemId][size]; // Add the quantity for each size
        } catch (error) {
          console.log(error);
        }
      }
    }

    return totalCount;
  }

  // Removed unnecessary useEffect that called addToCart with no arguments

  async function updateQuantity(itemId, size, quantity) {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);
  }

  function getCartAmount() {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalAmount;
  }

  const value = {
    products,
    currency,
    delivery_fee,
    getCartAmount,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    getCartCount,
    updateQuantity,
    navigate,
    addToCart, // Added addToCart to the value so it can be used in other components
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
