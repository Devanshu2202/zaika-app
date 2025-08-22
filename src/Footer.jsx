import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-extrabold ml-9 text-orange-500 mb-3 tracking-wide">
            ZaikaBox
          </h1>
          <p className="text-sm leading-relaxed">
            Tasty meals delivered to your doorstep. Explore food with love and freshness.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Help", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Categories
          </h2>
          <ul className="space-y-2 text-sm">
            {["Soup", "Main Dish", "Sweet", "Beverages"].map((cat) => (
              <li key={cat} className="hover:text-orange-400 transition-colors duration-300">
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Contact Us
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@foodieapp.com" className="hover:text-orange-400 transition-colors duration-300">support@foodieapp.com</a></li>
            <li>Phone: 9876543210</li>
            <li>Address: Ahmedabad, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ZaikaBox. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
