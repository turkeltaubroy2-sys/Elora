export default function Nav() {
  return (
    <>
      <nav className="site" id="nav">
        <div className="container">
          <div className="row">
            <ul className="left">
              <li><a className="link" href="#services">Services</a></li>
              <li><a className="link" href="#about">About</a></li>
              <li><a className="link" href="#process">Process</a></li>
            </ul>
            <a href="#top" className="logo logo--sm" aria-label="Elora — home">
              <span className="mark">e</span>
              <span className="word">ELORA</span>
              <span className="tag">Aesthetics + Spa</span>
            </a>
            <div className="right-slot" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <ul className="right">
                <li><a className="link" href="#testimonials">Stories</a></li>
                <li><a className="link" href="#faq">FAQ</a></li>
              </ul>
              <a href="#contact" className="nav-cta desktop-only">Book a Visit</a>
              <button className="burger" id="burger" aria-label="Menu">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#testimonials">Stories</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact" style={{ color: 'var(--gold)' }}>Book a Visit</a></li>
        </ul>
      </div>
    </>
  );
}
