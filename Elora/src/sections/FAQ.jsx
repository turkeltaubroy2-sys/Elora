function Plus() {
  return (
    <svg className="plus" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M9 1v16M1 9h16" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <div className="faq-grid">
          <div>
            <span className="eyebrow left" data-reveal>Frequently Asked</span>
            <h2 className="h2" style={{ margin: '18px 0 22px' }} data-reveal data-reveal-delay="1">
              Everything,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>answered softly.</em>
            </h2>
            <p className="lead" data-reveal data-reveal-delay="2">
              If you'd prefer to ask in person, our concierge is on the floor from 9 until 7, every day except Sunday.
            </p>
            <a href="#contact" className="btn" style={{ marginTop: 28 }} data-reveal data-reveal-delay="3">
              Speak to Concierge
            </a>
          </div>

          <div className="faq-list" data-reveal>
            <div className="faq-item open">
              <button className="faq-q">
                What should I expect at my first visit?
                <Plus />
              </button>
              <div className="faq-a">
                A welcome tea, a thirty-minute consultation, and a guided tour of the studio. We never schedule a
                treatment on the first visit unless requested — your protocol is built afterwards, with care.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Do you offer payment plans?
                <Plus />
              </button>
              <div className="faq-a">
                Yes. Multi-session protocols can be arranged in three or six monthly instalments at no additional cost.
                Speak with our concierge in confidence.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Are the treatments suitable for all skin types?
                <Plus />
              </button>
              <div className="faq-a">
                Every protocol at ELORA is calibrated to Fitzpatrick skin type and condition — including melanin-rich
                skin, rosacea-prone skin, and post-treatment sensitivity. We will never recommend a treatment we do not
                believe is right for you.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                How quickly can I be seen?
                <Plus />
              </button>
              <div className="faq-a">
                Initial consultations are typically available within seven to ten days. For our existing circle,
                same-week appointments can usually be accommodated.
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Do you sell the products used in treatment?
                <Plus />
              </button>
              <div className="faq-a">
                Yes — our private apothecary line is blended in small batches and stocked at the studio. Refills can be
                arranged by post for clients who travel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
