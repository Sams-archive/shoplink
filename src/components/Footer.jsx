import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h3>ShopLink</h3>

        <p>One link. Your entire shop.</p>

        <nav className="footer-links-text">
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/how-it-works">How it works</a>
        </nav>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/+2348100942474?text=Hello%20ShopLink%20Support!"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-whatsapp"
        >
          Chat with us on WhatsApp
        </a>

        {/* Legal / trust links */}
        <div className="footer-legal">
          <a href="/privacy">Privacy</a>
          <span>•</span>
          <a href="/terms">Terms</a>
          <span>•</span>
          <a href="/contact">Contact</a>
        </div>

        <small>
          © {new Date().getFullYear()} ShopLink. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
