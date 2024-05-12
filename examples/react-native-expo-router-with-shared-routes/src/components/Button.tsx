import React from 'react';
import { Button as ReactNativeButton } from 'react-native';

type ButtonProps = {
  onClick: () => void;
  title: string;
};

const Button = ({ onClick, title }: ButtonProps) => {
  return <ReactNativeButton onPress={onClick} title={title} />;
};

export default Button;
