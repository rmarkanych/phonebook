import styled from 'styled-components';

export const FormWrapper = styled.div`
padding-top: 30px;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: 1px solid white;
  background-color: transparent;
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
  color: black;
  &::placeholder {
    font-size: 18px;
  }
  &::selection {
    color: white;
    background: black;
  }
`;

export const LoginBtn = styled.button`
  padding: 5px 10px;
  font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid white;
  &:hover {
    color: black;
    background-color: white;
  }
`;
