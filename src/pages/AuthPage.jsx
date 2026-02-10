import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AuthPage = () => {
  const navigate = useNavigate();
  const BASE_DELAY = 1.5;

  // Toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  // Form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Form errors
  const [error, setError] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
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

    if (isLogin) {
      console.log("Logging in with:", formData);
      // TODO: call your login API here
      navigate("/seller-dashboard"); // redirect after login
    } else {
      console.log("Signing up with:", formData);
      // TODO: call your signup API here
      navigate("/seller-dashboard"); // redirect after signup
    }
  };

  return (
    <div className="auth-container">

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY, duration: 0.8 }}
        className="auth-nav"
      >
        <div className="logo">🛒 ShopLink</div>
        <div className="links">
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </motion.nav>

      {/* FORM WRAPPER */}
      <motion.div
        className="auth-form-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 0.5, duration: 1 }}
      >
        <h1>{isLogin ? "Login to ShopLink" : "Create an Account"}</h1>
        <p>
          {isLogin
            ? "Enter your details to access your account."
            : "Sign up and start selling or shopping."}
        </p>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          )}

          <motion.button
            type="submit"
            className="auth-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        {/* TOGGLE LOGIN/SIGNUP */}
        <motion.div
          className="auth-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: BASE_DELAY + 1.2, duration: 1 }}
        >
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </motion.div>
      </motion.div>

      {/* OPTIONAL HERO IMAGE */}
      <motion.div
        className="auth-hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: BASE_DELAY + 1.5, duration: 1 }}
      >
        {/* Example: reuse LandingPage feature image */}
        {/* <img src={Feature} alt="ShopLink preview" /> */}
      </motion.div>
    </div>
  );
};

export default AuthPage;
