import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LandingNav from "../components/Header";

const SellerSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    state: "", city: "", shopName: "", category: "", password: "", confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seller Registered:", formData);
    // Logic: Save to DB then redirect
    navigate("/seller-dashboard");
  };

  return (
    <div>
     <LandingNav 
  delay={0.5} 
  links={[
    { label: "Why Sell?", path: "/seller-info" },
    { label: "Support", path: "/help" }
  ]} 
  buttonText="Back to Home" 
  buttonPath="/"
/>
       <motion.div 
      className="seller-auth-container"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <div className="auth-card">
        <h2 style={{
           marginBottom: 20,
           color: "var(--accent-yellow)",
            textAlign: "center"}}>
            Become a ShopLink Seller
          </h2>
        <form onSubmit={handleSubmit} className="grid-form">
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="text" name="state" placeholder="State (e.g. Lagos)" onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="shopName" placeholder="Shop/Business Name" onChange={handleChange} required />
          <select name="category" onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="groceries">Groceries</option>
          </select>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          <button type="submit" className="auth-btn">Register Shop</button>
        </form>
      </div>
    </motion.div>
    </div>
   
  );
};

export default SellerSignup;