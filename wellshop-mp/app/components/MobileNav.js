"use client";
// app/components/MobileNav.js
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Tutup menu saat klik link
  const handleClick = () => setOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <div className={`mobile-nav-toggle${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>

      {/* Overlay for closing */}
      {open && <div className="mobile-nav-overlay" onClick={handleClick}></div>}

      {/* Mobile menu */}
      {open && (
        <nav className="mobile-nav-menu">
          <a href="/" onClick={handleClick}>Home</a>
          <a href="#kategori" onClick={handleClick}>Kategori</a>
          <a href="/produk" onClick={handleClick}>Produk</a>
          <a href="/promo">Promo</a>
          <a href="/faq" onClick={handleClick}>FAQ</a>
          <a href="#">Login</a>
          <a href="#">Daftar</a>
        </nav>
      )}

      <style jsx>{`
        .mobile-nav-toggle {
          display: none;
        }
        @media (max-width: 800px) {
          /* Hamburger Button */
          .mobile-nav-toggle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
            margin-left: 14px;
            z-index: 120;
            width: 32px;
            height: 38px;
          }
          .mobile-nav-toggle span {
            width: 26px;
            height: 3.5px;
            background: var(--primary);
            margin: 4px 0;
            border-radius: 2px;
            transition: 0.35s;
          }
          /* Animasi cross saat open */
          .mobile-nav-toggle.open span:nth-child(1) {
            transform: rotate(45deg) translateY(9px);
          }
          .mobile-nav-toggle.open span:nth-child(2) {
            opacity: 0;
          }
          .mobile-nav-toggle.open span:nth-child(3) {
            transform: rotate(-45deg) translateY(-9px);
          }
          /* Mobile Menu */
          .mobile-nav-menu {
            position: fixed;
            top: 62px; /* pastikan sesuai height navbar */
            right: 14px;
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 2px 18px #a259ff18;
            padding: 24px 32px 18px 32px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            z-index: 120;
            animation: fadein .22s;
          }
          .mobile-nav-menu a {
            color: var(--primary);
            font-size: 1.18rem;
            margin: 10px 0;
            text-decoration: none;
            font-weight: 700;
            transition: color .13s;
          }
          .mobile-nav-menu a:hover {
            color: var(--accent);
          }
          /* Overlay */
          .mobile-nav-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(30,30,50,0.13);
            z-index: 99;
            animation: fadein .18s;
          }
          /* Hide desktop nav-menu */
          .nav-menu {
            display: none !important;
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(-16px);}
            to { opacity: 1; transform: translateY(0);}
          }
        }
      `}</style>
    </>
  );
}
