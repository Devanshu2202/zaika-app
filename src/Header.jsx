import React, { useState } from "react";
import { CircleUserRound, Handshake, ArrowDownWideNarrow } from "lucide-react";
import Logo from "./assets/Logo.png";
import Logo1 from "./assets/logo1.jpg"
import Logo2 from "./assets/logo2.png"
import { Link } from "react-router-dom";

function Header({
  Sweet,
  MainDish,
  Soup,
  Beverage,
  isLoggedIn,
  cartItems = [],
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (category) => {
    setShowDropdown(false);
    switch (category) {
      case "Soup":
        Soup("Soup");
        break;
      case "MainDish":
        MainDish("MainDish");
        break;
      case "Sweet":
        Sweet("Sweet");
        break;
      case "Beverage":
        Beverage("Beverage");
        break;
      default:
        break;
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 font-sans">
          {/* Left logo and name */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={Logo2}
                alt="Logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
            </Link>
            {/* {isLoggedIn ? "Secure Checkout": "Foodie App"} */}
            <h1 className="ml-3 text-xl font-bold text-gray-800">ZaikaBox</h1>
          </div>

          {/* Category dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-gray-700 ml-20 hover:text-orange-500 font-semibold transition"
            >
              All Categories 
            </button>

            {showDropdown && (
              <div className="absolute top-10 left-15 mt-1 bg-white shadow-lg  w-40 z-50  items-center">
                <button
                  onClick={() => handleSelect("Soup")}
                  className="block w-full  px-4 py-1 hover:bg-orange-200"
                >
                  Soup
                </button>
                <button
                  onClick={() => handleSelect("MainDish")}
                  className="block w-full  px-4 py-1 hover:bg-orange-200"
                >
                  Main Dish
                </button>
                <button
                  onClick={() => handleSelect("Sweet")}
                  className="block w-full px-4 py-1 hover:bg-orange-200"
                >
                  Sweet
                </button>
                <button
                  onClick={() => handleSelect("Beverage")}
                  className="block w-full px-4 py-1 hover:bg-orange-200"
                >
                  Beverages
                </button>
              </div>
            )}
          </div>

          {/* Right side (Help, Sign In/Profile, Cart) */}
          <div className="flex items-center space-x-6">
            <Link
              to="/Help"
              className="flex items-center text-gray-700 hover:text-orange-500 font-semibold transition"
            >
              <Handshake className="w-5 h-5 mr-1" />
              Help
            </Link>

            <Link
              to={isLoggedIn ? "/" : "/Login"}
              className="flex items-center text-gray-700 hover:text-orange-500 font-semibold transition"
            >
              <CircleUserRound className="w-5 h-5 mr-1" />
              {isLoggedIn ? "Profile" : "Sign In"}
            </Link>

            <Link to="/Cart">
              <button className="text-gray-700 hover:text-orange-500 font-semibold transition relative">
                Cart
                {/* Show count badge only if there are items */}
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-7 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </Link>
            <Link className="text-gray-700 hover:text-orange-500 font-semibold transition relative" to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
