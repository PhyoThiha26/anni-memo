
import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import './Opening.css';

function Opening({ onEnter }) {
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true);

    setTimeout(() => {
      onEnter();
    }, 900);
  };

  return (
    <div className={`opening-screen ${leaving ? 'opening-leaving' : ''}`}>
      <div className="opening-decoration decoration-one">♡</div>
      <div className="opening-decoration decoration-two">✦</div>
      <div className="opening-decoration decoration-three">♡</div>
      <div className="opening-decoration decoration-four">✧</div>

      <div className="opening-content">
        <div className="opening-icon">
          <Heart size={25} fill="currentColor" />
        </div>

        <span className="opening-label">
          A LITTLE SOMETHING FOR YOU
        </span>

        <h1>
          For my favorite
          <br />
          <em>person, Hsu.</em>
        </h1>

        <p>
          I've made something special.
          <br />
          A little collection of memories, feelings,
          <br />
          and everything I want you to know.
        </p>

        <button className="opening-button" onClick={handleEnter}>
          Open My Surprise
          <Heart size={16} fill="currentColor" />
        </button>

        <div className="opening-footer">
          <Sparkles size={13} />
          <span>MADE WITH LOVE, JUST FOR YOU</span>
          <Sparkles size={13} />
        </div>
      </div>
    </div>
  );
}

export default Opening;
