import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImg, bigImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        name={bigImage}
        src={smallImg}
        alt="images"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
