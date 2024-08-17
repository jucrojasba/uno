import React from 'react'
import { InputProps } from '@/models/input.model';
import { GlobalTheme } from '@/app/GlobalStyling';
import styled from 'styled-components';

const LabelStyle = styled.label`
  font-size: 16px;
  color: ${GlobalTheme.pageColors.textTertiary};
`
const InputStyle = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  
  &:focus {
    outline: none;
    border-color: ${GlobalTheme.pageColors.textTertiary};
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
