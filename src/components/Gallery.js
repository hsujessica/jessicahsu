import React from 'react'
import useGallery from '../hooks/useGallery'

const Gallery = ({ images }) => {
  const {
    galleryRef,
    canScrollLeft,
    canScrollRight,
    scrollGallery,
  } = useGallery()

  return (
    <div className="craft-gallery">
      {canScrollLeft && (
        <button
          className="craft-gallery-arrow craft-gallery-arrow-previous"
          type="button"
          aria-label="Previous gallery image"
          onClick={() => scrollGallery(-1)}
        >
          &#8592;
        </button>
      )}
      <div className="craft-section" ref={galleryRef}>
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
      {canScrollRight && (
        <button
          className="craft-gallery-arrow craft-gallery-arrow-next"
          type="button"
          aria-label="Next gallery image"
          onClick={() => scrollGallery(1)}
        >
          &#8594;
        </button>
      )}
    </div>
  )
}

export default Gallery
