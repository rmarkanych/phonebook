import styled from 'styled-components';

export const ListOfContact = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ItemOfContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactData = styled.p`
color: white
`

export const RemoveBtn = styled.button`
  align-items: center;
  display: flex;
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  svg {
      fill: white;
    }
  &:hover {
    background-color: white;
    color: black;
    svg {
      fill: black;
    }
  }
`;
