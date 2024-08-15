import React from "react";
import { TextareaProps } from "@/models/textarea.model";

const Textarea: React.FC<TextareaProps> = ({ placeholder, id, value, onChange }) => {
  return <textarea placeholder={placeholder} id={id} value={value} onChange={onChange} />;
};

export default Textarea;
