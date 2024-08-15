import React from "react";

interface TextareaProps {
  placeholder: string;
  id: string;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, id }) => {
  return <textarea placeholder={placeholder} id={id} />;
};

export default Textarea;
