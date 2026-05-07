export default function Gallery() {
  return (
    <section data-section="gallery" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>Inside the Atelier</span>
          <h2 className="h2" data-reveal data-reveal-delay="1" style={{ marginTop: 18 }}>
            Six suites, <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>unhurried.</em>
          </h2>
        </div>
        <div
          className="gallery-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
        >
          <div className="photo" style={{ aspectRatio: '4/5' }} data-reveal>
            <img
              src="https://images.unsplash.com/photo-1591311630200-ffa9120a540f?w=900&q=85&auto=format&fit=crop"
              alt="Treatment suite"
            />
          </div>
          <div className="photo" style={{ aspectRatio: '4/5' }} data-reveal data-reveal-delay="1">
            <img
              src="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=900&q=85&auto=format&fit=crop"
              alt="Spa room"
            />
          </div>
          <div className="photo" style={{ aspectRatio: '4/5' }} data-reveal data-reveal-delay="2">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=85&auto=format&fit=crop"
              alt="Apothecary"
            />
          </div>
          <div className="photo" style={{ aspectRatio: '4/5' }} data-reveal data-reveal-delay="3">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop"
              alt="Hydrotherapy ritual"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
