import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/mockapiOperations';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Phonebook from 'pages/Phonebook/Phonebook';
import LogIn from 'pages/LogIn/Login';
import Registration from 'pages/Registration/Registration';
import Navigation from 'components/Navigation/Navigation';
import { refreshUser } from 'redux/herokuappOperations';
import Title from 'components/Title/Title';

const App = () => {

  const isAuth = useSelector(state => state.auth.isAuth);

  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Title title='Loading...'/>
  ) : (
    <>
      <Navigation />
      {!isAuth ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="*" element={<Navigate to="contacts" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
