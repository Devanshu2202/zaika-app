import React from "react";
import { Users, PackagePlus ,Gauge} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "User Management", path: "/users", icon: Users },
    { name: "Dashboard", path: "/dashboard", icon: Gauge },
    { name: "Products", path: "/add-products", icon: PackagePlus },
  ];

  return (
    <div className="w-64 h-screen bg-white  shadow-sm flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b">
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
          Admin<span className="text-gray-800">Panel</span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <span
                className={`p-2 rounded-md ${
                  isActive ? "bg-white/20" : "bg-gray-100 text-gray-500"
                }`}
              >
                <Icon size={18} />
              </span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t text-xs text-gray-400 text-center">
        © {new Date().getFullYear()} Admin Dashboard
      </div>
    </div>
  );
};

export default Sidebar;
