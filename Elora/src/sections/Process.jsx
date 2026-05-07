export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>The Elora Process</span>
          <h2 className="h2" data-reveal data-reveal-delay="1" style={{ marginTop: 18 }}>
            Four steps, <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>unhurried.</em>
          </h2>
          <p className="lead" data-reveal data-reveal-delay="2" style={{ margin: '18px auto 0' }}>
            From first conversation to follow-up tea — every visit is built around the same quiet rhythm.
          </p>
        </div>

        <div className="process-grid">
          <div className="step" data-reveal>
            <span className="step-num">i.</span>
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4v8z" />
            </svg>
            <h4>Consultation</h4>
            <p>An unhurried conversation about your skin, your history, and the result you have in mind.</p>
          </div>
          <div className="step" data-reveal data-reveal-delay="1">
            <span className="step-num">ii.</span>
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M4 4h16v16H4zM4 9h16M9 4v16" />
            </svg>
            <h4>Plan</h4>
            <p>A clear, written protocol — the treatments, the cadence, the products, and what to expect.</p>
          </div>
          <div className="step" data-reveal data-reveal-delay="2">
            <span className="step-num">iii.</span>
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
            </svg>
            <h4>Treatment</h4>
            <p>Performed in your private suite. Soft music, warm linen, and complete clinical precision.</p>
          </div>
          <div className="step" data-reveal data-reveal-delay="3">
            <span className="step-num">iv.</span>
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M3 12c4-8 14-8 18 0M12 12v4M3 12c4 8 14 8 18 0" />
            </svg>
            <h4>Care</h4>
            <p>Tea, take-home apothecary, and a follow-up call within seventy-two hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
