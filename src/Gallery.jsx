
import { Heart } from 'lucide-react';

const photos = [
  {
    src: '/images/memory-1.jpg',
    caption: 'A beautiful day'
  },
  {
    src: '/images/memory-2.jpg',
    caption: 'Just us'
  },
  {
    src: '/images/memory-3.jpg',
    caption: 'My favorite smile'
  },
  {
    src: '/images/memory-4.jpg',
    caption: 'Forever memories'
  }
];

function Gallery() {
  return (
    <section className="gallery-section" id="memories">
      <div className="section-heading">
        <span className="section-label">OUR LITTLE WORLD</span>
        <h2>Moments I wish to <em>keep forever.</em></h2>
        <p>A thousand pictures, a million feelings.</p>
      </div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-card" key={index}>
            <img src={photo.src} alt={photo.caption} />
            <div className="photo-caption">
              <Heart size={13} fill="currentColor" />
              <span>{photo.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
