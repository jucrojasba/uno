import React from 'react'
import { InputProps } from '@/models/input.model';

const Input: React.FC<InputProps> = ({ type, placeholder, id, value, onChange }) => {
  return <input type={type} placeholder={placeholder} id={id} value={value} onChange={onChange} />;
};

export default Input
