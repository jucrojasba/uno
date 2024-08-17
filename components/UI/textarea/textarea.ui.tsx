import React from "react";
import { TextareaProps } from "@/models/textarea.model";
import { GlobalTheme } from "@/app/GlobalStyling";
import styled from "styled-components";

const LabelStyle = styled.label`
  font-size: 16px;
  color: ${GlobalTheme.pageColors.textTertiary};
`;

const TextareaStyle = styled.textarea`
  height: 100px;
  resize: none;
  padding: 10px;
  border-radius: 8px;
  border: none;
  
  &:focus {
    outline: none;
    border-color: ${GlobalTheme.pageColors.textTertiary};
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
