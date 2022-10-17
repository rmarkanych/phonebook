import { useDispatch } from 'react-redux';
import { LoginForm, LoginLabel, LoginBtn, LoginInput } from './Login.styled';
import { logIn } from 'redux/herokuappOperations';
const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginLabel>
        Email
        <LoginInput type="email" name="email" autoComplete="off" />
      </LoginLabel>
      <LoginLabel>
        Password
        <LoginInput type="password" name="password" autoComplete="off" />
      </LoginLabel>
      <LoginBtn type="submit">Log In</LoginBtn>
    </LoginForm>
  );
};

export default LogIn;
