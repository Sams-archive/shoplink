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
    // TODO: Save to DB then redirect
    navigate("/seller-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav 
        delay={0.5} 
        links={[
          { label: "Why Sell?", path: "/how-it-works" },
          { label: "Support", path: "/features" }
        ]} 
        buttonText="Back to Home" 
        buttonPath="/"
      />

      <motion.div 
        className="flex justify-center items-start mt-24 px-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
            Become a ShopLink Seller
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" name="firstName" placeholder="First Name" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
            />
            <input 
              type="text" name="lastName" placeholder="Last Name" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
            />
            <input 
              type="email" name="email" placeholder="Email Address" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 md:col-span-2"
            />
            <input 
              type="tel" name="phone" placeholder="Phone Number" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
            />
            <input 
              type="text" name="state" placeholder="State (e.g. Lagos)" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
            />
            <input 
              type="text" name="city" placeholder="City" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
            />
            <input 
              type="text" name="shopName" placeholder="Shop/Business Name" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 md:col-span-2"
            />
            <select 
              name="category" onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 md:col-span-2"
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="groceries">Groceries</option>
            </select>
            <input 
              type="password" name="password" placeholder="Password" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
            />
            <input 
              type="password" name="confirmPassword" placeholder="Confirm Password" 
              onChange={handleChange} required
              className="border rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
            />
            <button 
              type="submit" 
              className="md:col-span-2 bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Register Shop
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SellerSignup;
