import { useEffect } from 'react';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import { Marquee, Storefront } from './sections/Marquee.jsx';
import Services from './sections/Services.jsx';
import Gallery from './sections/Gallery.jsx';
import About from './sections/About.jsx';
import Process from './sections/Process.jsx';
import Testimonials from './sections/Testimonials.jsx';
import FAQ from './sections/FAQ.jsx';
import CTA from './sections/CTA.jsx';
import Footer from './sections/Footer.jsx';
import TweaksPanel from './sections/TweaksPanel.jsx';
import { initScripts } from './scripts.js';

// Tweak panel CSS — kept here because it's only used by the in-app tweaks
// overlay and is convenient to ship with the panel as a co-located stylesheet.
import './tweaks-panel.css';

export default function App() {
  useEffect(() => {
    const teardown = initScripts();
    return teardown;
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Storefront />
      <Services />
      <Gallery />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <TweaksPanel />
      <Footer />
    </>
  );
}
