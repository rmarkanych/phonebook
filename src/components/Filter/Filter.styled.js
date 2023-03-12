import styled from 'styled-components';

export const FilterWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
`
export const FilterForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 400px;
  /* @media (min-width: 768px) {
    width: 100%;
  } */
`
export const FilterLabel = styled.label`
margin: 0 auto;
`

export const FilterInput = styled.input`
margin: 0 auto;
  display: inline-block;
  font-size: 20px;
  border-radius: 5px;
  border: white;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  &::placeholder {
    font-size: 18px;
  }
  &::selection {
    color: white;
    background: black;
  }
  /* @media (min-width: 768px) {
    width: 412px;
  } */
`;
