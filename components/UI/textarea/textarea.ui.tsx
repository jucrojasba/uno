import React from "react";
import { TextareaProps } from "@/models/textarea.model";
import styled from "styled-components";

const LabelStyle = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.pageColors.textTertiary};
`;

const TextareaStyle = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  padding: 10px;
  border-radius: 8px;
  border: none;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.pageColors.textTertiary};
  }
`;

const Textarea: React.FC<TextareaProps> = ({ placeholder, id, value, onChange }) => {
  return (
    <>
      <LabelStyle htmlFor={id}>{placeholder}</LabelStyle>
      <TextareaStyle placeholder={placeholder} id={id} value={value} onChange={onChange} />
    </>
  );
};

export default Textarea;
