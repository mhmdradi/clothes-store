// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../component/Title";

// function Cart() {
//   const { products, currency, cartItem } = useContext(ShopContext);

//   const [cartData, setCartData] = useState([]);
//   useEffect(() => {
//     const tempData = [];
//     for (const items in cartItem) {
//       for (const item in cartItem[items]) {
//         if (cartItem[items][item] > 0) {
//           tempData.push({
//             _id: items,
//             size: item,
//             quantity: cartItem[items][item],
//           });
//         }
//       }
//     }
//     setCartData(tempData);
//   }, [cartItem]);

//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl mb-3">
//         <Title text1={"YOUR"} text2={"CART"} />
//       </div>
//       <div>
//         {cartData.map((item, index) => {
//           const productData = products.find(
//             (product) => product._id === item._id
//           );

//           return (
//             <div
//               key={index}
//               className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//             >
//               <div className="flex items-start gap-6">
//                 <img
//                   className="w-16 sm-w-20"
//                   src={productData.image[0]}
//                   alt=""
//                 />
//               </div>
//               <p className="text-xs sm:text-lg font-medium">
//                 {productData.name}
//               </p>
//               <div className="flex items-center gap-5 mt-2">
//                 <p>
//                   {currency}
//                   {productData.price}
//                 </p>
//                 <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
//                   {item.size}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Cart;

// second code

// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../component/Title";

// function Cart() {
//   const { products, currency, cartItem } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const items in cartItem) {
//       for (const size in cartItem[items]) {
//         if (cartItem[items][size] > 0) {
//           tempData.push({
//             _id: items,
//             size: size,
//             quantity: cartItem[items][size],
//           });
//         }
//       }
//     }
//     setCartData(tempData);
//   }, [cartItem]);

//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl mb-3">
//         <Title text1={"YOUR"} text2={"CART"} />
//       </div>
//       <div>
//         {cartData.map((item, index) => {
//           const productData = products.find(
//             (product) => product._id === item._id
//           );

//           // Check if productData is available
//           if (!productData) return null;

//           return (
//             <div
//               key={index}
//               className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//             >
//               <div className="flex items-start gap-6">
//                 <img
//                   className="w-16 sm-w-20"
//                   src={productData.image[0]}
//                   alt={productData.name}
//                 />
//                 <div>
//                   <p className="text-xs sm:text-lg font-medium">
//                     {productData.name}
//                   </p>
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     Size: {item.size}
//                   </p>
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     Quantity: {item.quantity}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-xs sm:text-lg font-medium">
//                 {currency}
//                 {(productData.price * item.quantity).toFixed(2)}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Cart;
// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../component/Title";
// import { toast } from "react-toastify"; // For notifications

// function Cart() {
//   const { products, currency, cartItem, setCartItem } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   // Update the cart data from context
//   useEffect(() => {
//     const tempData = [];
//     let total = 0;

//     for (const items in cartItem) {
//       for (const size in cartItem[items]) {
//         if (cartItem[items][size] > 0) {
//           const productData = products.find((product) => product._id === items);
//           if (productData) {
//             tempData.push({
//               _id: items,
//               size: size,
//               quantity: cartItem[items][size],
//               price: productData.price,
//               name: productData.name,
//               image: productData.image[0],
//             });
//             total += cartItem[items][size] * productData.price;
//           }
//         }
//       }
//     }
//     setCartData(tempData);
//     setTotalAmount(total);
//   }, [cartItem, products]);

//   // Handle increasing quantity
//   const increaseQuantity = (itemId, size) => {
//     let cartData = structuredClone(cartItem);
//     cartData[itemId][size] += 1;
//     setCartItem(cartData);
//     toast.success("Quantity increased!");
//   };

//   // Handle decreasing quantity
//   const decreaseQuantity = (itemId, size) => {
//     let cartData = structuredClone(cartItem);
//     if (cartData[itemId][size] > 1) {
//       cartData[itemId][size] -= 1;
//       setCartItem(cartData);
//       toast.success("Quantity decreased!");
//     } else {
//       toast.error("Minimum quantity is 1");
//     }
//   };

//   // Handle removing product from cart
//   const removeFromCart = (itemId, size) => {
//     let cartData = structuredClone(cartItem);
//     delete cartData[itemId][size];
//     setCartItem(cartData);
//     toast.success("Product removed from cart!");
//   };

//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl mb-5 text-center">
//         <Title text1={"YOUR"} text2={"CART"} />
//       </div>
//       {cartData.length > 0 ? (
//         <div className="grid gap-4">
//           {cartData.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center p-4 border-b border-gray-300"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   className="w-20 h-20 object-cover"
//                   src={item.image}
//                   alt={item.name}
//                 />
//                 <div>
//                   <p className="text-lg font-semibold">{item.name}</p>
//                   <p className="text-gray-500 text-sm">Size: {item.size}</p>
//                   <p className="text-gray-500 text-sm">
//                     Price: {currency}
//                     {item.price.toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => decreaseQuantity(item._id, item.size)}
//                   className="px-2 py-1 border border-gray-300 bg-gray-100"
//                 >
//                   -
//                 </button>
//                 <p className="text-lg">{item.quantity}</p>
//                 <button
//                   onClick={() => increaseQuantity(item._id, item.size)}
//                   className="px-2 py-1 border border-gray-300 bg-gray-100"
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="text-lg font-semibold">
//                 {currency}
//                 {(item.price * item.quantity).toFixed(2)}
//               </div>
//               <button
//                 onClick={() => removeFromCart(item._id, item.size)}
//                 className="text-red-500 text-sm"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="flex justify-end items-center mt-6 text-lg font-semibold">
//             <p>
//               Total: {currency}
//               {totalAmount.toFixed(2)}
//             </p>
//           </div>
//           <div className="flex justify-end mt-4">
//             <button
//               className="bg-green-500 text-white px-6 py-2 rounded-md"
//               onClick={() => toast.success("Proceed to checkout!")}
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center py-10">
//           <p className="text-lg font-semibold">Your cart is empty</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../component/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../component/CartTotal";

function Cart() {
  const { products, currency, cartItem, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);
  return (
    <div className="bordert- pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={productData.image} className="w-16 sm:w-20" alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
