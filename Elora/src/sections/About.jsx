export default function About() {
  return (
    <section id="about" style={{ background: 'var(--cream-soft)' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-imgs" data-reveal>
            <div className="photo a1">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1100&q=85&auto=format&fit=crop"
                alt="Treatment room"
              />
            </div>
            <div className="photo a2">
              <img
                src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=700&q=85&auto=format&fit=crop"
                alt="Botanical detail"
              />
            </div>
            <div className="photo a3">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700&q=85&auto=format&fit=crop"
                alt="Apothecary products"
              />
            </div>
          </div>

          <div>
            <span className="eyebrow left" data-reveal>Why Elora</span>
            <h2 className="h2" style={{ margin: '18px 0 24px' }} data-reveal data-reveal-delay="1">
              Quietly clinical.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Unmistakably</em> calm.
            </h2>
            <p className="lead" data-reveal data-reveal-delay="2">
              We built ELORA for the woman who has tried everything — and is tired of feeling sold to.
              No upsells, no pressure. Just unhurried, results-driven care from practitioners who treat
              your skin like it's their own.
            </p>

            <div className="why-list">
              <div className="item" data-reveal data-reveal-delay="1">
                <span className="num">01</span>
                <div>
                  <h4>Master Practitioners</h4>
                  <p>Every member of our team holds advanced certification in medical aesthetics, with a minimum of seven years on the floor.</p>
                </div>
              </div>
              <div className="item" data-reveal data-reveal-delay="2">
                <span className="num">02</span>
                <div>
                  <h4>Considered Spaces</h4>
                  <p>Six private treatment suites, marble-warmed lighting, and the scent of oud and tuberose. The ritual begins at the door.</p>
                </div>
              </div>
              <div className="item" data-reveal data-reveal-delay="3">
                <span className="num">03</span>
                <div>
                  <h4>Honest Results</h4>
                  <p>We will tell you when a treatment is right — and just as readily, when it is not. Our average client returns for over four years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
