import React from 'react'
import { ButtonFormProps } from '@/models/buttonForm.model';
import styled from 'styled-components';

const ButtonClearStyle = styled.button`
  width: 100px;
  padding: 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.pageColors.btnQuaternary};
  color: ${({ theme }) => theme.pageColors.textPrimary};
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
  return <ButtonClearStyle type={type} onClick={onClick}>{label}</ButtonClearStyle>;
};

export default ButtonClear
