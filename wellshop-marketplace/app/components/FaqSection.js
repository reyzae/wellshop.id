// app/components/FaqSection.js
export default function FaqSection() {
  return (
    <section id="faq" style={{
      background: "var(--neutral)",
      borderRadius: 18,
      margin: "38px 0 0 0",
      padding: "30px 18px",
      boxShadow: "0 1px 10px #a259ff11"
    }}>
      <h3 style={{ color: "var(--primary)", fontFamily: "'Poppins', Arial, sans-serif" }}>FAQ Wellshop.id</h3>
      <div style={{ marginTop: 22 }}>
        <details style={{ marginBottom: 14 }}>
          <summary><b>Apa itu Wellshop.id?</b></summary>
          <div>Wellshop.id adalah marketplace simple, santai & unik untuk belanja kebutuhan harian, langsung dari supplier terpercaya.</div>
        </details>
        <details style={{ marginBottom: 14 }}>
          <summary><b>Bagaimana cara membeli produk?</b></summary>
          <div>Pilih produk favorit, klik <i>Lihat Detail</i> lalu lanjutkan ke checkout, atau gunakan tombol <i>Mulai Belanja</i>.</div>
        </details>
        <details>
          <summary><b>Bisa dropship dan reseller?</b></summary>
          <div>Bisa! Support penuh untuk dropship & reseller, kamu bisa mulai tanpa modal besar.</div>
        </details>
      </div>
    </section>
  );
}
