import { useState } from "react";
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

{/* <Routes>
  existing routes
  <Route path="/billing" element={<BillingPage />} />
</Routes> */}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Add or increase quantity
  function addToCart(item) {
    setCartItems((prev) => {
       // Check if item already exists in the cart
      const exists = prev.find((p) => p.dec === item.dec);
      if (exists) {
        // If item exists, increase its quantity
        return prev.map((p) =>
          p.dec === item.dec ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // If item does not exist, add it with quantity = 1
      return [...prev, { ...item, quantity: 1 }];
    });
    toast.success("Item added to cart");
  }

  // Decrease quantity (remove if 0)
  function removeFromCart(itemDec) {
    setCartItems((prev) =>
      prev
        .map((p) => (p.dec === itemDec ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    );
     toast.success("Item removed from cart");
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/Cart"
          element={
            <CartPage
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/Help" element={<HelpPage />} />
         <Route path="/billing" element={<BillingPage  cartItems={cartItems}/>} />
         <Route path="/payment" element={<SuccessPage />} />
         <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
