import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    openClose: PropTypes.func.isRequired,
    modalSrc: PropTypes.string.isRequired,
  };
  backdroppRef = createRef();

  onHandleClickEsc = e => {
    e.code === 'Escape' && this.props.openClose();
  };
  componentDidMount = () => {
    window.addEventListener('keydown', this.onHandleClickEsc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onHandleClickEsc);
  };
  onHandleBackDroppClick = e => {
    if (e.target !== this.backdroppRef.current) {
      return;
    }
    this.props.openClose();
  };

  render() {
    return (
      <div
        ref={this.backdroppRef}
        onClick={this.onHandleBackDroppClick}
        className="Overlay"
      >
        <div className="Modal">
          <img src={this.props.modalSrc} alt="img" />
        </div>
      </div>
    );
  }
}

export default Modal;
