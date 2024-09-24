// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrders from "./pages/PlaceOrders";
// import Orders from "./pages/Orders";
// import About from "./pages/About";
// import Navbar from "./component/Navbar";
// function App() {
//   return (
//     <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw]">
//       <Routes>
//         <Navbar />
//         <Route path="/" element={<Home />} />
//         <Route path="/collection" element={<Collection />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product:productId" element={<Product />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/place-order" element={<PlaceOrders />} />
//         <Route path="/oredrs" element={<Orders />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrders from "./pages/PlaceOrders";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw]">
      {/* Navbar should be outside the Routes */}
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />{" "}
        {/* Fixed route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrders />} />
        <Route path="/orders" element={<Orders />} /> {/* Fixed typo */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
