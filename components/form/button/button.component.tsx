import React from 'react'
import { ButtonProps } from '@/models/button.model';

const Button: React.FC<ButtonProps> = ({ type, label }) => {
  return <button type={type}>{label}</button>;
};

export default Button
