
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { relationshipStartDate } from './data/loveStory.js';
import './AnniversaryCounter.css';


function calculateTime() {
  const start = new Date(relationshipStartDate);
  const now = new Date();

  if (now < start) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  let cursor = new Date(start);
  let years = 0;
  let months = 0;

  // Count complete years
  while (true) {
    const next = new Date(cursor);
    next.setFullYear(next.getFullYear() + 1);

    if (next > now) break;

    cursor = next;
    years++;
  }

  // Count complete months
  while (true) {
    const next = new Date(cursor);
    const originalDay = cursor.getDate();

    next.setDate(1);
    next.setMonth(next.getMonth() + 1);

    const lastDay = new Date(
      next.getFullYear(),
      next.getMonth() + 1,
      0
    ).getDate();

    next.setDate(Math.min(originalDay, lastDay));

    if (next > now) break;

    cursor = next;
    months++;
  }

  // Calculate remaining days, hours, minutes and seconds
  const remaining = now.getTime() - cursor.getTime();

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return { years, months, days, hours, minutes, seconds };
}


function AnniversaryCounter() {
  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: time.years, label: 'YEARS' },
    { value: time.months, label: 'MONTHS' },
    { value: time.days, label: 'DAYS' },
    { value: time.hours, label: 'HOURS' },
    { value: time.minutes, label: 'MINUTES' },
    { value: time.seconds, label: 'SECONDS' }
  ];

  return (
    <section className="anniversary-section" id="anniversary">
      <div className="anniversary-container">

        <span className="anniversary-eyebrow">
          EVERY SECOND WITH YOU MATTERS
        </span>

        <h2>
          Our Time <em>Together</em>
        </h2>

        <p className="anniversary-description">
          Every moment with you becomes a memory worth keeping.
        </p>

        <div className="anniversary-heart">
          <Heart size={22} fill="currentColor" />
        </div>

        <div className="anniversary-counter-grid">
          {units.map((unit) => (
            <div className="counter-item" key={unit.label}>
              <div className="counter-number">
                {String(unit.value).padStart(2, '0')}
              </div>
              <span>{unit.label}</span>
            </div>
          ))}
        </div>

        <p className="anniversary-footer">
          And counting... <Heart size={14} fill="currentColor" />
        </p>

      </div>
    </section>
  );
}

export default AnniversaryCounter;
