import React from 'react'

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const Input: React.FC<InputProps> = ({ type, placeholder, id, value, onChange }) => {
  return <input type={type} placeholder={placeholder} id={id} value={value} onChange={onChange} />;
};

export default Input
