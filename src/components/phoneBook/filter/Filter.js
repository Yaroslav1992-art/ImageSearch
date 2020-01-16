import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    onInput: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          onInput={this.props.onInput}
          type="text"
          placeholder="enter contacts"
        ></input>
      </>
    );
  }
}

export default Filter;
