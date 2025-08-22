import React from "react";

function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold mb-6  flex justify-center text-orange-500">Help & Support</h1>

      <input
        type="text"
        placeholder="Search for help"
        className="w-full border border-gray-300 rounded-lg p-3 mb-10 shadow-sm focus:outline-none  "
      />

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-700"> Orders</h2>
        <div className="space-y-2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">Where is my order?</p>
            <p className="text-sm text-gray-600 mt-1">
              You can track your order in the “My Orders” section.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">Can I cancel my order</p>
            <p className="text-sm text-gray-600 mt-1">
              Yes, orders can be cancelled before the restaurant accepts it.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">Payments</h2>
        <div className="space-y-2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">
              I was charged but did not get my order.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Do not worry Refunds are processed within 5-7 working days.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-700"> Account</h2>
        <div className="space-y-2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium">How to reset my password?</p>
            <p className="text-sm text-gray-600 mt-1">
              Go to Account then Go to Settings then Go to Change Password.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
