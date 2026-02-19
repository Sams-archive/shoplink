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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* 1. Featured Stores */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">🔥 Featured Stores</h2>
          <div className="flex gap-5 overflow-x-auto pb-4">
            {featuredStores.map(store => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </section>

        {/* 2. Sponsored Ads */}
        <section className="mb-10 bg-yellow-50 p-6 rounded-xl border border-dashed border-yellow-400">
          <h2 className="text-lg font-semibold text-yellow-900 mb-4">Sponsored Shops</h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {promotedStores.map(store => (
              <StoreCard key={store.id} store={store} isAd={true} />
            ))}
          </div>
        </section>

        <hr className="border-t border-gray-200 my-10" />

        {/* 3. All Stores & Filtering */}
        <section>
          <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
            <h2 className="text-xl font-bold">All Stores</h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full font-semibold border transition ${
                    filter === cat
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-transparent text-green-500 border-green-500 hover:bg-green-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {finalFilteredStores.length > 0 ? (
              finalFilteredStores.map(store => (
                <StoreCard key={store.id} store={store} />
              ))
            ) : (
              <p className="text-center col-span-full py-16 text-gray-500">
                No shops found matching your search.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
