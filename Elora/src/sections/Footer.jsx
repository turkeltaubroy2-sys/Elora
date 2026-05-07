function NewsletterForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input');
    const note = form.parentElement.querySelector('.note');
    if (input) input.value = '';
    if (note) note.style.opacity = 1;
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--line)' }}
      >
        <input
          type="email"
          placeholder="your@email"
          required
          style={{
            flex: 1,
            background: 'transparent',
            border: 0,
            padding: '10px 0',
            fontFamily: 'inherit',
            fontSize: 14,
            color: 'var(--soft-black)',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            background: 'transparent',
            border: 0,
            color: 'var(--gold)',
            fontSize: 11,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            padding: '10px 0',
          }}
        >
          Join →
        </button>
      </form>
      <span
        className="note small"
        style={{
          opacity: 0,
          transition: 'opacity .4s',
          color: 'var(--gold)',
          marginTop: 10,
          display: 'block',
        }}
      >
        Thank you. A note is on its way.
      </span>
    </>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <a className="logo" href="#top" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
              <span className="mark">e</span>
              <span className="word">ELORA</span>
              <span className="tag">Aesthetics + Spa</span>
            </a>
            <p className="small" style={{ marginTop: 22, maxWidth: '30ch' }}>
              A private aesthetics atelier — built for results, dressed in calm.
            </p>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <li>14 Marble Lane</li>
              <li>Mayfair, London W1</li>
              <li>+44 20 0000 0000</li>
              <li><a href="#">hello@elora.studio</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Hours</h5>
            <ul>
              <li>Mon–Fri · 09:00 – 19:00</li>
              <li>Saturday · 10:00 – 18:00</li>
              <li>Sunday · By appointment</li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Newsletter</h5>
            <p className="small" style={{ marginBottom: 18 }}>
              Quarterly notes on rituals, ingredients, and openings. Never more.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 ELORA Aesthetics + Spa. All rights reserved.</span>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 21l3-12M9 14a3 3 0 106-3" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M14 4v10a4 4 0 11-4-4M14 4c0 3 2 5 6 5" />
              </svg>
            </a>
          </div>
          <span style={{ letterSpacing: '0.16em' }}>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
