import React from 'react'

interface InputProps {
  type: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}


const Input: React.FC<InputProps> = ({ type, placeholder, id }) => {
  return <input type={type} placeholder={placeholder} id={id} />;
};

export default Input
