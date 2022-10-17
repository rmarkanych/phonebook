import styled from 'styled-components';

export const RegisterForm = styled.form`
  border: 1px solid white;
  background-color: green;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;
export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: white;
`;
export const RegisterInput = styled.input`
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
export const RegisterBtn = styled.button`
  padding: 5px 15px;
  font-size: 20px;
  text-decoration: none;
  background-color: white;
  border-radius: 7px;
  justify-content: center;

  margin: 0 auto;
  color: gray;
  cursor: pointer;

  border: 1px solid green;
  &:hover {
    color: white;
    background-color: green;
    border: 1px solid white;
  }
`;
