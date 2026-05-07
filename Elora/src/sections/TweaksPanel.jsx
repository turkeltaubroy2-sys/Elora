export default function TweaksPanel() {
  return (
    <aside id="tweaks" aria-hidden="true">
      <header>
        <h6>TWEAKS</h6>
        <button className="close" id="tweaksClose" aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M1 1l10 10M11 1L1 11" />
          </svg>
        </button>
      </header>
      <div className="body">
        <div className="group">
          <span className="label">Accent Color</span>
          <div className="swatches" id="swAccent"></div>
        </div>
        <div className="group">
          <span className="label">Display Font</span>
          <div className="seg" id="segFont">
            <button data-val="'Cormorant Garamond', serif">Cormorant</button>
            <button data-val="'Playfair Display', serif">Playfair</button>
            <button data-val="'DM Serif Display', serif">DM Serif</button>
          </div>
        </div>
        <div className="group">
          <span className="label">Hero Headline</span>
          <input type="text" id="inHeadline" />
        </div>
        <div className="group">
          <span className="label">CTA Label</span>
          <input type="text" id="inCta" />
        </div>
        <div className="group toggles">
          <span className="label">Sections</span>
          <div className="toggle"><span>Marquee strip</span><button className="switch" id="tgMarquee"></button></div>
          <div className="toggle"><span>Storefront banner</span><button className="switch" id="tgStorefront"></button></div>
          <div className="toggle"><span>Studio gallery</span><button className="switch" id="tgGallery"></button></div>
          <div className="toggle"><span>Stats row</span><button className="switch" id="tgStats"></button></div>
        </div>
        <div className="group toggles">
          <span className="label">Theme</span>
          <div className="toggle"><span>Dark CTA section</span><button className="switch" id="tgDarkCta"></button></div>
        </div>
      </div>
    </aside>
  );
}
