import React, { useState,useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { GenralContext } from "./App";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setIsLoggedIn}=useContext(GenralContext)

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      toast.success("Login Successful!");
      navigate("/billing");
    } else {
      toast.error("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-pink-400">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-2">
         ZaikaBox
        </h1>
        <p className="text-gray-500 text-center mb-6">Login to continue</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <a href="/forgot" className="hover:underline text-orange-500">
            Forgot Password?
          </a>
        </div>
        <p className="text-sm text-center text-gray-600 mt-3">
          Don’t have an account? 
          <a href="/signup" className="text-orange-500 ml-1 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
