import styled from 'styled-components';

export const HomeParagrapher = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;

`;

export const JokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    margin-top: 0;
  }

`;

export const JokeBtn = styled.button`
  align-items: center;
  display: flex;
  padding: 5px 10px;
  font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  &:hover {
    background-color: white;
    color: black;
  }
`;
