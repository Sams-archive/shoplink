import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto text-center px-4 py-10 sm:px-6 lg:px-8 space-y-4">
        
        {/* Logo */}
        <h3 className="text-2xl font-bold text-gray-900">ShopLink</h3>
        
        {/* Tagline */}
        <p className="text-gray-600">One link. Your entire shop.</p>

        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-6">
          <a href="/" className="text-gray-500 hover:text-green-500 transition">Home</a>
          <a href="/features" className="text-gray-500 hover:text-green-500 transition">Features</a>
          <a href="/how-it-works" className="text-gray-500 hover:text-green-500 transition">How it works</a>
        </nav>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/+2348100942474?text=Hello%20ShopLink%20Support!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-green-500 font-medium hover:opacity-80 transition"
        >
          Chat with us on WhatsApp
        </a>

        {/* Legal Links */}
        <div className="flex justify-center items-center gap-2 flex-wrap text-gray-400 text-sm">
          <a href="/privacy" className="hover:text-green-500 transition">Privacy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-green-500 transition">Terms</a>
          <span>•</span>
          <a href="/contact" className="hover:text-green-500 transition">Contact</a>
        </div>

        {/* Copyright */}
        <small className="block text-gray-400 text-xs">
          © {new Date().getFullYear()} ShopLink. All rights reserved.
        </small>

      </div>
    </footer>
  );
}
