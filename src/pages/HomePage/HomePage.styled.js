import styled from 'styled-components';

export const HomeParagrapher = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
export const JokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const JokeBtn = styled.button`
  align-items: center;
  display: flex;
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
    color: white;
  }
`;
