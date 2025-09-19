import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GenralContext } from "./GenralContext";

function BillingPage() {
  const {cartItems}=useContext(GenralContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "cod",
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   //handleChange function → (e) means e is a parameter
  const handleSubmit = (e) => {
    //stop page reload
    e.preventDefault(); 

    // Save order details in localStorage
    const orderDetails = {
      ...formData,
      items: cartItems,
      total,
    };
    //saves the order details object into the browser’s localStorage by first converting it into a string.
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* LEFT SIDE - Billing Form */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Delivery & Payment
          </h2>

          <form  id="billingForm" onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Delivery Address</label>
              <textarea
                name="address"
                placeholder="Enter delivery address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                rows="3"
                required
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold mb-1">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
              </select>
            </div>

            {/* <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-lg font-semibold"
            >
              Place Order
            </button> */}
          </form>
        </div>

        {/* RIGHT SIDE - Cart Summary */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>

          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b pb-2 text-gray-700"
              >
                <span>
                  {item.dec} <span className="text-sm">x{item.quantity}</span>
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4 text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>₹{total}</span>
            
          </div>
           <button
              type="submit"
              //Button outside form but linked with form="billingForm"
              form="billingForm"
              className="w-full mt-70 bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-lg font-semibold"
            >
              Place Order
            </button>
        </div>
        
      </div>
    </div>
  );
}

export default BillingPage;
