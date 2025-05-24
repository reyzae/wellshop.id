// app/components/BannerEvent.js
export default function BannerEvent() {
  return (
    <section className="banner-event" style={{
      margin: '28px 0 0 0', padding: 0, textAlign: 'center'
    }}>
      <img
        src="/event-banner.svg"
        alt="Event Wellshop"
        style={{ maxWidth: '98%', borderRadius: 18, boxShadow: "0 2px 16px #a259ff18", margin: "auto" }}
      />
      {/* Banner dummy, nanti bisa diganti gambar dinamis */}
    </section>
  );
}
