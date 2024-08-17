import React from 'react'
import { ButtonFormProps } from '@/models/buttonForm.model';
import { GlobalTheme } from '@/app/GlobalStyling';
import styled from 'styled-components';

const ButtonCleanStyle = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: ${GlobalTheme.pageColors.bgTertiary};
  color: ${GlobalTheme.pageColors.textPrimary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: .8;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
`


const ButtonClear: React.FC<ButtonFormProps> = ({ type, label, onClick }) => {
  return <ButtonCleanStyle type={type} onClick={onClick}>{label}</ButtonCleanStyle>;
};

export default ButtonClear
