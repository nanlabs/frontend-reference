import { Typography, Box } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box sx={{ mt: '4rem' }}>
      <Typography variant='h3' component='h1' gutterBottom textAlign='center'>
        Welcome to the Trivia Challenge!
      </Typography>
      <Typography variant='h5' component='h2' gutterBottom textAlign='center' fontStyle='italic'>
        The Game of Life and Death
      </Typography>
      <Typography variant='h5' component='h2' gutterBottom textAlign='center' fontStyle='italic'>
        Do you wanna try?
      </Typography>
    </Box>
  );
};

export default Header;
