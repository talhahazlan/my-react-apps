import React, { useState } from 'react';
import './Photo.css';

const allPhotos = [
  { src: '/images/aisyah1.jpg', alt: 'Photo 1' },
  { src: '/images/aisyah2.jpg', alt: 'Photo 2' },
  { src: '/images/aisyah3.jpg', alt: 'Photo 3' },
  { src: '/images/aisyah4.jpg', alt: 'Photo 4' },
  { src: '/images/aisyah5.jpg', alt: 'Photo 5' },
  { src: '/images/aisyah6.jpg', alt: 'Photo 6' },
  { src: '/images/aisyah7.jpg', alt: 'Photo 7' },
  { src: '/images/aisyah8.jpg', alt: 'Photo 8' },
  { src: '/images/aisyah9.jpg', alt: 'Photo 9' },
  { src: '/images/aisyah10.jpg', alt: 'Photo 10' },
  { src: '/images/aisyah11.jpg', alt: 'Photo 11' },
  { src: '/images/aisyah12.jpg', alt: 'Photo 12' },
  { src: '/images/aisyah13.jpg', alt: 'Photo 13' },
  { src: '/images/aisyah14.jpg', alt: 'Photo 14' },
  { src: '/images/aisyah15.jpg', alt: 'Photo 15' },
];

const PhotoGallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState(allPhotos.slice(0, 1));
  const [visible, setVisible] = useState(2);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const loadMorePhotos = () => {
    setVisible((prevVisible) => prevVisible + 3);
    setVisiblePhotos(allPhotos.slice(0, visible + 2));
  };

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        {visiblePhotos.map((photo, index) => (
          <div className="gallery-item" key={index} onClick={() => openLightbox(photo)}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
      {visible < allPhotos.length && (
        <button className="load-more-btn" onClick={loadMorePhotos}>
          Load More
        </button>
      )}
      {selectedPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeLightbox}>&times;</span>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;