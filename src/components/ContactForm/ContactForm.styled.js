import styled from 'styled-components';

export const ContactOfForm = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  max-width: 400px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 15px;
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
  color: #1c1f24;
  &::placeholder {
    font-size: 18px;
  }
  &::selection {
    color: white;
    background: #1c1f24;
  }
`;

export const AddContactBtn = styled.button`
  align-items: center;
  display: flex;
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 7px;
  justify-content: center;
  margin: 0 auto;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  & svg {
    fill: white
  }
  &:hover {
    background-color: white;
    color: black;
    svg {
      fill: black;
    }
  }
`;
