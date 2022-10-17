import styled from 'styled-components';
export const ContactOfForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid white;
  background-color: green;
  padding: 15px;
  border-radius: 5px;
`;
export const ContactOfLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: white;
`;
export const ContactOfInput = styled.input`
  display: inline-block;
  font-size: 20px;
  border: 1px solid white;
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
export const AddContactBtn = styled.button`
  align-items: center;
  display: flex;
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 15px;
  text-decoration: none;
  background-color: white;
  border-radius: 7px;
  justify-content: center;

  margin: 0 auto;
  color: black;
  cursor: pointer;
  border: 1px solid green;
  &:hover {
    background-color: green;
    color: white;
    border: 1px solid white;
    svg {
      fill: white;
    }
  }
`;
