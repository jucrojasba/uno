import React from 'react'
import { ButtonProps } from '@/models/button.model';

const Button: React.FC<ButtonProps> = ({ type, label, onClick }) => {
  return <button type={type} onClick={onClick}>{label}</button>;
};

export default Button
