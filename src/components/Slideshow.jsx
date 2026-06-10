import { useState } from "react";

function Slideshow({ pictures = [], title = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (pictures.length === 0) return null;

  const total = pictures.length;
  const hasMultiple = total > 1;

  const previousImage = () => {
    setCurrentIndex((index) => (index === 0 ? total - 1 : index - 1));
  };

  const nextImage = () => {
    setCurrentIndex((index) => (index === total - 1 ? 0 : index + 1));
  };

  return (
    <section
      className="slideshow"
      aria-roledescription="carrousel"
      aria-label="Galerie du logement"
    >
      <img
        src={pictures[currentIndex]}
        alt={`${title} — photo ${currentIndex + 1} sur ${total}`}
        className="slideshow__image"
      />

      {hasMultiple && (
        <>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--left"
            onClick={previousImage}
            aria-label="Image précédente"
          >
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path
                d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--right"
            onClick={nextImage}
            aria-label="Image suivante"
          >
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path
                d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"
                fill="currentColor"
              />
            </svg>
          </button>

          <p className="slideshow__counter">
            {currentIndex + 1}/{total}
          </p>
        </>
      )}
    </section>
  );
}

export default Slideshow;
