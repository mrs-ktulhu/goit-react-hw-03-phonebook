import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const Wrap = styled.div`
  margin: 30px 0 0 30px;
`;

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', text: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', text: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', text: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', text: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleAddContact = (text, number) => {
    this.state.contacts.some(contact => contact.text === text)
      ? alert(`${text} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [{ id: nanoid(), text, number }, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalisedFilter = this.state.filter.toLowerCase();

    const filterContacts = this.state.contacts.filter(contact =>
      contact.text.toLowerCase().includes(normalisedFilter)
    );

    return (
      <Wrap>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} changeFilter={this.changeFilter} />
        <ContactList contacts={filterContacts} onDeleteContact={this.deleteContact} />
      </Wrap>
    );
  }
}
