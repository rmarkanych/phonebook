import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
//import { Route, Routes } from 'react-router-dom';

import Phonebook from 'pages/Phonebook/Phonebook';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Phonebook />
    </>
  );
};

export default App;
