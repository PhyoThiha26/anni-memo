
import Special from './Special';
import Story from './Story';
import Gallery from './Gallery';
import { Heart, ArrowDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const elements = document.querySelectorAll(
    '.timeline-item, .photo-card'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => {
    element.classList.add('reveal-item');
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          H <span>♥</span> H
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#story" onClick={closeMenu}>Our Story</a>
          <a href="#memories" onClick={closeMenu}>Memories</a>
          <a href="#letter" onClick={closeMenu}>Love Letter</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-decoration heart-one">♡</div>
        <div className="hero-decoration heart-two">♡</div>
        <div className="hero-decoration heart-three">✦</div>

        <div className="hero-content">
          <p className="eyebrow">
            <Heart size={13} fill="currentColor" />
            A LITTLE PLACE JUST FOR US
          </p>

          <h1>
            Every love story is beautiful,
            <br />
            but <span>ours</span> is my favorite.
          </h1>

          <p className="hero-description">
            A little collection of our moments,
            our memories, and all the love
            I have for you, Hsu.
          </p>

          <a href="#story" className="primary-button">
            Explore our story
            <Heart size={16} />
          </a>

          <p className="hero-footer">
            Made with love, just for you.
          </p>
        </div>

        <a href="#story" className="scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <Story />

      <Gallery />

     <Special />

      <footer>
        Made with <Heart size={13} fill="currentColor" /> for Hsu
      </footer>
    </main>
  );
}

export default App;
