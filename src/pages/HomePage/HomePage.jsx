import { FaPhoneSquare } from 'react-icons/fa';
const HomePage = () => {
  return (
    <p style={{ display: 'flex', alignItems: 'center' }}>
      Welcome to my phonebook app
      <FaPhoneSquare style={{ marginLeft: '5px', color: 'green' }} />
    </p>
  );
};

export default HomePage;
