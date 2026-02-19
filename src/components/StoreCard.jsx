import React from "react";
import { useNavigate } from "react-router-dom";

const StoreCard = ({ store, isAd = false }) => {
  const navigate = useNavigate();

  return (
    <div className={`relative min-w-[220px] bg-white rounded-lg p-4 shadow hover:shadow-lg transition 
      ${isAd ? "border-2 border-yellow-400" : "border border-gray-200"}`}
    >
      {/* Ad Badge */}
      {isAd && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-black text-[10px] px-1.5 py-[2px] rounded">
          AD
        </span>
      )}

      {/* Placeholder Image */}
      <div className="h-24 bg-gray-200 rounded mb-2"></div>

      {/* Store Name */}
      <h3 className="text-base font-semibold mb-1">{store.name}</h3>

      {/* Category */}
      <p className="text-sm text-gray-500">{store.category}</p>

      {/* Visit Store Button */}
      <button
        onClick={() => navigate(`/store/${store.name.toLowerCase()}`)}
        className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-yellow-400 hover:text-gray-900 transition"
      >
        Visit Store
      </button>
    </div>
  );
};

export default StoreCard;
