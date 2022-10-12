import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Navigate, Route, Routes } from 'react-router-dom';

import Phonebook from 'pages/Phonebook/Phonebook';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<p>home</p>}>
        <Route path="phonebook" element={<Phonebook />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
};

export default App;
