// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../component/Title";
// import ProductItem from "./ProductItem";

// function LatestCollection() {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   useEffect(function () {
//     setLatestProducts(products.slice(0, 10));
//   }, []);
//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"LATEST"} text2={"COLLECTION"} />
//         <p className="w-3/4 m-auto text-xs sm:text-base text-gray-600">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
//           voluptate?
//         </p>
//       </div>
//       {/* rendering products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"></div>
//       {latestProducts.map((item, index) => (
//         <ProductItem
//           key={index}
//           id={item._id}
//           image={item.image}
//           name={item.name}
//           price={item.price}
//         />
//       ))}
//     </div>
//   );
// }

// export default LatestCollection;

//

import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../component/Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  // Update when `products` change
  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
          voluptate?
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={item._id || index} // Use product ID for a unique key
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
