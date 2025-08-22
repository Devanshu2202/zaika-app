import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem("orderDetails")) || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          🎉 Order Placed Successfully!
        </h2>
        <p className="mb-2">Thank you, <b>{order.name}</b>!</p>
        <p className="mb-2">Your order will be delivered to:</p>
        <p className="font-semibold">{order.address}</p>
        {/* <p className="mb-4">📞 {order.phone}</p> */}
        <p className="mb-6">Payment Method: <b>{order.paymentMethod}</b></p>

        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
