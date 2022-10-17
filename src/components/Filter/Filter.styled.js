import styled from 'styled-components';

export const FilterInput = styled.input`
  display: inline-block;
  width: 400px;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  color: green;
  &::placeholder {
    font-size: 18px;
  }
  &::selection {
    color: white;
    background: green;
  }
`;
