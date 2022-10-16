import styled from 'styled-components';
export const ListOfContact = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ItemOfContact = styled.li`
  display: flex;
  align-items: center;
`;
export const RemoveBtn = styled.button`
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
