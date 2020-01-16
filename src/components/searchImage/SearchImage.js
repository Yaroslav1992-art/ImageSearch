import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './searchBar/SearchBar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';

const key = '14463557-4ebaa1fc8f5ab234f43ee502e';
const API = 'https://pixabay.com/api';
class SearchImage extends Component {
  state = {
    images: [],
    page: 1,
    value: '',
    flag: false,
    isModalOpen: false,
    modalSrc: '',
  };

  onSubmit = value => {
    this.setState({ value: value });
  };

  fetchPost = async () => {
    try {
      await this.setState({ flag: true });
      const response = await axios.get(
        `${API}/?q=${this.state.value}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
      );
      const images = response.data.hits.map(el => ({
        id: el.id,
        smallImg: el.webformatURL,
        bigImage: el.largeImageURL,
      }));
      this.setState(state => ({
        images: [...this.state.images, ...images],
        flag: false,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  onClickLoad = async () => {
    await this.setState(state => ({ page: state.page + 1 }));
    await this.fetchPost();
  };

  openModal = src => {
    this.setState({ isModalOpen: true, modalSrc: src });
  };

  openClose = () => {
    this.setState({ isModalOpen: false });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.value !== this.state.value) {
      await this.setState({ page: 1, images: [] });
      await this.fetchPost();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { flag, images, isModalOpen, modalSrc } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery openModal={this.openModal} images={images} />
        {images.length > 11 && <Button onClickLoad={this.onClickLoad} />}
        {flag && <Loader />}
        {isModalOpen && (
          <Modal openClose={this.openClose} modalSrc={modalSrc} />
        )}
      </>
    );
  }
}

export default SearchImage;
