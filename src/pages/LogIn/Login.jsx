import { LoginForm, LoginLabel, LoginBtn, LoginInput } from './Login.styled';

const LogIn = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
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
