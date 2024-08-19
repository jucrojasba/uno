import React from 'react';
import { ButtonIconsToggleProps } from '@/models/buttonIconsToggle.model';
import styled from 'styled-components';

const ButtonIconStyle = styled.a`
  display: inline-flex;
  width: 70px;
  height: 70px;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.pageColors.btnQuaternary};
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: background-color 0.3s ease-in-out;
  }
`;

const ButtonIcon: React.FC<ButtonIconsToggleProps & { href: string, target?: string, onClick?: () => void }> = ({ type, icon, href, target = '_self', onClick }) => {
  return (
    <ButtonIconStyle 
      href={href} 
      target={target} 
      rel={target === '_blank' ? 'noopener noreferrer' : undefined} 
      onClick={onClick} 
    >
      {icon}
    </ButtonIconStyle>
  );
};

export default ButtonIcon;
