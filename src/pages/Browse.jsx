import React, { useState } from "react";
import StoreCard from "../components/StoreCard";
import BrowseHeader from "../components/BrowserHeader.jsx";

const CATEGORIES = ["All", "Fashion", "Electronics", "Groceries", "Beauty", "Services"];

const MOCK_STORES = [
  { id: 1, name: "Sampson's Tech", category: "Electronics", featured: true, ad: false },
  { id: 2, name: "Bella's Boutique", category: "Fashion", featured: true, ad: true },
  { id: 3, name: "Glow Skin Care", category: "Beauty", featured: false, ad: false },
  { id: 4, name: "Quick Mart", category: "Groceries", featured: false, ad: true },
  { id: 5, name: "Style Hub", category: "Fashion", featured: false, ad: false },
];

export default function Browse() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Logic to handle both Category filter AND Search term
  const finalFilteredStores = MOCK_STORES.filter(store => {
    const matchesCategory = filter === "All" || store.category === filter;
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredStores = MOCK_STORES.filter(s => s.featured);
  const promotedStores = MOCK_STORES.filter(s => s.ad);

  return (
    <div className="browse-page-wrapper">
      {/* Search Header */}
      <BrowseHeader onSearch={setSearchTerm} />

      <div className="browser-content" style={{ padding: "120px 20px 60px", maxWidth: "1400px", margin: "auto" }}>
        
        {/* 1. FEATURED SECTION */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>🔥 Featured Stores</h2>
          <div className="featured-scroll" style={{ display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "15px" }}>
            {featuredStores.map(store => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </section>

        {/* 2. SPONSORED ADS SECTION */}
        <section className="ads-container" style={{ marginBottom: "40px", background: "#fdf8e6", padding: "25px", borderRadius: "14px", border: "1px dashed var(--accent-yellow)" }}>
          <h2 style={{ marginBottom: "15px", fontSize: "1.2rem", color: "#856404" }}>Sponsored Shops</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {promotedStores.map(store => (
              <StoreCard key={store.id} store={store} isAd={true} />
            ))}
          </div>
        </section>

        <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "40px 0" }} />

        {/* 3. ALL STORES & FILTERING */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "15px" }}>
            <h2>All Stores</h2>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`category-btn ${filter === cat ? "active" : ""}`}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: "1px solid var(--btn-green)",
                    background: filter === cat ? "var(--btn-green)" : "transparent",
                    color: filter === cat ? "white" : "var(--btn-green)",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="stores-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "25px" }}>
            {finalFilteredStores.length > 0 ? (
              finalFilteredStores.map(store => (
                <StoreCard key={store.id} store={store} />
              ))
            ) : (
              <p style={{ textAlign: "center", gridColumn: "1 / -1", padding: "40px", color: "var(--muted)" }}>
                No shops found matching your search.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}