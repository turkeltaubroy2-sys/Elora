export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow left" data-reveal>
              Elevated Aesthetic Care · Est. 2018
            </span>
            <h1 className="display" data-reveal data-reveal-delay="1">
              A quieter kind<br />
              of <em>luxury,</em><br />
              made for skin.
            </h1>
            <p className="lead" data-reveal data-reveal-delay="2">
              ELORA is a private aesthetics atelier where clinical results meet ritual.
              Soft hands, considered formulas, and a calm, undecorated room — designed
              for women who prefer their results undetected.
            </p>
            <div className="actions" data-reveal data-reveal-delay="3">
              <a href="#contact" className="btn">Book Consultation</a>
              <a href="#services" className="btn--text">Discover Services →</a>
            </div>
            <div className="hero-meta" data-reveal data-reveal-delay="4">
              <div className="stat"><span className="num">8 yrs</span><span className="lbl">Of Practice</span></div>
              <div className="stat"><span className="num">12k+</span><span className="lbl">Treatments</span></div>
              <div className="stat"><span className="num">4.96</span><span className="lbl">Average Rating</span></div>
            </div>
          </div>

          <div className="hero-visual" data-reveal data-reveal-delay="2">
            <div className="badge" aria-hidden="true">
              <span className="inner">Licensed · Aesthetic · Studio</span>
            </div>
            <div className="photo frame-main">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1400&q=85&auto=format&fit=crop"
                alt="ELORA luxury spa interior"
                loading="eager"
              />
            </div>
            <div className="frame-mini">
              <div className="photo" style={{ width: '100%', height: '100%' }}>
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=85&auto=format&fit=crop"
                  alt="Spa detail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
