import React from 'react';
import styled from 'styled-components';

const ContactsList = styled.ul`
  margin-top: 20px;
  li {
    margin-bottom: 10px;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  margin-left: 5px;
`;

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(({ id, text, number }) => (
      <li key={id}>
        <span>{text}</span>:&nbsp;
        <span>{number}</span>&nbsp;
        <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteButton>
      </li>
    ))}
  </ContactsList>
);

export default ContactList;
