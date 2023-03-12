import { useDispatch } from 'react-redux';
import { register } from 'redux/herokuappOperations';
import {
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
  FormWrapper
} from './Registration.styled';

const Registration = () => {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterLabel>
          Username
          <RegisterInput type="text" name="name" autoComplete="off" required />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <RegisterInput type="email" name="email" autoComplete="off" required/>
        </RegisterLabel>
        <RegisterLabel>
          Password
          <RegisterInput type="password" name="password" autoComplete="off" required/>
        </RegisterLabel>
        <RegisterBtn type="submit">Register</RegisterBtn>
      </RegisterForm>
    </FormWrapper>
  );
};

export default Registration;
