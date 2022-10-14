import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Phonebook from 'pages/Phonebook/Phonebook';
import LogIn from 'pages/LogIn/Login';
import Registration from 'pages/Registration/Registration';
import Navigation from 'components/Navigation/Navigation';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      {!isAuth ? (
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="*" element={<Navigate to="contacts" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
