import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  static propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  onHandleClickDelete = e => {
    const id = e.target.closest('li').id;
    this.props.deleteContact(id);
  };

  render() {
    const newArr = this.props.contacts.filter(e =>
      e.name.toLowerCase().includes(this.props.filter),
    );

    return (
      <ul>
        {this.props.filter.length === 0
          ? this.props.contacts.map(e => (
              <li id={e.id} key={e.id}>
                {e.name}:{e.number}
                <button onClick={this.onHandleClickDelete}>DELETE</button>
              </li>
            ))
          : newArr.map(e => (
              <li id={e.id} key={e.id}>
                {e.name}:{e.number}
                <button onClick={this.onHandleClickDelete}>DELETE</button>
              </li>
            ))}
      </ul>
    );
  }
}

export default ContactList;
