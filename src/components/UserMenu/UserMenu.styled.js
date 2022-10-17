import styled from 'styled-components';

export const UserSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: green;
  color: white;
  margin-right: 10px;
`;
export const UserParagrapher = styled.p`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;

  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
`;
export const LogOutBtn = styled.button`
  padding: 5px 15px;
  font-size: 30px;
  text-decoration: none;
  background-color: white;
  border-radius: 7px;
  color: gray;
  font-family: 'Caveat Brush';
  cursor: pointer;
  border: 1px solid green;
  &.active {
    color: white;
    background-color: green;
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    color: white;
    background-color: green;
    /* color: black; */
    transform: scale(1.05);
  }
`;
