
import { useState } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';
import { surpriseMessage } from './data/loveStory.js';
import './Surprise.css';

function Surprise() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="surprise-section" id="surprise">
      <div className="surprise-container">

        <span className="surprise-eyebrow">
          ONE LAST LITTLE SURPRISE
        </span>

        <h2>
          Something <em>for you</em>
        </h2>

        <p className="surprise-description">
          I have one more thing waiting for you.
          Will you open it?
        </p>

        <button
          className={`gift-button ${isOpened ? 'gift-opened' : ''}`}
          onClick={() => setIsOpened(true)}
          disabled={isOpened}
          aria-label="Open your surprise gift"
        >
          <div className="gift-scene">

            <div className="gift-sparkle sparkle-one">✦</div>
            <div className="gift-sparkle sparkle-two">✧</div>
            <div className="gift-sparkle sparkle-three">✦</div>

            <div className="gift-box">
              <div className="gift-lid">
                <div className="gift-lid-ribbon" />
                <div className="gift-bow">
                  <span />
                  <span />
                  <i />
                </div>
              </div>

              <div className="gift-body">
                <div className="gift-ribbon" />
              </div>
            </div>

            
<div className="bouquet premium-bouquet">

  {/* Flower stems */}
  <div className="premium-stems">
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>

  {/* Greenery */}
  <div className="premium-leaves">
    {Array.from({ length: 8 }).map((_, i) => (
      <span key={i} className={`premium-leaf leaf-${i + 1}`} />
    ))}
  </div>

  {/* Roses */}
  
{/* Realistic layered roses */}
<div className="premium-roses">
  {Array.from({ length: 5 }).map((_, i) => (
    <div className={`premium-rose rose-${i + 1}`} key={i}>
      <div className="rose-outer-petals">
        {Array.from({ length: 8 }).map((_, j) => (
          <span key={j} />
        ))}
      </div>

      <div className="rose-middle-petals">
        {Array.from({ length: 6 }).map((_, j) => (
          <span key={j} />
        ))}
      </div>

      <div className="rose-inner-petals">
        {Array.from({ length: 4 }).map((_, j) => (
          <span key={j} />
        ))}
      </div>

      <div className="rose-center">
        <span />
      </div>
    </div>
  ))}
</div>


  {/* Baby's breath */}
  <div className="babys-breath">
    {Array.from({ length: 12 }).map((_, i) => (
      <span key={i} className={`breath breath-${i + 1}`} />
    ))}
  </div>

  {/* Luxury wrapping */}
  <div className="premium-wrapper">
    <div className="wrapper-left" />
    <div className="wrapper-right" />
    <div className="wrapper-center" />
    <div className="wrapper-ribbon" />
    <div className="wrapper-bow">
      <span />
      <span />
      <i />
    </div>
  </div>

</div>

          </div>
        </button>

        <p className="gift-hint">
          {isOpened ? 'A bouquet, just for you ♡' : 'Tap the gift to open it'}
        </p>

        {isOpened && (
          <div className="surprise-message">
            <Sparkles size={20} className="surprise-sparkle-icon" />

            <h3>{surpriseMessage.title}</h3>

            <p>{surpriseMessage.description}</p>

            <div className="surprise-divider">
              <span />
              <Heart size={16} fill="currentColor" />
              <span />
            </div>

            <p className="surprise-ending">
              {surpriseMessage.ending}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Surprise;
