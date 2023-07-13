import React from 'react';
import { Button, CircularProgress } from '@mui/material';

const CustomButton = ({ onClick, label, disabled, loading, variant }) => {
  return (
    <Button disabled={disabled} onClick={onClick} variant={variant}>
      {loading ? <CircularProgress color='secondary' size={24} /> : label}
    </Button>
  );
};

export default CustomButton;
