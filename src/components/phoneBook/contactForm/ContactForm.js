import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    pushContacts: PropTypes.func.isRequired,
  };

  handleGetValue = e => {
    const info = e.target.value;
    const name = e.target.name;
    this.setState(s => {
      return {
        [name]: info,
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.pushContacts(this.state.name, this.state.number, e);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          onChange={this.handleGetValue}
          name="name"
          placeholder="enter name"
        ></input>
        <h3>Number</h3>
        <input
          type="text"
          onChange={this.handleGetValue}
          name="number"
          placeholder="enter number"
        ></input>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
