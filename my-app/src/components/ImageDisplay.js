import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
            ))}
        </div>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
