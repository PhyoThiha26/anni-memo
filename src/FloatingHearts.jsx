

import './FloatingHearts.css';

function FloatingHearts() {
  const hearts = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart}
          className={`floating-heart heart-${heart + 1}`}
        >
          {heart % 3 === 0 ? '♡' : '♥'}
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
