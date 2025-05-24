import CategorySection from "./components/CategorySection";
import BannerEvent from "./components/BannerEvent";
import FaqSection from "./components/FaqSection";
import MobileNav from "./components/MobileNav";
import products from "./data/products";

export const metadata = {
  title: "Wellshop.id - Marketplace Simple & Unik",
  description: "Marketplace simpel, santai, dan unik untuk kebutuhan belanja kamu. Cari produk, bandingkan harga, dan rasakan pengalaman belanja terbaik!",
};

export default function Home() {
  return (
    <>
      <header className="navbar">
        <div className="nav-brand">
          <span className="logo-wellshop">🛒</span>
          Wellshop.id
        </div>
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="#kategori">Kategori</a>
          <a href="/produk">Produk</a>
          <a href="/promo">Promo</a>
          <a href="/faq">FAQ</a>
          <a href="#">Login</a>
          <a href="#">Daftar</a>
        </nav>
        <MobileNav />
      </header>

      <BannerEvent />
      <CategorySection />

      <section className="hero-section">
        <div className="hero-text">
          <h1>Wellshop.id</h1>
          <h2>Temukan Pilihan, Nikmati Kemudahan Belanja</h2>
          <p>
             Temukan produk pilihan dengan harga bersahabat.<br/>
             Proses mudah, belanja santai, fitur lengkap, tanpa ribet!
          </p>
          <a href="#produk" className="btn-utama">
            <svg height="22" width="22" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 22 22" style={{marginRight: '3px'}}>
              <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M7 12l2 2 5-5" stroke="#fff" strokeWidth="2" fill="none"/>
            </svg>
            Mulai Belanja
          </a>
        </div>
        <div className="hero-image" style={{marginLeft: '30px'}}>
          <img src="/wellshop-hero.svg" alt="Wellshop Hero" width="200" />
        </div>
      </section>

      <section className="promo-section">
        <h3>Promo Hari Ini 🎁</h3>
        <div className="promo-card">
          <div>
            <b>Diskon 25%!</b> Untuk produk “Kaos Santai Unisex” hari ini saja.
            <span className="badge-new">HOT</span>
          </div>
          <a href="#produk" className="btn-utama" style={{marginLeft: 10}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M4 12l6 6L20 6"/>
            </svg>
            Lihat Promo
          </a>
        </div>
      </section>

      <section id="produk" className="produk-section">
        <h3>Pilihan Produk Terpopuler</h3>
        <div className="produk-grid">
  {products.map((prod) => (
    <div className="produk-card" key={prod.id}>
      <span className="ribbon">{prod.ribbon}</span>
      <img src={prod.image} alt={prod.name} />
      <h4>{prod.name}</h4>
      <p className="harga">Rp{prod.price.toLocaleString("id-ID")}</p>
      <a className="btn-produk" href="#">
        <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 6h15l-1.5 9h-13z"/>
          <circle cx="9" cy="20" r="1"/>
          <circle cx="18" cy="20" r="1"/>
        </svg>
        Lihat Detail
      </a>
    </div>
  ))}
</div>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <a href="#" className="btn-utama outline" style={{
            background: "var(--accent)",
            color: "#fff",
            border: "none"
          }}>
            <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Lihat Semua Produk
          </a>
        </div>
      </section>

      <FaqSection />

      <footer>
        <div className="footer-content">
          <div>
            <b>Wellshop.id</b> &copy; {new Date().getFullYear()}<br />
            Temukan Pilihan, Nikmati Kemudahan Belanja 
          </div>
          <div>
            <a href="#">About</a> | <a href="#faq">FAQ</a> | <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
