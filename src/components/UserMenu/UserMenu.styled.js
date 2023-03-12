import styled from 'styled-components';

export const UserSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  margin-right: 10px;
`;

export const UserParagrapher = styled.p`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogOutBtn = styled.button`
display: flex;
align-items: center;
  padding: 5px 10px;
  font-size: 20px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 7px;
  color: white;
  font-family: 'Caveat Brush';
  cursor: pointer;
  height: 27px;
  border: 1px solid white;
  &.active {
    color: black;
    background-color: white;
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    color: black;
    background-color: white;
   
  }
`;
