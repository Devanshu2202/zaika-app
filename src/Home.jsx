import React, { useContext, useState } from "react";
import ResData from "./Items";
import Header from "./Header";
import FoodCategory from "./Category";
import Footer from "./Footer";
import { GenralContext } from "./GenralContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth} from "./Firebase"; 

function Home() {
  const [dish, setDish] = useState(ResData);
  const [item, setItem] = useState(true);

  //  All state and functions directly from context
  const { addToCart, removeFromCart, cartItems,setIsLoggedIn } = useContext(GenralContext);

  //  Single filter function instead of 4 duplicates
  function filterCategory(category) {
    setItem(true);
    const finaldish = ResData.filter((val) => val.cart === category);
    setDish(finaldish);
  }
  // useeffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
         setIsLoggedIn(true);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [setIsLoggedIn]);

  return (
    <div>
      {/*  Header now only gets category filter functions */}
      <Header
        Sweet={() => filterCategory("Sweet")}
        MainDish={() => filterCategory("MainDish")}
        Soup={() => filterCategory("Soup")}
        Beverage={() => filterCategory("Beverage")}
      />

      {/* ✅ FoodCategory can read addToCart/removeFromCart itself via context */}
      <div className="overflow-hidden">
        <FoodCategory />
      </div>

      <h1 className="text-2xl font-bold mt-6 ml-30">
        Top restaurant food items chains
      </h1>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-20 ml-20">
        {item &&
          dish.map((food) => {
            const qty =
              cartItems.find((c) => c.dec === food.dec)?.quantity || 0;

            return (
              <div
                key={food.dec}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center"
              >
                <img
                  className="w-full h-60 object-cover rounded-2xl transition-transform duration-200 ease-in hover:scale-105 cursor-pointer"
                  src={food.img}
                  alt={food.dec}
                />
                <p className="font-bold mt-3">Description: {food.dec}</p>
                <p>Price: ₹{food.price}</p>

                {/* ✅ ADD or Counter */}
                {qty === 0 ? (
                  <button
                    onClick={() => addToCart(food)}
                    className="mt-3 bg-yellow-300 px-4 py-1 rounded hover:bg-amber-400"
                  >
                    ADD
                  </button>
                ) : (
                  <div className="mt-3 flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
                    <button
                      onClick={() => removeFromCart(food.dec)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-bold">{qty}</span>
                    <button
                      onClick={() => addToCart(food)}
                      className="bg-yellow-300 px-3 py-1 rounded hover:bg-amber-400"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
