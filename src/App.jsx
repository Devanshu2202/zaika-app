import { useState } from "react";
import { GenralContext } from "./GenralContext";
import "./App.css";
import Home from "./Home";
import LoginPage from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelpPage from "./Help";
import CartPage from "./Cart";
import toast from "react-hot-toast";
import BillingPage from "./BillingPage";
import SuccessPage from "./Payment";
import About from "./AboutUs";
import SignUpPage from "./SignUp";
import ForgetPassword from "./ForgetPassword";
import Dashboard from "./Pages/Admin/Dashboard";
import Products from "./Pages/Admin/AddProductpage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Add or increase quantity
  function addToCart(item) {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.dec === item.dec);
      if (exists) {
        return prev.map((p) =>
          p.dec === item.dec ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast.success("Item added to cart");
  }

  // Decrease quantity (remove if 0)
  function removeFromCart(itemDec) {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.dec === itemDec ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
    toast.success("Item removed from cart");
  }

  return (
    <GenralContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/payment" element={<SuccessPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/add-products" element={<Products />} />
          
        </Routes>
      </Router>
    </GenralContext.Provider>
  );
}

export default App;
