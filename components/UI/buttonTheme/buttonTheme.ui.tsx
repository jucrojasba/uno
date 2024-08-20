import React from 'react';
import { ButtonIconsToggleProps } from '@/models/buttonIconsToggle.model';
import styled from 'styled-components';
import { getPageTheme } from '@/utilities/page-theme.utility';

// Styled button component with dynamic background color based on the theme
const ButtonThemeStyle = styled.button<{ themeColor: string }>`
  width: 70px;
  height: 70px;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  background-color: ${({ themeColor }) => themeColor};

  &:hover {
    opacity: 0.8;
    transition: background-color 0.3s ease-in-out;
  }
`;

// ButtonTheme component
const ButtonTheme: React.FC<ButtonIconsToggleProps & { onClick: () => void }> = ({ type, icon, onClick }) => {
  // Get the current theme to determine the button color
  const currentTheme = getPageTheme();

  return (
    <ButtonThemeStyle 
      type={type} 
      onClick={onClick} 
      themeColor={currentTheme.pageColors.btnQuaternary}
    >
      {icon}
    </ButtonThemeStyle>
  );
};

export default ButtonTheme;
