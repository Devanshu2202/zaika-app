import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem("orderDetails")) || {};

  // Format payment method for display
  const formatPaymentMethod = (method) => {
    if (method === "cod") return "Cash on Delivery";
    if (method === "upi") return "UPI Payment";
    if (method === "card") return "Credit/Debit Card";
    return method || "Not Specified";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        {/* Success Message */}
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          🎉 Order Placed Successfully!
        </h2>

        {/* Customer Details */}
        <p className="mb-2 text-center">
          Thank you, <b>{order.name}</b>!
        </p>
        <p className="mb-2 text-center">Your order will be delivered to:</p>
        <p className="font-semibold text-center break-words">{order.address}</p>

        {/* Payment Method */}
        <p className="mt-4 text-center">
          Payment Method: <b>{formatPaymentMethod(order.paymentMethod)}</b>
        </p>

        {/* Conditional Message */}
        {order.paymentMethod === "cod" ? (
          <p className="text-yellow-600 mt-2 text-center">
            💰 Please keep cash ready at delivery
          </p>
        ) : (
          <p className="text-green-600 mt-2 text-center">
            ✅ Your payment has been received
          </p>
        )}

        {/*  Order Summary */}
        {order.items && (
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-lg mb-3">🛒 Order Summary</h3>

            <div className="space-y-2 max-h-48 overflow-y-auto">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-gray-700"
                >
                  {/* Item Name */}
                  <span className="truncate w-32">{item.dec}</span>

                  {/* Quantity Badge */}
                  <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-md text-sm font-semibold">
                    {item.quantity}x
                  </span>

                  {/* Price */}
                  <span className="font-medium">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between mt-4 text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>₹{order.total}</span>
            </div>
          </div>
        )}

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold mt-6 w-full transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
