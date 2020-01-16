import React, { Component } from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
  };

  onhandleClickItem = e => {
    e.target.nodeName === 'IMG' && this.props.openModal(e.target.name);
  };
  render() {
    return (
      <ul onClick={this.onhandleClickItem} className="ImageGallery">
        {this.props.images.map(el => (
          <ImageGalleryItem key={el.id} {...el} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
