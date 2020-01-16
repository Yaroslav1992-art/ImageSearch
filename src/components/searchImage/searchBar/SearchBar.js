import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    value: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onHandleGetValue = e => {
    this.setState({ value: e.target.value });
  };

  onHandleSubmitValue = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;
    // console.log(value);

    return (
      <header className="Searchbar">
        <form onSubmit={this.onHandleSubmitValue} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleGetValue}
            value={value}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
