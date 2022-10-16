import {
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
} from './Registration.styled';
const Registration = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    form.reset();
  };
  return (
    <RegisterForm onSubmit={handleSubmit}>
      <RegisterLabel>
        Username
        <RegisterInput type="text" name="name" autoComplete="off" />
      </RegisterLabel>
      <RegisterLabel>
        Email
        <RegisterInput type="email" name="email" autoComplete="off" />
      </RegisterLabel>
      <RegisterLabel>
        Password
        <RegisterInput type="password" name="password" autoComplete="off" />
      </RegisterLabel>
      <RegisterBtn type="submit">Register</RegisterBtn>
    </RegisterForm>
  );
};

export default Registration;
