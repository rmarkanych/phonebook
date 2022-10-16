import styled from 'styled-components';

export const RegisterForm = styled.form`
  width: 320px;
`;
export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const RegisterInput = styled.input`
  color: green;
`;
export const RegisterBtn = styled.button`
  padding: 5px 15px;
  font-size: 20px;
  text-decoration: none;
  background-color: white;
  border-radius: 7px;
  color: gray;
  cursor: pointer;

  border: 1px solid green;
  &:hover {
    color: black;
    background-color: green;
  }
`;
