export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-head">
          <span className="eyebrow" data-reveal>Stories</span>
          <h2 className="h2" data-reveal data-reveal-delay="1" style={{ marginTop: 18 }}>
            Words from <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>our circle.</em>
          </h2>
        </div>

        <div className="testi-stage" id="testiStage">
          <div className="testi-slide active">
            <div className="stars">★ ★ ★ ★ ★</div>
            <blockquote>
              "It is the only place where I feel taken care of, not sold to. Six months in, my skin
              looks like the version of me I forgot I had."
            </blockquote>
            <div className="testi-author">
              <span className="name">SOPHIE M.</span>
              <span className="role">Client since 2022</span>
            </div>
          </div>
          <div className="testi-slide">
            <div className="stars">★ ★ ★ ★ ★</div>
            <blockquote>
              "There is a softness here you don't find elsewhere — the lighting, the linen, the way
              they speak to you. The results are extraordinary."
            </blockquote>
            <div className="testi-author">
              <span className="name">CAMILLE D.</span>
              <span className="role">Client since 2020</span>
            </div>
          </div>
          <div className="testi-slide">
            <div className="stars">★ ★ ★ ★ ★</div>
            <blockquote>
              "I have travelled to clinics in Paris and Zurich and still come home to ELORA. It is,
              simply, the best aesthetic care I have ever received."
            </blockquote>
            <div className="testi-author">
              <span className="name">ISABELLE R.</span>
              <span className="role">Client since 2019</span>
            </div>
          </div>
        </div>

        <div className="testi-nav" id="testiNav">
          <button className="dot active" data-i="0" aria-label="Story 1"></button>
          <button className="dot" data-i="1" aria-label="Story 2"></button>
          <button className="dot" data-i="2" aria-label="Story 3"></button>
        </div>
      </div>
    </section>
  );
}
