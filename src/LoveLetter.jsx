
import { useState, useEffect } from 'react';
import { Heart, Mail, X } from 'lucide-react';
import { loveLetter } from './data/loveStory.js';
import './LoveLetter.css';

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeLetter();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openLetter = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeLetter = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 600);
  };

  return (
    <section className="love-letter-section" id="letter">
      <div className="letter-heading">
        <span className="letter-eyebrow">
          SOMETHING FROM MY HEART
        </span>

        <h2>A Letter for <em>Hsu</em></h2>

        <p>
          There are things I want you to know,
          beyond all the little moments.
        </p>
      </div>

      {/* Envelope */}
      <div className="letter-envelope-area">
        <button
          className="letter-envelope-button"
          onClick={openLetter}
          aria-label="Open anniversary love letter"
        >
          <div className="envelope">
            <div className="envelope-back"></div>
            <div className="envelope-left"></div>
            <div className="envelope-right"></div>
            <div className="envelope-front"></div>
            <div className="envelope-flap"></div>

            <div className="envelope-seal">
              <Heart size={25} fill="currentColor" />
            </div>
          </div>
        </button>

        <span className="letter-hint">
          <Mail size={15} />
          A little something, just for you
        </span>

        <button
          className="letter-open-button"
          onClick={openLetter}
        >
          Open My Letter <Heart size={16} />
        </button>
      </div>

      {/* Full-screen letter overlay */}
      {isOpen && (
        <div
          className={`letter-overlay ${isClosing ? 'letter-overlay-closing' : ''}`}
          onClick={closeLetter}
        >
          <button
            className="letter-overlay-close"
            onClick={closeLetter}
            aria-label="Close letter"
          >
            <X size={22} />
          </button>

          <div
            className="full-letter-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="full-letter-content">
              <div className="full-letter-decoration">
                <Heart size={25} fill="currentColor" />
              </div>

              <span className="full-letter-label">
                A LITTLE NOTE FOR YOU
              </span>

              <h3>{loveLetter.greeting}</h3>

              <div className="full-letter-paragraphs">
                {loveLetter.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="full-letter-signature">
                {loveLetter.signature}
              </div>

              <div className="full-letter-bottom">
                <span>♡</span>
                <span>♡</span>
                <span>♡</span>
              </div>
            </div>
          </div>

          <span className="letter-overlay-hint">
            Click outside the letter or press × to close
          </span>
        </div>
      )}
    </section>
  );
}

export default LoveLetter;
