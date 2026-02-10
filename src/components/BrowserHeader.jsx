import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BrowseHeader = ({ onSearch }) => {
  const navigate = useNavigate();

//    return (
//       <motion.nav
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: delay, duration: 0.8 }}
//         className="landing-nav"
//       >
//         <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
//           🛒 ShopLink
//         </div>
  
//         <div className="links">
//         <a href="#features" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</a>
//           <a href="#features" onClick={() => navigate("/features")}>Features</a>
//           <a href="#how-it-works"  onClick={() => navigate("/how-it-works")}>How it works</a>
//           <button
//         className="btn-primary"
//         onClick={() => navigate("/auth")}
//       >
//         Login/Signup
//       </button> 
//         </div>
//       </motion.nav>
//     );
//   };

  return (
    <div style={{display:"flex", flexDirection:"row", width:"100%", margin:"auto", padding:"20px 0", alignItems:"center", justifyContent:"space-between", position:"fixed", top:0, left:0, zIndex:100, boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}>
    <motion.nav
     initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
        className="landing-nav"
        
    >
    <nav className="browse-nav">
      <div className="nav-left">
        <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          🛒 ShopLink
        </div>
      </div>

      <div className="nav-center">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search shops by name..." 
            onChange={(e) => onSearch(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="nav-right">
        <button className="seller-link" onClick={() => navigate("/seller-signup")}>
          Open a Shop
        </button>
      </div>
    </nav>

      </motion.nav>
      </div>
    
  );
};

export default BrowseHeader;


  