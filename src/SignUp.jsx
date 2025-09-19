import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth} from "./Firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
import { GenralContext } from "./GenralContext";


function SignUpPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setIsLoggedIn } = useContext(GenralContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create user with email & password in Firebase Auth
       await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((error)=>console.log (error))

    //   const user = userCredential.user;

      // Save extra details in Firestore
    //   await setDoc(doc(db, "users", user.uid), {
    //     name,
    //     phone,
    //     email,
    //     createdAt: new Date(),
    //   });

      // Update context & redirect
      setIsLoggedIn(true);
      toast.success("Signup Successful!");
      navigate("/"); // redirect to homepage or cart
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-pink-400">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-2">
          ZaikaBox
        </h1>
        <p className="text-gray-500 text-center mb-6">Create your account</p>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

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
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-3">
          Already have an account?
          <a href="/login" className="text-orange-500 ml-1 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;






