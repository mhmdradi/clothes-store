import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../component/Title";
import ProductItem from "../component/ProductItem";
function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("default");

  function toggleCtegory(e) {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  }
  function handleSort(e) {
    const type = e.target.value;
    setSortType(type);

    let sortedProducts = [...products];

    if (type === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price); // Sort by price ascending
    } else if (type === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price); // Sort by price descending
    } else {
      // Default sorting (by ID or any original order)
      sortedProducts.sort((a, b) => a.id - b.id);
    }

    setFilterProducts(sortedProducts);
  }

  function toggleSubCategory(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  }

  function applyFilter() {
    let productCopy = products.slice();
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(productCopy);
  }
  useEffect(
    function () {
      applyFilter();
    },
    [category, subCategory, search, showSearch]
  );

  useEffect(function () {
    setFilterProducts(products);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        {/* ctegory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCtegory}
              />
              Men
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCtegory}
              />
              Women
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCtegory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={handleSort}
          >
            <option value="default">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: Hight to Low</option>
          </select>
        </div>
        {/* map products */}
        <div className="grid grid-col-2 md:grid-cols lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              image={item.image}
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
