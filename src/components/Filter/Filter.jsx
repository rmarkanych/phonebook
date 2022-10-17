import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import Title from 'components/Title/Title';
import { FilterInput } from './Filter.styled';
const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Title title="Find contacts by name" />
      <label>
        <FilterInput
          type="text"
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default Filter;
