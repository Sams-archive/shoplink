import React, { useState } from "react";
import LandingNav from "../components/Header";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <LandingNav 
        delay={0} 
        links={[{ label: "Storefront", path: "/explore" }]} 
        buttonText="Log Out" 
        buttonPath="/explore" 
      />

      {/* DASHBOARD LAYOUT */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 gap-6">
        
        {/* SIDEBAR */}
        <aside className="w-full lg:w-64 bg-white shadow rounded-lg p-5 flex-shrink-0">
          <h3 className="text-lg font-semibold mb-4">Management</h3>
          <ul className="flex flex-col gap-3 text-gray-700">
            <li className="font-bold text-green-600 cursor-pointer">📊 Overview</li>
            <li className="hover:text-green-600 cursor-pointer">📦 My Products</li>
            <li className="hover:text-green-600 cursor-pointer">💰 Earnings</li>
            <li className="hover:text-green-600 cursor-pointer">⚙️ Store Settings</li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col gap-8">
          {/* HEADER STATS */}
          <header className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-1">Store Dashboard</h1>
            <p className="text-gray-500 mb-6">Track your performance and manage inventory</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <h3 className="text-xl font-bold">1,240</h3>
                <p className="text-gray-500">Total Views</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <h3 className="text-xl font-bold">28</h3>
                <p className="text-gray-500">Orders Today</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <h3 className="text-xl font-bold">₦45,000</h3>
                <p className="text-gray-500">Weekly Revenue</p>
              </div>
            </div>
          </header>

          {/* ADD NEW PRODUCT */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
            <form className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Product Name" 
                className="border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
              />
              <input 
                type="number" 
                placeholder="Price (₦)" 
                className="border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
              />
              <textarea 
                placeholder="Write a short description of your product..." 
                className="border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
              />
              <input type="file" className="border rounded-lg p-2" />
              <button 
                type="submit" 
                className="btn-primary px-4 py-2 rounded-lg w-max"
              >
                Publish to Store
              </button>
            </form>
          </section>

          {/* INVENTORY */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Active Inventory</h2>
            {products.length === 0 ? (
              <p className="text-center text-gray-400 py-10">No products added yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) => (
                  <div key={p.id} className="border rounded-lg p-4 flex flex-col items-center gap-2">
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      Image
                    </div>
                    <h4 className="font-semibold">{p.name}</h4>
                    <p className="text-green-600 font-bold">₦{p.price}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
