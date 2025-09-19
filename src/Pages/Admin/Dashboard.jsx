import React from "react";
import Sidebar from "./components/Sidebar";
import { Users, Package, DollarSign, ShoppingCart } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,245",
      icon: <Users className="text-blue-500" size={28} />,
    },
    {
      title: "Products",
      value: "356",
      icon: <Package className="text-green-500" size={28} />,
    },
    {
      title: "Revenue",
      value: "₹8.4L",
      icon: <DollarSign className="text-yellow-500" size={28} />,
    },
    {
      title: "Orders",
      value: "1,024",
      icon: <ShoppingCart className="text-purple-500" size={28} />,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content (shifted by sidebar width) */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen ml-64">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-gray-600 mt-2">Welcome to your admin dashboard.</p>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg transition"
            >
              <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-xl font-bold">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
