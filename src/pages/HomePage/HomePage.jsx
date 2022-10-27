import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPhoneSquare } from 'react-icons/fa';
import { HomeParagrapher, JokeWrapper, JokeBtn } from './HomePage.styled';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const r = await axios('https://api.chucknorris.io/jokes/random');
    setPosts(r.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <HomeParagrapher>
        Welcome to your phonebook app
        <FaPhoneSquare style={{ marginLeft: '5px', color: 'green' }} />
      </HomeParagrapher>
      <JokeWrapper>
        <HomeParagrapher>{posts.value}</HomeParagrapher>
        <JokeBtn onClick={fetchPost}>Get joke right now</JokeBtn>
      </JokeWrapper>
    </>
  );
};

export default HomePage;
