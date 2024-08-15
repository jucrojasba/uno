import React from 'react'
import { InputProps } from '@/models/input.model';

const Input: React.FC<InputProps> = ({ type, placeholder, id, value, onChange, required }) => {
  return (
    <>
      <label htmlFor={id}>{placeholder}</label>
      <input type={type} placeholder={placeholder} id={id} value={value} onChange={onChange} required={required}/>
    </>
  );
};

export default Input
