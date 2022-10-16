import { FaPhoneSquare } from 'react-icons/fa';
import { HomeParagrapher } from './HomePage.styled';
const HomePage = () => {
  return (
    <HomeParagrapher>
      Welcome to my phonebook app
      <FaPhoneSquare style={{ marginLeft: '5px', color: 'green' }} />
    </HomeParagrapher>
  );
};

export default HomePage;
