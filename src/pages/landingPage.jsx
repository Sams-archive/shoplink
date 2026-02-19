import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Feature from "../assets/features.png";
import EasyToUseIcon from "../assets/easy.png";
import SellMoreIcon from "../assets/trade.png";
import GrowIcon from "../assets/grow.png";
import LandingNav from "../components/Header";
import Footer from "../components/Footer";
const LandingPage = () => {
  const navigate = useNavigate();
  const BASE_DELAY = 0.5;

  const goToBrowse = (e) => {
    e?.preventDefault();
    navigate("/explore");
  };

  const goToSellerSignup = (e) => {
    e?.preventDefault();
    navigate("/seller-signup");
  };

  return (
    <div>
    <div className="min-h-screen bg-[#0d4d33] text-white flex flex-col items-center pb-14 pt-20 px-4 sm:px-6 lg:px-12">
      {/* HERO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 0.5, duration: 1 }}
        className="flex flex-col items-center gap-6 text-center max-w-3xl"
      >
        <LandingNav />

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Stop posting every product. <br />
          Share <span className="text-[#ffd54f]">one link</span> instead.
        </h1>

        <p className="text-[#ffd54f]/90 text-base sm:text-lg">
          Put your entire product catalogue in one link. <br />
          Share it on WhatsApp once, and let customers browse and message you to
          buy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToSellerSignup}
            className="bg-[#22c55e] hover:bg-[#ffd54f] hover:text-[#0d4d33] text-white font-semibold rounded-xl px-6 py-3 transition-all shadow-md"
          >
            Start Selling
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToBrowse}
            className="bg-[#22c55e] hover:bg-[#ffd54f] hover:text-[#0d4d33] text-white font-semibold rounded-xl px-6 py-3 transition-all shadow-md"
          >
            Continue as Buyer
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
          y: {
            delay: BASE_DELAY + 2,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        src={Feature}
        alt="ShopLink store preview"
        className="mt-10 w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-xl shadow-2xl"
      />

      {/* FEATURE STRIP */}
      <motion.div
        id="features"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 1.5, duration: 0.8 }}
        className="mt-16 flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center"
      >
        <div className="flex items-center gap-2 font-bold text-base sm:text-lg">
          <img
            src={EasyToUseIcon}
            alt="Easy to use"
            className="w-5 h-5 sm:w-4 sm:h-4"
          />
          Easy to use
        </div>

        <div className="flex items-center gap-2 font-bold text-base sm:text-lg">
          <img
            src={SellMoreIcon}
            alt="Sell more"
            className="w-5 h-5 sm:w-4 sm:h-4"
          />
          Sell more via WhatsApp
        </div>

        <div className="flex items-center gap-2 font-bold text-base sm:text-lg">
          <img src={GrowIcon} alt="Grow" className="w-5 h-5 sm:w-4 sm:h-4" />
          Grow your business
        </div>
      </motion.div>
    
    </div>
      <Footer/>
      </div>
  );
};

export default LandingPage;
