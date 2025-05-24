"use client";
import { createContext, useContext, useState } from "react";

// Buat Context
const CartContext = createContext();

// Provider untuk membungkus app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Tambah produk ke keranjang
  const addToCart = (product) => {
    setCart((prev) => {
      // Cek sudah ada? (id saja)
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // Kalau sudah ada, tambah qty
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // Remove atau clear dll bisa ditambah nanti

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook custom untuk akses context
export const useCart = () => useContext(CartContext);
