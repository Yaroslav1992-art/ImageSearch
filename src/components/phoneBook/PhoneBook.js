import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import Section from '../statisticsOwn/section/Section';
import services from '../../services/services';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  pushContacts = (x, y, e) => {
    e.persist();
    console.log(e.target.elements[1]);
    if (e.target.name.value === '') {
      alert('enter value');
      return;
    }
    const flag = this.state.contacts.find(
      ev => e.target.name.value === ev.name,
    );
    flag
      ? alert(`${e.target.name.value} is already in contacts`)
      : services
          .addItem({
            name: x,
            number: y,
          })
          .finally(() => {
            e.target.elements[0].value = '';
            e.target.elements[1].value = '';
            this.fetchPost();
          });
  };

  handleInputSearch = e => {
    e.persist();
    this.setState(s => {
      return {
        filter: e.target.value.toLowerCase(),
      };
    });
  };

  deleteContact = id => {
    services.deleteItem(id).finally(() => {
      this.fetchPost();
      console.log(this.state.contacts);
    });
  };

  fetchPost = async () => {
    try {
      const response = await services.getAllItems();
      // console.log(response);
      if (response.data === null) {
        this.setState({
          contacts: [],
        });
      } else {
        const post = Object.keys(response.data)
          .map(post => ({
            ...response.data[post],
            id: post,
          }))
          .reverse();

        this.setState({
          contacts: post,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = async () => {
    this.fetchPost();
  };

  render() {
    // console.log('rerender');
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm pushContacts={this.pushContacts} />
        </Section>
        <Section title="Contacts">
          <Filter onInput={this.handleInputSearch} />
          <ContactList
            deleteContact={this.deleteContact}
            contacts={contacts}
            filter={filter}
          />
        </Section>
      </>
    );
  }
}

export default PhoneBook;
