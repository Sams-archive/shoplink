import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LandingNav from "../components/Header.jsx";

const steps = [
  {
    step: "01",
    title: "Create your ShopLink",
    text: "Set up your catalogue by adding your products, prices, and photos in one place.",
  },
  {
    step: "02",
    title: "Share one link",
    text: "Post your ShopLink on WhatsApp status, Instagram bio, or send it directly to customers.",
  },
  {
    step: "03",
    title: "Customers browse your products",
    text: "Buyers view everything you sell from the link without asking for prices one by one.",
  },
  {
    step: "04",
    title: "Sell through WhatsApp chat",
    text: "Customers message you on WhatsApp to place orders. You close the sale as usual.",
  },
];

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <LandingNav 
        delay={0.5} 
        links={[
          { label: "Features", path: "/features" },
          { label: "FAQS", path: "/how-it-works" }
        ]} 
        buttonText="Back to Home" 
        buttonPath="/"
      />

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center px-4 py-16 sm:py-20"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          How ShopLink works
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Sell on WhatsApp without posting your products every day.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-10">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <span className="text-2xl font-bold text-green-600">{item.step}</span>
            <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <button
          className="btn-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition transform"
          onClick={() => navigate("/seller-signup")}
        >
          Create your ShopLink
        </button>
      </div>
    </div>
  );
}
