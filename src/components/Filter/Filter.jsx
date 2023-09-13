import React from 'react';
import styled from 'styled-components';

const FilterWrap = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  input {
    margin-top: 10px;
  }
`;

const Filter = ({ filter, changeFilter }) => (
  <FilterWrap>
    Find contacts by name
    <input type="text" value={filter} onChange={changeFilter} size="20" />
  </FilterWrap>
);

export default Filter;
