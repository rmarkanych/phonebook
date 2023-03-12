import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import Title from 'components/Title/Title';
import { FilterInput, FilterWrapper, FilterForm, FilterLabel } from './Filter.styled';

const Filter = () => {

  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <FilterForm>
      <Title title="Find contacts by name or number" />
      <FilterLabel>
        <FilterInput
          type="text"
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </FilterLabel>
      </FilterForm>
      
    </FilterWrapper>
  );
};

export default Filter;
