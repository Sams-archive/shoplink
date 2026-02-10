// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import LandingNav from "../components/Header";

// const SellerDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: "", price: "", desc: "", image: null });

//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     setProducts([...products, { ...newProduct, id: Date.now() }]);
//     setNewProduct({ name: "", price: "", desc: "", image: null });
//   };

//   return (
//     <div>
//   <LandingNav 
//   delay={0.5} 
//   links={[
//     { label: "Features", path: "/features" },
//     { label: "FAQS", path: "/how-it-works" }
//   ]} 
//   buttonText="Back to Home" 
//   buttonPath="/"
// />
//       <div className="dashboard-container">
//       {/* Sidebar Placeholder */}
//       <aside className="sidebar">
//         <h3>ShopLink Seller</h3>
//         <ul><li>Dashboard</li><li>Orders</li><li>Settings</li></ul>
//       </aside>

//       <main className="main-content">
//         <header>
//           <h1>Welcome Back, Store Owner!</h1>
//           <div className="stats-grid">
//             <div className="stat-card"><h3>1,240</h3><p>Store Views</p></div>
//             <div className="stat-card"><h3>45</h3><p>Total Sales</p></div>
//             <div className="stat-card"><h3>₦150k</h3><p>Revenue</p></div>
//           </div>
//         </header>

//         <section className="product-section">
//           <h2>Add New Product</h2>
//           <form className="add-product-form" onSubmit={handleAddProduct}>
//             <input type="text" placeholder="Product Name" value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct, name: e.target.value})} />
//             <input type="number" placeholder="Price (₦)" value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct, price: e.target.value})} />
//             <textarea placeholder="Description" value={newProduct.desc} onChange={(e)=>setNewProduct({...newProduct, desc: e.target.value})} />
//             <input type="file" onChange={(e)=>setNewProduct({...newProduct, image: e.target.files[0]})} />
//             <button type="submit">List Product</button>
//           </form>
//         </section>

//         <section className="inventory-list">
//           <h2>Your Products</h2>
//           <div className="product-grid">
//             {products.map(p => (
//               <div key={p.id} className="product-item">
//                 <div className="img-placeholder">Image</div>
//                 <h4>{p.name}</h4>
//                 <p>₦{p.price}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//     </div>
//   );
// };

// export default SellerDashboard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingNav from "../components/Header";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="dashboard-wrapper">
      {/* Use the same nav as landing page for consistency */}
      <LandingNav 
        delay={0} 
        links={[{ label: "Storefront", path: "/explore" }]} 
        buttonText="Log Out" 
        buttonPath="/explore" 
      />

      <div className="dashboard-container">
        <aside className="sidebar">
          <h3>Management</h3>
          <ul>
            <li className="active">📊 Overview</li>
            <li>📦 My Products</li>
            <li>💰 Earnings</li>
            <li>⚙️ Store Settings</li>
          </ul>
        </aside>

        <main className="main-content">
          <header>
            <h1>Store Dashboard</h1>
            <p className="subtitle">Track your performance and manage inventory</p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <h3>1,240</h3>
                <p>Total Views</p>
              </div>
              <div className="stat-card">
                <h3>28</h3>
                <p>Orders Today</p>
              </div>
              <div className="stat-card">
                <h3>₦45,000</h3>
                <p>Weekly Revenue</p>
              </div>
            </div>
          </header>

          <section className="product-section">
            <h2>Add New Item</h2>
            <form className="add-product-form">
              <input type="text" placeholder="Product Name" />
              <input type="number" placeholder="Price (₦)" />
              <textarea placeholder="Write a short description of your product..."></textarea>
              <input type="file" />
              <button type="submit">Publish to Store</button>
            </form>
          </section>

          <section className="inventory-list">
            <h2>Active Inventory</h2>
            <div className="product-grid">
              {products.length === 0 ? (
                <p style={{ opacity: 0.5 }}>No products added yet.</p>
              ) : (
                products.map((p) => (
                  <div key={p.id} className="product-item">
                    <div className="img-placeholder">Image</div>
                    <h4>{p.name}</h4>
                    <p>₦{p.price}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;