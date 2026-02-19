import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AuthPage = () => {
  const navigate = useNavigate();
  const BASE_DELAY = 1.5;

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log(isLogin ? "Logging in with:" : "Signing up with:", formData);
    navigate("/seller-dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 relative pt-24 px-4 sm:px-6 lg:px-8">
      
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY, duration: 0.8 }}
        className="w-full max-w-4xl flex justify-between items-center mb-8"
      >
        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          🛒 ShopLink
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-700 hover:text-gray-900 transition"
        >
          Back to Home
        </button>
      </motion.nav>

      {/* FORM WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 0.5, duration: 1 }}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8"
      >
        <h1 className="text-2xl font-bold mb-2">
          {isLogin ? "Login to ShopLink" : "Create an Account"}
        </h1>
        <p className="text-gray-600 mb-4">
          {isLogin
            ? "Enter your details to access your account."
            : "Sign up and start selling or shopping."}
        </p>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition mt-2"
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        {/* TOGGLE LOGIN/SIGNUP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: BASE_DELAY + 1.2, duration: 1 }}
          className="mt-4 text-sm text-gray-600 text-center"
        >
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-green-500 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-green-500 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          )}
        </motion.div>
      </motion.div>

      {/* OPTIONAL HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: BASE_DELAY + 1.5, duration: 1 }}
        className="absolute bottom-0 w-full flex justify-center pointer-events-none"
      >
        {/* <img src={Feature} alt="ShopLink preview" className="w-80 sm:w-96" /> */}
      </motion.div>
    </div>
  );
};

export default AuthPage;
