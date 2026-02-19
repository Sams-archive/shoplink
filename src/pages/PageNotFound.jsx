import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Feature from "../assets/features.png"; 
import EasyToUseIcon from "../assets/easy.png";
import SellMoreIcon from "../assets/trade.png";
import GrowIcon from "../assets/grow.png";

const PageNotFound = () => {
  const navigate = useNavigate();
  const BASE_DELAY = 0.5;

  const goToBrowse = (e) => {
    e?.preventDefault();
    navigate("/explore");
  };
  
  const goToHome = (e) => {
    e?.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY, duration: 0.8 }}
        className="w-full max-w-6xl flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 fixed top-0 z-50 bg-white shadow"
      >
        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          🛒 ShopLink
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-green-600" onClick={() => navigate("/features")}>
            Features
          </button>
          <button className="text-gray-700 hover:text-green-600" onClick={() => navigate("/how-it-works")}>
            How it works
          </button>
          <button className="btn-primary px-4 py-2 rounded-lg" onClick={() => navigate("/auth")}>
            Login/Signup
          </button>
        </div>
      </motion.nav>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 0.5, duration: 1 }}
        className="flex flex-col items-center justify-center text-center mt-32 px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Page Not yet <br /> <span className="text-green-600">created</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg sm:text-xl">
          This page isn’t available yet. You can browse products or go back home.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-6 py-3 rounded-lg"
            onClick={goToHome}
          >
            Back Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-6 py-3 rounded-lg"
            onClick={goToBrowse}
          >
            Browse Products
          </motion.button>
        </div>
      </motion.div>

      {/* HERO IMAGE */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
        transition={{
          opacity: { delay: BASE_DELAY + 1, duration: 1 },
          scale: { delay: BASE_DELAY + 1, duration: 1 },
          y: { delay: BASE_DELAY + 2, duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        src={Feature}
        alt="ShopLink preview"
        className="w-full max-w-2xl mt-12"
      />

      {/* FEATURE STRIP */}
      <motion.div
        id="features"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 1.5, duration: 0.8 }}
        className="flex justify-center gap-8 mt-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center gap-2">
          <img src={EasyToUseIcon} alt="Easy to use" className="w-5 h-5" />
          <span className="text-gray-700 text-sm">Easy to use</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={SellMoreIcon} alt="Sell more" className="w-5 h-5" />
          <span className="text-gray-700 text-sm">Sell more via WhatsApp</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={GrowIcon} alt="Grow your business" className="w-5 h-5" />
          <span className="text-gray-700 text-sm">Grow your business</span>
        </div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
