
import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { surpriseMessage } from './data/loveStory';
import './Finale.css';

function Finale() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="finale-section" id="forever">
      <div className="finale-content">
        <span className="finale-label">
          <Sparkles size={14} />
          ONE LAST THING
          <Sparkles size={14} />
        </span>

        <div className="finale-heart">
          <Heart size={34} fill="currentColor" />
        </div>

        <h2>
          And my favorite
          <br />
          <em>part is still you.</em>
        </h2>

        <p className="finale-intro">
          Before you go, there's something else
          <br />
          I want you to know.
        </p>

        {!revealed ? (
          <button
            className="finale-button"
            onClick={() => setRevealed(true)}
          >
            One Last Surprise
            <Heart size={16} fill="currentColor" />
          </button>
        ) : (
          <div className="finale-message">
            <span className="finale-message-heart">♡</span>

            <h3>{surpriseMessage.title}</h3>

            <p>{surpriseMessage.description}</p>

            <p className="finale-ending">
              {surpriseMessage.ending}
            </p>

            <span className="finale-signature">
              With all my love, always.
            </span>
          </div>
        )}

        <div className="finale-bottom">
          <span>YOU & ME</span>
          <Heart size={12} fill="currentColor" />
          <span>OUR LITTLE FOREVER</span>
        </div>
      </div>
    </section>
  );
}

export default Finale;
