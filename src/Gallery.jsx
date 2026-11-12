
import { useState, useEffect } from 'react';
import {
  Heart,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { photos } from './data/loveStory';

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isOpen = selectedIndex !== null;
  const selectedPhoto = isOpen ? photos[selectedIndex] : null;

  const closeViewer = () => setSelectedIndex(null);

  const showNext = () => {
    setSelectedIndex((current) =>
      (current + 1) % photos.length
    );
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      (current - 1 + photos.length) % photos.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrevious();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <section className="gallery-section" id="memories">
        <div className="section-heading">
          <span className="section-label">
            OUR LITTLE WORLD
          </span>

          <h2>
            Moments I wish to <em>keep forever.</em>
          </h2>

          <p>
            A thousand pictures, a million feelings.
          </p>
        </div>

        <div className="photo-grid">
          {photos.map((photo, index) => (
            <button
              className="photo-card"
              key={photo.id}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
              />

              <div className="photo-caption">
                <Heart size={13} fill="currentColor" />
                <span>{photo.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FULLSCREEN PHOTO VIEWER */}

      {isOpen && (
        <div
          className="lightbox"
          onClick={closeViewer}
        >
          <button
            className="lightbox-close"
            onClick={closeViewer}
            aria-label="Close gallery"
          >
            <X size={25} />
          </button>

          <button
            className="lightbox-arrow previous"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
            />

            <p>
              <Heart size={14} fill="currentColor" />
              {selectedPhoto.caption}
            </p>

            <span>
              {selectedIndex + 1} / {photos.length}
            </span>
          </div>

          <button
            className="lightbox-arrow next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;
