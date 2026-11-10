
import { Heart } from 'lucide-react';

const moments = [
  {
    date: 'THE BEGINNING',
    title: 'The day we met',
    description: 'The beginning of a story I never knew would mean so much to me.',
    image: '/images/first-meeting.jpg',
    side: 'left'
  },
  {
    date: 'A SPECIAL MEMORY',
    title: 'Our first unforgettable moment',
    description: 'One of those little moments that I wish I could experience again.',
    image: '/images/memory-1.jpg',
    side: 'right'
  },
  {
    date: 'MORE MEMORIES',
    title: 'Growing together',
    description: 'Through ordinary days, little adventures, and everything in between.',
    image: '/images/memory-2.jpg',
    side: 'left'
  }
];

function Story() {
  return (
    <section className="timeline-section" id="story">
      <div className="section-heading">
        <span className="section-label">OUR JOURNEY</span>
        <h2>Every moment led me <em>to you.</em></h2>
        <p>Some dates are just dates. Others become memories forever.</p>
      </div>

      <div className="timeline">
        {moments.map((moment, index) => (
          <div
            className={`timeline-item ${moment.side}`}
            key={index}
          >
            <div className="timeline-dot">
              <Heart size={14} fill="currentColor" />
            </div>

            <div className="timeline-card">
              <div className="timeline-image">
                <img
                  src={moment.image}
                  alt={moment.title}
                />
              </div>

              <div className="timeline-content">
                <span>{moment.date}</span>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Story;
