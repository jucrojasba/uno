import React from "react";

interface TextareaProps {
  placeholder: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, id, value, onChange }) => {
  return <textarea placeholder={placeholder} id={id} value={value} onChange={onChange} />;
};

export default Textarea;
