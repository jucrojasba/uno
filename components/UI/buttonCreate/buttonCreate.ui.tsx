import React from 'react'
import { ButtonFormProps } from '@/models/buttonForm.model';

const ButtonCreate: React.FC<ButtonFormProps> = ({ type, label, onClick }) => {
  return <button type={type} onClick={onClick}>{label}</button>;
};

export default ButtonCreate
