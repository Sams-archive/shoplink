import React from "react";
import { useNavigate } from "react-router-dom";

const StoreCard = ({ store, isAd = false }) => {
  const navigate = useNavigate();

  return (
    <div className="feature-card" style={{ 
      minWidth: "220px", 
      position: "relative",
      border: isAd ? "2px solid var(--accent-yellow)" : "1px solid var(--border)"
    }}>
      {isAd && (
        <span style={{ 
          position: "absolute", top: "10px", right: "10px", 
          background: "var(--accent-yellow)", fontSize: "10px", 
          padding: "2px 6px", borderRadius: "4px", color: "#000" 
        }}>AD</span>
      )}
      <div style={{ height: "100px", background: "#f0f0f0", borderRadius: "8px", marginBottom: "10px" }}></div>
      <h3 style={{ fontSize: "1.1rem" }}>{store.name}</h3>
      <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{store.category}</p>
      <button 
        className="btn-primary" 
        style={{ width: "100%", margin: "10px 0 0 0", padding: "10px" }}
        onClick={() => navigate(`/store/${store.name.toLowerCase()}`)}
      >
        Visit Store
      </button>
    </div>
  );
};

export default StoreCard;