import React from 'react'

interface ButtonProps {
  type: "submit" | "button";
  label: string;
}

const Button: React.FC<ButtonProps> = ({ type, label }) => {
  return <button type={type}>{label}</button>;
};

export default Button
