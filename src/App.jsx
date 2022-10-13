import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Phonebook from 'pages/Phonebook/Phonebook';
import LogIn from 'pages/LogIn/Login';
import Registration from 'pages/Registration/Registration';
import Layout from 'components/Layout/Layout';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route>
          <Route index element={<HomePage />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>

        <Route>
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Registration />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
