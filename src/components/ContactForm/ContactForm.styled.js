import styled from 'styled-components';
export const ContactOfForm = styled.form`
  width: 320px;
`;
export const ContactOfLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const ContactOfInput = styled.input`
  color: green;
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
  color: black;
  cursor: pointer;
  border: 1px solid green;
  &:hover {
    background-color: green;
  }
`;
