import { useDispatch } from 'react-redux';
import { LoginForm, LoginLabel, LoginBtn, LoginInput, FormWrapper } from './Login.styled';
import { logIn } from 'redux/herokuappOperations';
//import { FormWrapper } from 'pages/Registration/Registration.styled';

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
    <FormWrapper >
      <LoginForm onSubmit={handleSubmit}>
        <LoginLabel>
          Email
          <LoginInput type="email" name="email" autoComplete="off" required/>
        </LoginLabel>
        <LoginLabel>
          Password
          <LoginInput type="password" name="password" autoComplete="off" required />
        </LoginLabel>
        <LoginBtn type="submit">Log In</LoginBtn>
      </LoginForm>
    </FormWrapper>
  );
};

export default LogIn;
