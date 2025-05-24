// components/Navbar.js
"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-brand">
        <img src="/wellshop-logo.svg" alt="Wellshop Logo" height="40" />
        <span>Wellshop.id</span>
      </div>
      <nav className={open ? "nav-menu active" : "nav-menu"}>
        <a href="#">Home</a>
        <a href="#produk">Produk</a>
        <a href="#">Promo</a>
        <a href="#">FAQ</a>
        <a href="#">Login</a>
        <a href="#">Daftar</a>
      </nav>
      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </div>
    </header>
  );
}
