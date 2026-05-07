export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <span className="eyebrow" style={{ color: 'var(--gold)' }} data-reveal>Begin</span>
        <h2 data-reveal data-reveal-delay="1" style={{ margin: '22px 0' }}>
          Step inside the<br />
          <em>quiet half-hour.</em>
        </h2>
        <p data-reveal data-reveal-delay="2">
          Reserve a complimentary consultation. No commitment, no pressure — only a soft conversation about
          the skin you want to live in.
        </p>
        <div className="actions" data-reveal data-reveal-delay="3">
          <a href="#" className="btn">Book a Consultation</a>
          <a href="tel:+10000000000" className="btn btn--ghost">Call the Studio</a>
        </div>
      </div>
    </section>
  );
}
