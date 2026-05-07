export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="marqueeTrack" />
    </div>
  );
}

export function Storefront() {
  return (
    <section data-section="storefront" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="photo" style={{ aspectRatio: '24/9', width: '100%' }} data-reveal>
          <img
            src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=2000&q=85&auto=format&fit=crop"
            alt="ELORA storefront — Mayfair"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
            marginTop: 22,
            flexWrap: 'wrap',
          }}
          data-reveal
          data-reveal-delay="1"
        >
          <p
            className="small"
            style={{
              maxWidth: '60ch',
              fontStyle: 'italic',
              color: 'var(--taupe-deep)',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
            }}
          >
            A refined, intimate atelier — Mayfair, London.
          </p>
          <span
            className="small"
            style={{ letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)' }}
          >
            Visit the Studio →
          </span>
        </div>
      </div>
    </section>
  );
}
