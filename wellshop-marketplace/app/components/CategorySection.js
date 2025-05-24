// app/components/CategorySection.js
export default function CategorySection() {
  return (
    <section id="kategori" style={{
      margin: '32px 0 18px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18,
    }}>
      {[
        { icon: "👕", label: "Fashion" },
        { icon: "🍽️", label: "Peralatan Rumah" },
        { icon: "💻", label: "Elektronik" },
        { icon: "🎒", label: "Aksesoris" },
        { icon: "🧴", label: "Kecantikan" },
        { icon: "🎁", label: "Hadiah" },
      ].map((cat, i) => (
        <div key={i} style={{
          background: "var(--neutral)",
          borderRadius: 18,
          padding: "18px 22px",
          minWidth: 90,
          boxShadow: "0 2px 10px #e4e6ea99",
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "'Poppins', Arial, sans-serif",
          color: "var(--primary)",
          fontSize: "1.05rem"
        }}>
          <span style={{ fontSize: 24 }}>{cat.icon}</span>
          <div>{cat.label}</div>
        </div>
      ))}
    </section>
  );
}
