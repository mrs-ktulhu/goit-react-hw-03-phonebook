import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  border: solid 1px black;
  padding: 15px;
  width: 300px;
`;

const FormInput = styled.label`
  display: contents;
  input {
    margin: 5px 0 15px 0;
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
`;

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <FormInput>
            Name
            <br />
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              id={nanoid()}
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </FormInput>
          <br />
          <FormInput>
            Number
            <br />
            <input
              type="tel"
              placeholder="Enter number"
              name="number"
              id={nanoid()}
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </FormInput>
          <br />
          <SubmitButton type="submit">Add contact</SubmitButton>
        </form>
      </Container>
    );
  }
}
