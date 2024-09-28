// import { Link, NavLink } from "react-router-dom";
// import { assets } from "../assets/frontend_assets/assets";
// import { useContext, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// function Navbar() {
//   const [visible, setVisible] = useState(false);
//   const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext);
//   return (
//     <div className="flex items-center justify-between py-5 font-medium">
//       <Link to={"/"}>
//         <img src={assets.logo} className="w-36" alt="" />
//       </Link>
//       <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
//         <NavLink to="/" className="flex flex-col items-center gap-1">
//           <p>Home</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to="/collection" className="flex flex-col items-center gap-1">
//           <p>Collection</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to="/about" className="flex flex-col items-center gap-1">
//           <p>About</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to="/contact" className="flex flex-col items-center gap-1">
//           <p>Contact</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//       </ul>
//       <div className="flex items-center gap-6">
//         <img
//           onClick={() => setShowSearch(!showSearch)}
//           src={assets.search_icon}
//           className="w-5 cursor-pointer"
//           alt=""
//         />
//         <div className="group relative">
//           <Link to={"/login"}>
//             {" "}
//             <img
//               src={assets.profile_icon}
//               className="w-5 cursor-pointer"
//               alt=""
//             />
//           </Link>
//           <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
//             <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//               <p className="cursor-pointer hover:text-black">My Profile</p>
//               <p className="cursor-pointer hover:text-black">Orders</p>
//               <p className="cursor-pointer hover:text-black">Logout</p>
//             </div>
//           </div>
//         </div>
//         <Link to="/cart " className="relative">
//           <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
//             {getCartCount()}
//           </p>
//         </Link>
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className="w-5 cursor-pointer sm:hidden"
//           alt=""
//         />
//       </div>
//       {/* sidebar menu for small scrrens */}
//       <div
//         className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
//           visible ? "w-full" : "w-0"
//         }`}
//       >
//         <div className="flex flex-col text-gray-600">
//           <div
//             onClick={() => setVisible(false)}
//             className="flex items-center gap-4 p-3 cursor-pointer"
//           >
//             <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
//             <p>Back</p>
//             <div>
//               <NavLink
//                 onClick={() => setVisible(false)}
//                 className="py-2 pl-6 border"
//                 to="/"
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 onClick={() => setVisible(false)}
//                 className="py-2 pl-6 border"
//                 to="/collection"
//               >
//                 Collection
//               </NavLink>
//               <NavLink
//                 onClick={() => setVisible(false)}
//                 className="py-2 pl-6 border"
//                 to="/about"
//               >
//                 About
//               </NavLink>
//               <NavLink
//                 onClick={() => setVisible(false)}
//                 className="py-2 pl-6 border"
//                 to="/contact"
//               >
//                 Contact
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right Section (Search, Profile, Cart, Menu) */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />
        <div className="group relative">
          <Link to={"/login"}>
            <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu Icon for Mobile Screens */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        } overflow-hidden sm:hidden z-50`}
      >
        <div className="flex flex-col text-gray-600 p-6">
          {/* Back Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 mb-4 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>

          {/* Sidebar Nav Links */}
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 border-b"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 border-b"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 border-b"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 border-b"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

