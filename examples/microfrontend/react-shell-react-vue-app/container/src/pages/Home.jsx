import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../../react-app/src/components/Button';

const Home = () => {
  const history = useHistory();

  const handleStart = () => {
    history.push('/react');
  };
  
  return (
    <div className='home'>
      <h1>HOME</h1>
      <p>this page is rendered by the container</p>
      <CustomButton variant='contained' onClick={handleStart} label='GO TO THE GAME' disabled={null} loading={null} />
    </div>
  );
};

export default Home;
