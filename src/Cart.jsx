import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GenralContext } from "./GenralContext";

function CartPage() {
  const { isLoggedIn, addToCart, removeFromCart, cartItems } =
    useContext(GenralContext);
  const navigate = useNavigate();

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * (item.quantity || 0),
      0
    );
  };

  // Handle proceed button click
  const handleProceed = () => {
    if (isLoggedIn) {
      navigate("/billing");
    } else {
      alert("Please login first to continue!");
      navigate("/login");
    }
    // Later you can check login here (using state/context)
    // navigate("/billing");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 pb-32">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-2xl font-semibold text-gray-500 mt-20">
            Your cart is empty.
          </div>
        ) : (
          <div className="max-h-[70vh] overflow-y-auto pr-2">
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.dec}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {item.dec}
                      </p>
                      <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Counter in Cart */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(item.dec)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-yellow-300 px-3 py-1 rounded hover:bg-amber-400"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sticky Bottom Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md px-4 py-3">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <p className="text-lg font-semibold text-gray-800">
              Total: ₹{getTotal()}
            </p>
            <button
              onClick={handleProceed}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
            >
              Login to Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
