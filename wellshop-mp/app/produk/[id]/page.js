"use client";
import { use } from "react";
import products from "../../data/products";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function ProductDetail(props) {
  // Ambil params dengan React.use()
  const params = use(props.params);
  const id = params.id;

  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div style={{padding: 40, textAlign:'center', color: '#F1641E'}}>
        Produk tidak ditemukan.
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: 500,
      margin: "48px auto",
      padding: 24,
      borderRadius: 18,
      background: "#fff",
      boxShadow: "0 2px 24px #a259ff1b",
      border: "1.5px solid #E4E6EA",
      textAlign: "center"
    }}>
      <div style={{ marginBottom: 18, textAlign: "left" }}>
        <Link
          href="/produk"
          className="btn-back"
          style={{
            display: "inline-block",
            color: "#A259FF",
            fontWeight: 600,
            textDecoration: "none",
            border: "2px solid #A259FF",
            borderRadius: "22px",
            padding: "7px 22px",
            fontSize: "1.1rem",
            background: "#fff",
            transition: "background .18s, color .15s, border .15s"
          }}
        >
          ← Kembali ke Produk
        </Link>
      </div>
      <img src={product.image} alt={product.name} width={160} style={{borderRadius: 16, marginBottom: 20}} />
      <h2 style={{color: "#F1641E", fontWeight: 900, fontFamily: "'Poppins', Arial", marginTop: 0}}>
        {product.name}
      </h2>
      <div style={{fontSize: 22, color: "#232347", fontWeight: 700, marginBottom: 8}}>
        Rp{product.price.toLocaleString("id-ID")}
      </div>
      <div style={{color: "#A259FF", fontWeight: 600, marginBottom: 12}}>{product.ribbon}</div>
      <div style={{fontSize: 16, color: "#444", marginBottom: 28}}>{product.desc}</div>
      <button
        className="btn-utama"
        style={{fontSize: "1rem", padding: "10px 34px"}}
        onClick={() => addToCart(product)}
      >
        Beli Sekarang
      </button>
    </div>
  );
}
