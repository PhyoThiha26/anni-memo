
import { useState, useEffect, useRef } from 'react';
import {
  Heart,
  Mail,
  MailOpen,
  Gift,
  Music2,
  Play,
  Pause,
  Sparkles
} from 'lucide-react';

// CHANGE THIS TO YOUR ACTUAL RELATIONSHIP START DATE
const START_DATE = '2026-07-14';

function Special() {
  const [daysTogether, setDaysTogether] = useState(0);
  const [letterOpen, setLetterOpen] = useState(false);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);

  // Calculate relationship days
  useEffect(() => {
    const updateDays = () => {
      const start = new Date(`${START_DATE}T00:00:00`);
      const today = new Date();

      const startDay = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate()
      );

      const todayDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      const difference = Math.floor(
        (todayDay - startDay) / (1000 * 60 * 60 * 24)
      );

      setDaysTogether(Math.max(0, difference));
    };

    updateDays();

    const interval = setInterval(updateDays, 60000);

    return () => clearInterval(interval);
  }, []);

  // Music controls
  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error('Music playback failed:', error);
      }
    }
  };

  return (
    <>
      {/* ANNIVERSARY COUNTER */}
      <section className="counter-section">
        <div className="counter-content">
          <Heart size={25} fill="currentColor" />

          <p className="section-label">EVER SINCE WE MET</p>

          <h2>Our time together</h2>

          <div className="counter-number">
            {daysTogether.toLocaleString()}
          </div>

          <p className="counter-caption">
            days of memories, laughter and love.
          </p>

          <span className="counter-footer">
            And counting... ♡
          </span>
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="interactive-letter" id="letter">
        <div className="section-heading">
          <span className="section-label">A MESSAGE FOR YOU</span>
          <h2>A little letter, <em>from me to you.</em></h2>
          <p>There's something I've been wanting to tell you.</p>
        </div>

        <button
          className={`envelope ${letterOpen ? 'opened' : ''}`}
          onClick={() => setLetterOpen(!letterOpen)}
          aria-label={letterOpen ? 'Close love letter' : 'Open love letter'}
        >
          {letterOpen ? (
            <MailOpen size={75} strokeWidth={1} />
          ) : (
            <Mail size={75} strokeWidth={1} />
          )}

          <span>
            {letterOpen ? 'CLOSE LETTER' : 'OPEN YOUR LETTER'}
          </span>
        </button>

        {letterOpen && (
          <div className="letter-paper">
            <span className="letter-date">A LITTLE NOTE FOR YOU</span>

            <h3>My dearest Hsu,</h3>

            <p>
              I don't know how to put every feeling into words,
              but I want you to know how special you are to me.
            </p>

            <p>
              Thank you for being part of my life, for the little
              moments, the smiles, and all the memories we've made.
            </p>

            <p>
              I may not be perfect, but I promise to keep choosing
              you, appreciating you, and making more beautiful
              memories together.
            </p>

            <p className="letter-ending">
              With all my love,
              <br />
              Yours always ♡
            </p>
          </div>
        )}
      </section>

      {/* SECRET SURPRISE */}
      <section className="surprise-section">
        <div className="surprise-content">
          <Gift size={35} />

          <p className="section-label">ONE LAST THING...</p>

          <h2>I have a little <em>surprise</em> for you.</h2>

          <p>Are you ready, Hsu?</p>

          <button
            className="surprise-button"
            onClick={() => setSurpriseOpen(!surpriseOpen)}
          >
            <Sparkles size={17} />
            {surpriseOpen ? 'Hide my surprise' : 'Open your surprise'}
          </button>

          {surpriseOpen && (
            <div className="surprise-message">
              <Heart size={30} fill="currentColor" />

              <h3>You're my favorite person.</h3>

              <p>
                No matter how many days pass,
                I hope we keep finding reasons
                to smile together.
              </p>

              <span>Here's to us, Hsu. Forever and always. ♡</span>
            </div>
          )}
        </div>
      </section>

      {/* MUSIC PLAYER */}
      <button
        className="music-player"
        onClick={toggleMusic}
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? <Pause size={17} /> : <Play size={17} />}
        <span>{playing ? 'Pause our song' : 'Play our song'}</span>
        <Music2 size={17} />
      </button>

      <audio
        ref={audioRef}
        src="/music/our-song.mp3"
        loop
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
    </>
  );
}

export default Special;
