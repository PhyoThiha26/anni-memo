
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

            <div className="bouquet">
              <div className="bouquet-wrap" />
              <div className="bouquet-ribbon" />

              <div className="flower flower-one">
                <span className="petal p1" />
                <span className="petal p2" />
                <span className="petal p3" />
                <span className="petal p4" />
                <span className="petal p5" />
                <span className="flower-center" />
              </div>

              <div className="flower flower-two">
                <span className="petal p1" />
                <span className="petal p2" />
                <span className="petal p3" />
                <span className="petal p4" />
                <span className="petal p5" />
                <span className="flower-center" />
              </div>

              <div className="flower flower-three">
                <span className="petal p1" />
                <span className="petal p2" />
                <span className="petal p3" />
                <span className="petal p4" />
                <span className="petal p5" />
                <span className="flower-center" />
              </div>

              <div className="flower flower-four">
                <span className="petal p1" />
                <span className="petal p2" />
                <span className="petal p3" />
                <span className="petal p4" />
                <span className="petal p5" />
                <span className="flower-center" />
              </div>

              <div className="bouquet-leaf leaf-one" />
              <div className="bouquet-leaf leaf-two" />
              <div className="bouquet-leaf leaf-three" />
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
