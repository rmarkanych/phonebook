import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid white;
  background-color: green;
  padding: 15px;
  border-radius: 5px;
`;
export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: white;
`;
export const LoginInput = styled.input`
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
export const LoginBtn = styled.button`
  padding: 5px 15px;
  font-size: 20px;
  text-decoration: none;
  background-color: white;
  border-radius: 7px;
  color: gray;
  cursor: pointer;
  justify-content: center;

  margin: 0 auto;
  border: 1px solid green;
  &:hover {
    color: white;
    background-color: green;
    border: 1px solid white;
  }
`;
