import React from 'react'
import { InputProps } from '@/models/input.model';
import styled from 'styled-components';

const LabelStyle = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.pageColors.textTertiary};
`
const InputStyle = styled.input`
  width: 100%;  
  padding: 10px;
  border-radius: 10px;
  border: none;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.pageColors.textTertiary};
  }
`

const Input: React.FC<InputProps> = ({ type, placeholder, id, value, onChange, required }) => {
  return (
    <>
      <LabelStyle htmlFor={id}>{placeholder}</LabelStyle>
      <InputStyle type={type} placeholder={placeholder} id={id} value={value} onChange={onChange} required={required}/>
    </>
  );
};

export default Input
