import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 320px;
`;
export const LoginLabel = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const LoginInput = styled.input`
  color: green;
`;
export const LoginBtn = styled.button`
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
