export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow" data-reveal>Our Services</div>
          <h2 className="h2" data-reveal data-reveal-delay="1" style={{ marginTop: 18 }}>
            Considered treatments,<br />
            tailored to <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>you.</em>
          </h2>
          <p className="lead" data-reveal data-reveal-delay="2" style={{ margin: '18px auto 0' }}>
            A curated menu of clinical and restorative services — every protocol begins with a quiet
            conversation about the skin you want to live in.
          </p>
        </div>

        <div className="services-grid">
          <div className="service" data-reveal>
            <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M24 6c-8 6-12 12-12 20a12 12 0 0024 0c0-8-4-14-12-20z" />
              <path d="M18 28c2 4 6 6 10 4" strokeLinecap="round" />
            </svg>
            <h3>Skin<br />Treatments</h3>
            <p>Bespoke facials, peels, and microneedling protocols that restore tone, glow and clarity.</p>
            <span className="more">Explore →</span>
          </div>

          <div className="service" data-reveal data-reveal-delay="1">
            <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M14 10c8 4 12 4 20 0M14 22c8 4 12 4 20 0M14 34c8 4 12 4 20 0" />
            </svg>
            <h3>Body<br />Contouring</h3>
            <p>Non-invasive sculpting, lymphatic drainage, and radiofrequency that refines silhouette.</p>
            <span className="more">Explore →</span>
          </div>

          <div className="service" data-reveal data-reveal-delay="2">
            <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="24" cy="24" r="6" />
              <path
                d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M10 38l4-4"
                strokeLinecap="round"
              />
            </svg>
            <h3>Laser<br />Treatments</h3>
            <p>Precision laser for pigmentation, redness, and lasting hair reduction across all skin types.</p>
            <span className="more">Explore →</span>
          </div>

          <div className="service" data-reveal data-reveal-delay="3">
            <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M16 14h16v22a6 6 0 01-6 6h-4a6 6 0 01-6-6V14z" />
              <path d="M19 14V9a5 5 0 0110 0v5" />
            </svg>
            <h3>Skincare<br />Apothecary</h3>
            <p>Our private-label apothecary — clean actives blended in small batches, prescribed for you.</p>
            <span className="more">Explore →</span>
          </div>
        </div>

        <div className="services-foot">
          <a href="#contact" className="btn--text">View all Services →</a>
        </div>
      </div>
    </section>
  );
}
